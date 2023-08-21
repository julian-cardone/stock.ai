from flask import Blueprint, render_template

stock_bp = Blueprint('stock', __name__)

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