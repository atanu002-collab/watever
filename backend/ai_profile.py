import google.generativeai as genai
import os
import PIL.Image

# calls api key
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-1.5-flash')

# GENERATE THREATS YEAHHHH!
def generate_profile(photo_path, authorized, name="Unknown"):  # if the face recognizer returns "Unknown"
    