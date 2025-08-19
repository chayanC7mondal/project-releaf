from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn
import os
import shutil

# Import chatbot and scanner logic
from chatbot import chat_endpoint as chatbot_chat_endpoint, ChatRequest as ChatbotChatRequest
from vlm import rate_from_files, rate_from_video, rate_from_urls, URLInput as VlmURLInput

app = FastAPI(title="Unified Waste Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Chatbot endpoint ---


@app.post("/api/chatbot")
def chat_endpoint(request: ChatbotChatRequest):
    return chatbot_chat_endpoint(request)

# --- Scanner endpoints (image, video, urls) ---
@app.post("/api/scan")
async def scan(files: List[UploadFile] = File(None), file: UploadFile = File(None)):
    # Accepts either multiple images or a single video
    if files:
        # Multiple images
        return await rate_from_files(files)
    elif file is not None and file.filename:
        filename = file.filename.lower()
        if filename.endswith(('.mp4', '.avi', '.mov', '.mkv')):
            # Video file
            return await rate_from_video(file)
        elif filename.endswith(('.jpg', '.jpeg', '.png', '.bmp', '.gif')):
            # Single image as a list
            return await rate_from_files([file])
        else:
            raise HTTPException(status_code=400, detail="Unsupported file type.")
    else:
        raise HTTPException(status_code=400, detail="No file(s) uploaded.")


# Optionally, add the /rate/urls endpoint if needed


@app.post("/api/scan/urls")
async def scan_urls(input_data: VlmURLInput):
    return await rate_from_urls(input_data)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), reload=True)
