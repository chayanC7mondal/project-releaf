import requests
import sys

API_URL = "http://127.0.0.1:5000/api/scan"

def send_request(image_paths):
    files = [("files", open(path, "rb")) for path in image_paths]
    response = requests.post(API_URL, files=files)
    if response.status_code == 200:
        print("✅ Response:")
        print(response.json())
    else:
        print("❌ Error:", response.status_code, response.text)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python client.py <image1> [<image2> ... up to 5]")
        sys.exit(1)
    image_paths = sys.argv[1:6]
    send_request(image_paths)
