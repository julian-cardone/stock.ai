from yahooquery import Ticker
from yahooquery import search
import yfinance as yf
from backend.app.logic.main.sheet_class import Sheet
import datetime
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
        try:
            if symbol not in cls._instances:
                yq_stock = Ticker(symbol)
                yq_stock_info = yq_stock.asset_profile
                if yq_stock_info.get(symbol) == f"Quote not found for ticker symbol: {symbol}":
                    raise RuntimeError("Quote not found for ticker symbol")
                cls._instances[symbol] = super().__new__(cls)
                cls._instances[symbol].initialize(symbol)
        except Exception as yq_error:
            print(f"An error occurred: {yq_error}")
            raise RuntimeError("Instance creation aborted. Please enter a valid stock symbol.")
        return cls._instances[symbol]

    def initialize(self, symbol):
        try:
            yf_stock = yf.Ticker(symbol)
            yq_stock = Ticker(symbol)
            yf_stock_info = yf_stock.info
            yq_stock_info = yq_stock.asset_profile[symbol]
            combined_dict = yq_stock_info.copy()
            combined_dict.update(yf_stock_info)
            self.symbol = symbol
            self.yf_stock = yf_stock
            self.yq_stock = yq_stock
            self.yf_stock_info = yf_stock_info
            self.yq_stock_info = yq_stock_info
            self.combined_info = combined_dict
        except Exception as e:
            print(f"An error occurred during initialization: {e}")
            raise RuntimeError("Instance initialization failed.")

    def get_stock_info(self):
        return self.combined_info
    
    def get_real_time_data(self):
        yf_stock_info = self.yf_stock.info
        yq_stock_info = self.yq_stock.asset_profile[self.symbol]
        combined_dict = yf_stock_info.copy()
        combined_dict.update(yq_stock_info)
        current_price = combined_dict['currentPrice']
        previous_close = combined_dict['previousClose']

        current_time = datetime.datetime.now()
        formatted_time = current_time.strftime("%I:%M%p %Z")
        
        real_time_info = {"currentPrice": current_price, 'previousClose': previous_close}
        print(real_time_info)
        return real_time_info
        
        
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