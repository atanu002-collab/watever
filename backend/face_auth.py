import cv2
import os
import numpy as np

# learns faces by analyzing patterns (aka light n dark pixels)
recognizer = cv2.face.LBPHFaceRecognizer_create()

# identify which part of imgs are faces 
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# identifier works w numbers, so this keeps a dictionary that associates numbers with names
id_to_name = {}

def train_recognizer():
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

            # finds face in img, runs detection multiple times
            # scales img 1.3x to search, 5 is the # of occurrences needed to confirm a face
            detected_faces = face_cascade.detectMultiScale(gray, 1.3, 5)

            if len(detected_faces) == 0: # if it didn't find a face in the img
                return False, "Unknown"

            for (x,y,w,h) in detected_faces:
                # crops just the face
                face = gray[y:y + h, x:x+w]

                # compares face w/ all the currently trained faces
                # label is who the recognizer thinks the person is (as a #)
                label, confidence = recognizer.predict(face)
                    
                # lower confidence is better, less of a distance

                # authorized agent identified
                if confidence < 70:
                    name = id_to_name.get(label, "Unknown")
                    return True, name

                # otherwise, match wasn't found
                return False, "Unknown"

            train_recognizer()
