import cv2
import os
import base64
import re
import json
import mimetypes
from typing import List, Dict, Any

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image
import aiofiles
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage

load_dotenv()
MODEL = "gpt-4o-mini"
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY", "")

llm = ChatOpenAI(model=MODEL, temperature=0)

SYSTEM_PROMPT = """You are a careful product appraiser.
You will receive 1–5 images of the SAME product from different angles.
Tasks:
1) Rate the product's overall CONDITION (0–100)
2) List the MOST LIKELY materials
3) Summarize visible issues/defects

Output strict JSON:
{
  "condition_score": number,
  "condition_label": "Destroyed | Poor | Fair | Good | Very Good | Like New | New",
  "materials": [string, ...],
  "issues": [string, ...],
  "confidence": "Low | Medium | High",
  "notes": string
}"""

USER_INSTRUCTION = "Rate the product's condition (0–100) and identify likely materials from these images."

# ---------------- CORS ----------------
app = FastAPI(title="Product Condition Rater API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Helpers ----------------
def _resize_image(path: str, max_size: int = 512) -> str:
    img = Image.open(path)
    img.thumbnail((max_size, max_size))
    new_path = f"resized_{max_size}_{os.path.basename(path)}"
    img.save(new_path, optimize=True, quality=85)
    return new_path

def _file_to_data_url(path: str) -> str:
    mime, _ = mimetypes.guess_type(path)
    if not mime or not mime.startswith("image/"):
        mime = "image/jpeg"
    with open(path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode("utf-8")
    return f"data:{mime};base64,{b64}"

def _normalize_images(image_inputs: List[str]) -> List[Dict[str, Any]]:
    # Instead of returning base64 data, just return filenames for prompt context
    blocks = []
    for item in image_inputs:
        if item.lower().startswith("http://") or item.lower().startswith("https://"):
            blocks.append({"type": "image_url", "image_url": {"url": item}})
        else:
            if not os.path.exists(item):
                raise FileNotFoundError(f"Local image not found: {item}")
            resized_path = _resize_image(item, max_size=512)
            blocks.append({"type": "image_file", "image_file": {"filename": os.path.basename(resized_path)}})
    return blocks

def extract_json(raw: str):
    raw = raw.strip()
    if raw.lower().startswith("response:"):
        raw = raw.split(":", 1)[1].strip()
    match = re.search(r"```json(.*?)```", raw, re.DOTALL)
    if match:
        raw = match.group(1).strip()
    return json.loads(raw)

def extract_images_from_video(video_path: str, output_dir="frames_output", k=5) -> List[str]:
    os.makedirs(output_dir, exist_ok=True)
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        raise ValueError("Cannot open video file")
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    k = min(k, total_frames)
    frame_indices = [int(i * total_frames / k) for i in range(k)]
    saved_paths = []
    for idx, frame_no in enumerate(frame_indices):
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_no)
        ret, frame = cap.read()
        if ret:
            img_path = os.path.join(output_dir, f"frame_{idx}.jpg")
            cv2.imwrite(img_path, frame)
            saved_paths.append(img_path)
    cap.release()
    return saved_paths

def rate_product(images: List[str]) -> Dict[str, Any]:
    if not (1 <= len(images) <= 5):
        raise ValueError("Please provide between 1 and 5 images.")

    image_blocks = _normalize_images(images)

    # Only mention the number of images and their filenames in the prompt
    image_filenames = [img["image_file"]["filename"] if "image_file" in img else img["image_url"]["url"] for img in image_blocks]
    message_content = USER_INSTRUCTION + f"\n\nNumber of images: {len(image_filenames)}\nFilenames: {', '.join(image_filenames)}"

    messages = [
        SystemMessage(content=SYSTEM_PROMPT),
        HumanMessage(content=message_content)
    ]

    response = llm.invoke(messages)

    raw_content = str(response.content) if not isinstance(response.content, list) else "".join(
        json.dumps(item) if isinstance(item, dict) else str(item) for item in response.content
    )

    try:
        result = extract_json(raw_content)
    except json.JSONDecodeError:
        result = {
            "condition_score": None,
            "condition_label": None,
            "materials": [],
            "issues": [],
            "confidence": "Low",
            "notes": f"Non-JSON output: {raw_content}"
        }
    return result


# ---------------- FastAPI Endpoints ----------------
class URLInput(BaseModel):
    urls: List[str]

@app.post("/rate/files")
async def rate_from_files(files: List[UploadFile] = File(...)):
    if not (1 <= len(files) <= 5):
        raise HTTPException(status_code=400, detail="Upload 1–5 images.")

    saved_files = []
    for file in files:
        temp_path = f"temp_{file.filename}"
        async with aiofiles.open(temp_path, "wb") as out_file:
            content = await file.read()
            await out_file.write(content)
        saved_files.append(temp_path)

    result = rate_product(saved_files)
    for f in saved_files:
        if os.path.exists(f):
            os.remove(f)
    return JSONResponse(content=result)

@app.post("/rate/video")
async def rate_from_video(file: UploadFile = File(...)):
    temp_path = f"temp_{file.filename}"
    async with aiofiles.open(temp_path, "wb") as out_file:
        content = await file.read()
        await out_file.write(content)

    images_path = extract_images_from_video(temp_path, k=5)
    result = rate_product(images_path)

    if os.path.exists(temp_path):
        os.remove(temp_path)
    for img in images_path:
        if os.path.exists(img):
            os.remove(img)
    return JSONResponse(content=result)

@app.post("/rate/urls")
async def rate_from_urls(input_data: URLInput):
    if not (1 <= len(input_data.urls) <= 5):
        raise HTTPException(status_code=400, detail="Provide 1–5 URLs.")
    result = rate_product(input_data.urls)
    return JSONResponse(content=result)
