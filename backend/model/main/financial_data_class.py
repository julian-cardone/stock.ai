import requests
import pprint

class FinancialData:

    INCOME_STATEMENT_URL = 'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo'

    def __init__(self, stock_model):
        self.symbol = stock_model.symbol
        self.income_statement = requests.get(FinancialData.INCOME_STATEMENT_URL).json()

    def get_historic_revenue(self):
        annuals = (data['annualReports'])
        historic_revenue = []

        for i in range(3):
            historic_revenue.append(annuals[i]['totalRevenue'])

        print(historic_revenue)
        

