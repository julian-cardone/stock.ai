from flask import Flask, request, jsonify, session, make_response, send_file
from backend.db import db_setup
from backend.db.models.instance import Instance
from backend.model.main.stock_model import StockModel

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


@app.route('/operating_assumptions', methods=["POST"])
def create_hoa_model():
    # try:
        # Get JSON data from the request body
        json_data = request.get_json()

        # Access the inputValue from the JSON data
        inputValue = json_data.get('inputValue', '') #symbol

        # Process the inputValue or perform any other operations
        model = StockModel(inputValue)
        model.create_model()

        # return send_file(file_path, as_attachment=True, download_name=f'{file_name}.xlsx')
        return jsonify({"working": "it worked"})

    # except Exception as e:
    #     print(e)
    #     return jsonify({"error": "there was an error"})