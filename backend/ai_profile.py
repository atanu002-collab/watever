from dotenv import load_dotenv
load_dotenv()

import google.generativeai as genai
import os
import PIL.Image


# calls api key
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel('gemini-2.5-flash')

# GENERATE THREATS YEAHHHH!
def generate_profile(photo_path, authorized, name="Unknown"):  # if the face recognizer returns "Unknown"
    # load pic
    img = PIL.Image.open(photo_path)

    # initialize statuses
    status = f"AUTHORIZED AGENT: {name}" if authorized else "UNAUTHORIZED INTRUDER"

    # prompt to generate threat profile (i just asked chat to make me this prompt)
    prompt = prompt = f"""You are a spy intelligence system called ARGUS. 
    This subject is {status}. 
    Generate a short dramatic threat briefing in 2-3 sentences.
    Include: physical description, demeanor, threat level (LOW/MEDIUM/HIGH), recommended action.
    Format it like a classified intelligence report. Be dramatic and cinematic."""

    response = model.generate_content([prompt, img])
    return response.text