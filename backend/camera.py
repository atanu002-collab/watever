import cv2
from datetime import datetime
import os

os.makedirs('captures', exist_ok=True)

def capture_photo():
    camera = cv2.VideoCapture(0)
    ret, frame = camera.read()

    if ret:
        path = f"captures/{datetime.now().strftime('%H-%M-%S')}

        # saves to captures/
        cv2.imwrite(path,frame)

         # turns off webcam
        camera.release()
        return path
    camera.release()
    return None