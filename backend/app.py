from flask import Flask, request, jsonify, session, make_response, send_file
from backend.db import db_setup
from backend.db.models.instance import Instance
from backend.model.main.stock_model import StockModel
import os
import dash
from dash import dcc
from dash import html
from dash.dependencies import Input, Output
import plotly.graph_objs as go
from backend.graph.data_fetching import create_historical_data_csv
from backend.graph.data_processing import process_data
from dash import dash_table
import pandas as pd

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
    try:
        # Get JSON data from the request body
        json_data = request.get_json()

        # Access the inputValue from the JSON data
        inputValue = json_data.get('inputValue', '') #symbol

        # Process the inputValue or perform any other operations
        model = StockModel(inputValue)
        model.create_model()

        file_path = f'{inputValue}_operating_assumptions.xlsx'

        # Return the saved spreadsheet as a downloadable file
        response = send_file(file_path, as_attachment=True, download_name=f'{inputValue}_operating_assumptions.xlsx')
        os.remove(file_path)

        return response

    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route("/info", methods=["POST"])
def gather_info():
    try:
        json_data = request.get_json()
        # Access the inputValue from the JSON data
        inputValue = json_data.get('inputValue', '') #symbol
        
        model = StockModel(inputValue)
        res = model.generate_info()

        return jsonify({"info": res})
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route("/two_day_averages", methods=['POST'])
def two_day_averages():
    # try:
        json_data = request.get_json()
        # Access the inputValue from the JSON data
        inputValue = json_data.get('inputValue', '') #symbol

        # Check if the CSV file exists, and if not, create it
        csv_file = './historical_stock_data.csv'
        if not os.path.exists(csv_file):
            create_historical_data_csv(inputValue)

        # Read and process the CSV file with 2-day moving averages
        df = process_data(csv_file)

        # Create a Dash web application
        app = dash.Dash(__name__)

        # Define the layout of the Dash app
        app.layout = html.Div([

            # Table to display stock data and moving averages
            dash_table.DataTable(
                id='data-table',
                columns=[{"name": col, "id": col} for col in df.columns],
                data=df.to_dict('records'),
                style_cell={'textAlign': 'center'},
            ),

            # Chart to display only VWAP
            dcc.Graph(
                id='vwap-chart',
                figure={
                    'data': [
                        {'x': df['Date'], 'y': df[f'{inputValue} Close_Price'], 'type': 'line', 'name': 'DRI'},
                    ],
                    'layout': go.Layout(
                        title='2D moving vwap of close price',
                        xaxis={'title': 'Dates'},
                        yaxis={'title': '2 day moving vwap'}
                    )
                }
            )
        ])
        app.run_server(debug=True)
        return jsonify({"success" : True})

    # except Exception as e:
        # return jsonify({"error": str(e)})
        