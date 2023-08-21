from flask import Flask, request, jsonify, session, make_response, send_file
from backend.app.db import db_setup
from backend.app.routes.stock_routes import stock_bp
from backend.app.db.models.instance import Instance
import os

app = Flask(__name__)

db = db_setup.setup_db()

@app.before_request
def before_request():
    # Apply the authorization middleware to all routes except "/start_session"
    if request.endpoint != 'start_session':
        authorize_request()


def authorize_request():
    # Extract the session token from the request headers
    token = request.headers.get("Authorization")

    # Ensure that the token exists and starts with "Bearer "
    if not token or not token.startswith("Bearer "):
        return jsonify({"message": "Unauthorized"}), 401

    # Extract the actual token value (removing the "Bearer " prefix)
    session_token = token.split(" ")[1]

    # Validate the session token (implement your own validation logic here)
    with db, db.cursor() as cursor:
            query = "SELECT token_id FROM Instance WHERE token_id = %s;"
            cursor.execute(query, (session_token,))
            existing_token = cursor.fetchone()
            if not existing_token:  # Token does not exist in the database
                return jsonify({"message": "Unauthorized"}), 401


@app.route('/start_session', methods=['POST'])
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

    return jsonify({"message": "Instance Created", "session_token": token_id})
        