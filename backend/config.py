import os
from dotenv import load_dotenv

load_dotenv()

url = os.getenv("DATABASE_URL")
host = os.getenv("DB_HOST")
port = os.getenv("DB_PORT")
user = os.getenv("DB_USER")
password = os.getenv("DB_PASSWORD")
name = os.getenv("DB_NAME")

# PostgreSQL connection details from Render dashboard
DB_HOST = host
DB_PORT = port
DB_USER = user
DB_PASSWORD = password
DB_NAME = name

# SQLAlchemy database URI
SQLALCHEMY_DATABASE_URI = url