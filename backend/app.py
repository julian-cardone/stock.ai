from flask import Flask
from db import db_setup

app = Flask(__name__)

db_setup.setup_db()

@app.get('/')
def home():
    return "hello, world!"