import cv2
from datetime import datetime
import os

os.makedirs('captures', exist_ok=True)

def capture_photo():
    # turns on webcam
    camera = cv2.VideoCapture(0)

    # takes a photo
    ret, frame = camera.read()

    # if ret == true, a photo was succesfully taken
    if ret:
        path = f"captures/{datetime.now().strftime('%H-%M-%S')}

        # saves to captures/
        cv2.imwrite(path,frame)

         # turns off webcam
        camera.release()
        return path
    camera.release()
    return None