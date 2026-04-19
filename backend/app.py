from flask import Flask, jsonify, send_file
from flask_cors import CORS
import threading
import os
from dotenv import load_dotenv

load_dotenv()

from camera import capture_photo
from face_auth import check_authorization
from ai_profile import generate_profile
from voice import speak
from arduino_listener import find_arduino_port

import serial

app = Flask(__name__)
CORS(app)  # allows React frontend to talk to this server

# stores the latest capture data to send to frontend
latest_capture = {
    "photo": None,
    "authorized": None,
    "name": None,
    "profile": None,
    "timestamp": None
}

def handle_intruder():
    from datetime import datetime
    
    print("Handling intruder...")
    
    # 1. capture photo
    photo_path = capture_photo()
    if not photo_path:
        print("Failed to capture photo")
        return
    
    # 2. check if authorized
    authorized, name = check_authorization(photo_path)
    print(f"Authorization result: {authorized}, {name}")
    
    # 3. generate ai threat profile
    profile = generate_profile(photo_path, authorized, name)
    print(f"Profile: {profile}")
    
    # 4. update latest capture for frontend
    latest_capture["photo"] = photo_path
    latest_capture["authorized"] = authorized
    latest_capture["name"] = name
    latest_capture["profile"] = profile
    latest_capture["timestamp"] = datetime.now().strftime("%H:%M:%S")
    
    # 5. speak the verdict
    if authorized:
        speak(f"Identity confirmed. Welcome back, Agent {name}. {profile}")
    else:
        speak(f"Warning. Unauthorized access detected. {profile}")

def listen_to_arduino():
    # find and connect to arduino
    port = find_arduino_port()
    if not port:
        print("Arduino not found!")
        return
    
    ser = serial.Serial(port, 9600, timeout=1)
    print(f"Connected to Arduino on {port}")
    print("System armed. Waiting for motion...")
    
    while True:
        line = ser.readline().decode('utf-8').strip()
        if line == "INTRUDER":
            print("Motion detected!")
            # run in separate thread so it doesn't block the listener
            threading.Thread(target=handle_intruder).start()

# api endpoint for frontend to get latest capture data
@app.route('/latest')
def get_latest():
    return jsonify(latest_capture)

# api endpoint for frontend to get the captured photo
@app.route('/photo')
def get_photo():
    if latest_capture["photo"] and os.path.exists(latest_capture["photo"]):
        return send_file(latest_capture["photo"])
    return "No photo yet", 404

# start arduino listener in background thread
threading.Thread(target=listen_to_arduino, daemon=True).start()

if __name__ == "__main__":
    app.run(port=5000, debug=False)