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
        CASH_FLOW_STATEMENT_URL = f'https://www.alphavantage.co/query?function=CASH_FLOW&symbol={stock_model.symbol}&apikey={key}'
        
        self.stock_model = stock_model
        self.income_statement_annuals = requests.get(INCOME_STATEMENT_URL).json()['annualReports']
        self.balance_sheet = requests.get(BALANCE_SHEET_URL).json()['annualReports']
        self.cash_flow_statement = requests.get(CASH_FLOW_STATEMENT_URL).json()['annualReports']

    def number_formatter(self, n):
        if self.format:
            return n/1000000
        else:
            return n

    def get_historic_revenue(self):

        if int(self.income_statement_annuals[0]['totalRevenue']) >= 100000000:
            self.format = True

        historic_revenue = []

        for i in range(3):
            try:
                historic_revenue.append(self.number_formatter(int(self.income_statement_annuals[i]['totalRevenue'])))
            except ValueError:
                print("Invalid number format")

        return historic_revenue

    def get_historic_cor(self):
        
        historic_cor = []

        for i in range(3):
            try:
                historic_cor.append(self.number_formatter(int(self.income_statement_annuals[i]['costOfRevenue'])))
            except ValueError:
                print("Invalid number format")

        return historic_cor

    def get_historic_depreciation(self):
        
        historic_depreciation = []

        for i in range(3):
            try:
                historic_depreciation.append(self.number_formatter(int(self.income_statement_annuals[i]['depreciationAndAmortization'])))
            except ValueError:
                print("Invalid number format")

        return historic_depreciation

    def get_historic_rnd(self):

        historic_rnd = []

        for i in range(3):
            try:
                historic_rnd.append(self.number_formatter(int(self.income_statement_annuals[i]['researchAndDevelopment'])))
            except ValueError:
                print("Invalid number format")

        return historic_rnd

    def get_historic_sga(self):
        
        historic_sga = []

        for i in range(3):
            try:
                historic_sga.append(self.number_formatter(int(self.income_statement_annuals[i]['sellingGeneralAndAdministrative'])))
            except ValueError:
                print("Invalid number format")

        return historic_sga

    def get_historic_capex(self):
        
        historic_capex = []

        for i in range(3):
            try:
                historic_capex.append(self.number_formatter(int(self.cash_flow_statement[i]['capitalExpenditures'])))
            except ValueError:
                print("Invalid number format")

        return historic_capex



    # def get_historic_amortization(self):
        
    #     historic_amortization = []

    #     for i in range(3):
    #         try:
    #             historic_amortization.append(int(self.income_statement_annuals[i]['depreciationAndAmortization']))
    #         except ValueError:
    #             print("Invalid number format")

    #     return historic_amortization  
    
    # def bs_test(self):
    #     iss = self.income_statement['annualReports']
    #     pp = pprint.PrettyPrinter(indent=4)
    #     pp.pprint(iss)
