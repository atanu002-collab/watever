import cv2
from datetime import datetime
import os # so we can make folders

os.makedirs('captures', exist_ok=True) # makes the captures/ folder if it's not there alr

# open camera ONCE when backend starts so it's ready instantly
camera = cv2.VideoCapture(0)
camera.set(cv2.CAP_PROP_BUFFERSIZE, 1)

def capture_photo():
    # takes a photo instantly since camera is already on
    ret, frame = camera.read()

    # if ret == true, a photo was succesfully taken
    if ret:
        path = f"captures/{datetime.now().strftime('%H-%M-%S')}.jpg"

        # saves to captures/
        cv2.imwrite(path, frame)
        return path
    return None