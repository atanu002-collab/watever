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