from flask import Flask
import os
import psychopg2
from dotenv import load_dotenv

# # Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
url = os.getenv("DATABASE_URL")
conneciton = psychopg2.connect(url)

@app.get('/')
def home():
    return "hello, world!"