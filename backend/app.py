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
