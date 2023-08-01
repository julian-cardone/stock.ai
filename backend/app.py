from flask import Flask, request, jsonify, session, make_response
from db import db_setup
from db.models.instance import Instance

app = Flask(__name__)

db = db_setup.setup_db()

@app.route('/api/create', methods=['POST'])
def create_instance():
    user_instance = Instance()

    with db, db.cursor() as cursor:
        while True:
            session_key = user_instance.create()  # Generate a new session token
            query = "SELECT token_id FROM Instance WHERE token_id = %s;"
            cursor.execute(query, (session_key,))
            existing_token = cursor.fetchone()
            if not existing_token:  # Token does not exist in the database
                break

        query = "INSERT INTO Instance (token_id) VALUES (%s) RETURNING token_id;" 
        cursor.execute(query, (session_key,))
        token_id = cursor.fetchone()[0]

    response = make_response('Session Created')
    response.set_cookie('session_key', session_key)  # Set the session key as the cookie value

    return response

