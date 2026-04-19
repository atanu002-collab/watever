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
    for filename in os.listdir('authorized_agents'):
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

            # finds face in img
            # scales img 1.3x to search, 5 is the # of occurrences needed to confirm a face
            detected_faces = face_cascade.detectMultiScale(gray, 1.3, 5)

            # crop and save each face found
            for (x, y, w, h) in detected_faces:
                faces.append(gray[y:y+h, x:x+w])
                labels.append(idx)

    # train the recognizer on all collected faces
    if faces:
        recognizer.train(faces, np.array(labels))
        print(f"Trained on {len(faces)} faces: {list(id_to_name.values())}")

def check_authorization(photo_path):
    # load the captured photo
    img = cv2.imread(photo_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # try to find a face in the captured photo
    detected_faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    # if no face found, they're unknown
    if len(detected_faces) == 0:
        return False, "Unknown"

    for (x, y, w, h) in detected_faces:
        # crop just the face
        face = gray[y:y+h, x:x+w]

        # compare against trained faces
        # lower confidence = better match
        label, confidence = recognizer.predict(face)

        # if confidence is below 70, it's a good match
        if confidence < 70:
            name = id_to_name.get(label, "Unknown")
            return True, name  # authorized!

    # face found but no match
    return False, "Unknown"  # unauthorized!

# train as soon as file is imported
train_recognizer()