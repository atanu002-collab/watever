from flask import Flask, jsonify, request
from flask_cors import CORS
import camera

app = Flask(__name__)
CORS(app)  # allows React to call it

settings = {
    "faceDetection": True,
    "motionDetection": True,
}

@app.get("/api/settings")
def get_settings():
    return jsonify(settings)

@app.patch("/api/settings")
def update_settings():
    data = request.get_json()
    settings.update(data)
    return jsonify(settings)

@app.get("/api/status")
def get_status():
    return jsonify({
        "cameraConnected": camera.camera.isOpened(),
        "detectionMode": "Active" if settings["faceDetection"] or settings["motionDetection"] else "Inactive",
        "version": "1.0"
    })

@app.post("/api/capture")
def capture():
    path = camera.capture_photo()
    return jsonify({"success": path is not None, "path": path})

if __name__ == "__main__":
    app.run(port=8000, debug=True)