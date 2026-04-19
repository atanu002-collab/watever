import requests
import os
from dotenv import load_dotenv
from playsound import playsound

load_dotenv()

ELEVENLABS_API_KEY = os.getenv('ELEVENLABS_API_KEY')
VOICE_ID = "21m00Tcm4TlvDq8ikWAM"

def speak(text):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

    headers = {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }

    body = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }

    response = requests.post(url, headers=headers, json=body)

    # saves audio 
    with open("verdict.mp3", "wb") as f:
        f.write(response.content)
    
    # plays it
    playsound("verdict.mp3")