import requests
import pprint
import os
from dotenv import load_dotenv

class FinancialData:

    def __init__(self, stock_model):
        load_dotenv()
        key = os.getenv("AV_KEY")

        INCOME_STATEMENT_URL = f'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol={stock_model.symbol}&apikey={key}'
        BALANCE_SHEET_URL = f'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol={stock_model.symbol}&apikey={key}'
        
        self.stock_model = stock_model
        self.income_statement_annuals = requests.get(INCOME_STATEMENT_URL).json()['annualReports']
        self.balance_sheet = requests.get(BALANCE_SHEET_URL).json()['annualReports']

    def get_historic_revenue(self):

        historic_revenue = []

        for i in range(3):
            try:
                historic_revenue.append(int(self.income_statement_annuals[i]['totalRevenue']))
            except ValueError:
                print("Invalid number format")

        return historic_revenue

    def get_historic_cogs(self):
        
        historic_cogs = []

        for i in range(3):
            try:
                historic_cogs.append(int(self.income_statement_annuals[i]['costofGoodsAndServicesSold']))
            except ValueError:
                print("Invalid number format")

        return historic_cogs
    
    # def bs_test(self):
    #     iss = self.income_statement['annualReports']
    #     pp = pprint.PrettyPrinter(indent=4)
    #     pp.pprint(iss)
