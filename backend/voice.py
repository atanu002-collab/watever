import requests
import os
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv('ELEVENLABS_API_KEY')
VOICE_ID = "pNInz6obpgDQGcFmaJgB"

def speak(text):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    
    # request headers with api key
    headers = {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }
    
    # request body with text and voice settings
    body = {
        "text": text,
        "model_id": "eleven_turbo_v2",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }
    
    response = requests.post(url, headers=headers, json=body)
    
    # check if api call succeeded
    if response.status_code != 200:
        print(f"ElevenLabs error: {response.text}")
        return
    
    # save audio to file
    with open("verdict.mp3", "wb") as f:
        f.write(response.content)
    
    # open with default mp3 player on windows
    os.startfile("verdict.mp3")