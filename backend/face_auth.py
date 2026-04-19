import cv2
import os
import numpy as np

# learns faces by analyzing patterns (aka light n dark pixels)
recognizer = cv2.face.LBPHFaceRecognizer_create()

# identify which part of imgs are faces 
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# identifier works w numbers, so this keeps a dictionary that associates numbers with names
id_to_name = {}

def train_identifer():
    faces = []
    labels = []

    # keeps track of names already seen so each person gets a consistent ID
    name_to_id = {}
    current_id = 0

    # loops thru every photo in authorized_agents
    for idx, filename in enumerate(os.listdir('authorized_agents')):
        if filename.endswith('.jpg') or filename.endswith('.png'):
            
            # gets persons name from the filename (ex. "andrew_1" -> "andrew")
            name = filename.replace('.jpg', '').replace('.png', '').rsplit('_', 1)[0]
            
            # if not already identified, assigns a new id
            if name not in name_to_id:
                name_to_id[name] = current_id
                id_to_name[current_id] = name
                current_id += 1

                idx = name_to_id[name]

                # loads image + loads in grayscale so identifier can use it
                img_path = os.path.join('authorized_agents', filename)
                img = cv2.imread(img_path)

                gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

                # finds face 
                detected_faces = face_cascade.detectMultiScale(gray, 0.9, 5)