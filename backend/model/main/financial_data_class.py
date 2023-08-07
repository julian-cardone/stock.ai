import requests
import pprint
import os
from dotenv import load_dotenv

class FinancialData:
    """
    FinancialData class is an interface for collecting and parsing financial data from the Alpha Vantage API

    Arguments:
        stock_model (StockModel object): StockModel instance of the user-inputted symbol

    Constructor Overview:
        loads the API key from the .env file
        json request to the corresponding URLs, pulls anual report data 
        the data comes in an array of objects wrapped in a parent object, with two keys: 'annualReports', and a quarterly one
    """
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

    """
    THIS IS THE BEGINNING OF THE OPERATING ASSUMPTIONS DATA COLLECTION FUNCTIONS

    they are mostly all the same: atempt to fetch data from the api, convert to integer, append to an array
    however, the historic revenue function checks to see if the most recent revenue is greater than or equal to 1 million
    if it is, then it activates a formatting trigger to scale every number down by 1 million
    so 1 million would be 1 in the sheet

    Arguments:
        self (FinancialData object): current instance of the FinancialData object

    Returns:
        historic_{metric} (array): 3 most recent years of data in descending chronological order
    """
    def get_historic_revenue(self):
        if int(self.income_statement_annuals[0]['totalRevenue']) >= 100000000:
            self.format = True

        historic_revenue = []

        for i in range(3):
            try:
                historic_revenue.append(self.number_formatter(int(self.income_statement_annuals[i]['totalRevenue'])))
            except:
                historic_revenue.append(0)

        return historic_revenue

    def get_historic_cor(self):        
        historic_cor = []

        for i in range(3):
            try:
                historic_cor.append(self.number_formatter(int(self.income_statement_annuals[i]['costOfRevenue'])))
            except:
                historic_cor.append(0)

        return historic_cor

    def get_historic_depreciation(self):        
        historic_depreciation = []

        for i in range(3):
            try:
                historic_depreciation.append(self.number_formatter(int(self.income_statement_annuals[i]['depreciationAndAmortization'])))
            except:
                historic_depreciation.append(0)

        return historic_depreciation

    def get_historic_rnd(self):
        historic_rnd = []

        for i in range(3):
            try:
                historic_rnd.append(self.number_formatter(int(self.income_statement_annuals[i]['researchAndDevelopment'])))
            except:
                historic_rnd.append(0)

        return historic_rnd

    def get_historic_sga(self):        
        historic_sga = []

        for i in range(3):
            try:
                historic_sga.append(self.number_formatter(int(self.income_statement_annuals[i]['sellingGeneralAndAdministrative'])))
            except:
                historic_sga.append(0)

        return historic_sga

    def get_historic_capex(self):        
        historic_capex = []

        for i in range(3):
            try:
                historic_capex.append(self.number_formatter(int(self.cash_flow_statement[i]['capitalExpenditures'])))
            except:
                historic_capex.append(0)

        return historic_capex
