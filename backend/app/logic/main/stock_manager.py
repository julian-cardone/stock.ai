from yahooquery import Ticker
from backend.app.logic.main.sheet_class import Sheet
# import openai
# import os
'''
Singleton pattern:
Override the __new__ method of the StockManager 
Checks to see if the instance of the symbol has already been created 
If not, then uses the __new__ method of the superclass (Object)
Have to do this because since we are ovveriding the __new__ method in the current class, and cannot use it. Would result in infnite recursion
then we call the initialize method to perform any initializaiton logic on the new instance
'''

class StockManager:
    _instances = {} # underscore is convention to indicate that the variable is intended for internal use within a class or module

    def __new__(cls, symbol):
        if symbol not in cls._instances:
            cls._instances[symbol] = super().__new__(cls)
            cls._instances[symbol].initialize(symbol)
        return cls._instances[symbol]

    def initialize(self, symbol):
        try:
            stock = Ticker(symbol)
            stock_info = stock.asset_profile
            self.symbol = symbol
            self.info = stock_info
        except Exception as yq_error:
            print(f"An error occurred: {yq_error}")
            self.symbol = None
            raise RuntimeError("Instance creation aborted. Please enter a valid stock symbol.")

    def get_stock_info(self):
        print(self.info)
        return self.info

        # def create_model(self):
        # self.model = Sheet(self)
        

    # def generate_info(self):
    #     info = {
    #         "address": self.info['address1'],
    #         "city": self.info['city'],
    #         "CEO": self.info['companyOfficers'][0]['name'],
    #         "country": self.info['country'],
    #         "current_stock_price": self.info['currentPrice'],
    #         "summary": self.info['longBusinessSummary'],
    #         "state": self.info['state'],
    #         "market_cap": self.info['marketCap']
    #     }
    #     openai.api_key = os.getenv("OPENAI_API_KEY")
    #     response = openai.Completion.create(
    #       model="text-davinci-003",
    #       prompt=f"Please summarize this information about a public company: {info}",
    #       max_tokens=2000,
    #       temperature=0)
        
    #     res = (response.choices[0].text.strip())
    #     return res