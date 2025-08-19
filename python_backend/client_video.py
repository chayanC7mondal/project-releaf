import requests
import sys

API_URL_VIDEO = "http://127.0.0.1:5000/api/scan"

def send_video_request(video_path: str):
    with open(video_path, "rb") as f:
        files = {"file": (video_path, f, "video/mp4")}
        response = requests.post(API_URL_VIDEO, files=files)
    if response.status_code == 200:
        print("✅ Response:")
        print(response.json())
    else:
        print("❌ Error:", response.status_code, response.text)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python client_video.py <video_file>")
        sys.exit(1)
    send_video_request(sys.argv[1])
