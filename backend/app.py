from flask import Flask, request, jsonify
from db import db_setup
from db.models.instance import Instance

app = Flask(__name__)

db = db_setup.setup_db()

@app.route('/api/create', methods=['POST'])
def create_instance():

    user_instance = Instance()

    query = "INSERT INTO Instance (token_id) VALUES (%s) RETURNING token_id;" 
    values = (user_instance.create(),)

    with db:
        with db.cursor() as cursor:
            cursor.execute(query, values)
            token_id = cursor.fetchone()[0]
    return {"token": token_id}, 201