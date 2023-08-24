from flask import Blueprint, render_template, jsonify, request
from backend.app.logic.main.stock_manager import StockManager

stock_bp = Blueprint('stock', __name__)

@stock_bp.route('/validate', methods=['POST'])
def validate_stock():
    try:
        json_data = request.get_json()
        inputValue = json_data.get('inputValue', '') #symbol

        stock = StockManager(inputValue)

        return jsonify({"validity": True})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@stock_bp.route('/get_real_time_summary_data', methods=["POST"])
def get_real_time_summary_data():
    try:
        json_data = request.get_json()
        inputValue = json_data.get('inputValue', '') #symbol

        stock = StockManager(inputValue)
        stock_info = stock.get_real_time_summary_data()

        return jsonify({"stock_info": stock_info})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@stock_bp.route('/get_static_summary_data', methods=["POST"])
def get_static_summary_data():
    try:
        json_data = request.get_json()
        inputValue = json_data.get('inputValue', '') #symbol

        stock = StockManager(inputValue)
        stock_info = stock.get_static_summary_data()

        return jsonify({"stock_info": stock_info})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@stock_bp.route('/get_overview_info', methods=["POST"])
def get_overview_info():
    try:
        json_data = request.get_json()
        inputValue = json_data.get('inputValue', '') #symbol

        stock = StockManager(inputValue)
        stock_info = stock.get_overview_info()

        return jsonify({"stock_info": stock_info})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# !!! DO NOT DELETE THESE, THESE ARE THE LOGICS FOR THE MODEL CREATION AND DOWNOADING, AND THE GPT LOGIC !!!
# @app.route('/operating_assumptions', methods=["POST"])
# def create_hoa_model():
#     try:
#         # Get JSON data from the request body
#         json_data = request.get_json()

#         # Access the inputValue from the JSON data
#         inputValue = json_data.get('inputValue', '') #symbol

#         # Process the inputValue or perform any other operations
#         model = StockModel(inputValue)
#         model.create_model()

#         file_path = f'{inputValue}_operating_assumptions.xlsx'

#         # Return the saved spreadsheet as a downloadable file
#         response = send_file(file_path, as_attachment=True, download_name=f'{inputValue}_operating_assumptions.xlsx')
#         os.remove(file_path)

#         return response

#     except Exception as e:
#         return jsonify({"error": str(e)}), 400

# @app.route("/info", methods=["POST"])
# def gather_info():
#     try:
#         json_data = request.get_json()
#         # Access the inputValue from the JSON data
#         inputValue = json_data.get('inputValue', '') #symbol
        
#         model = StockModel(inputValue)
#         res = model.generate_info()

#         return jsonify({"info": res})
#     except Exception as e:
#         return jsonify({"error": str(e)})