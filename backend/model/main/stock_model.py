import yfinance as yf
from backend.model.main.sheet_class import Sheet
from yfinance.exceptions import YFinanceException
import openai
import os

"""
StockModel class is the parent class for model creation

Args:
    symbol (string): stock ticker symbol as a string, either lowercase or uppercase

Constructor:
    attempts to fetch stock info with the symbol inputted from the user to confirm its validity
"""

class StockModel:

    def __init__(self, symbol):
        try:
            stock = yf.Ticker(symbol.upper())
            stock_info = stock.info
            self.symbol = symbol.upper()
            self.info = stock_info
        except Exception as yf_error:
            print(f"An error occurred: {yf_error}")
            self.symbol = None
            raise RuntimeError("Instance creation aborted. Please enter a valid stock symbol.")

    def create_model(self):
        self.model = Sheet(self)

    def generate_info(self):
        info = {
            "address": self.info['address1'],
            "city": self.info['city'],
            "CEO": self.info['companyOfficers'][0]['name'],
            "country": self.info['country'],
            "current_stock_price": self.info['currentPrice'],
            "summary": self.info['longBusinessSummary'],
            "state": self.info['state'],
            "market_cap": self.info['marketCap']
        }
        openai.api_key = os.getenv("OPENAI_API_KEY")
        response = openai.Completion.create(
          model="text-davinci-003",
          prompt=f"Please summarize this information about a public company: {info}",
          max_tokens=2000,
          temperature=0)
        
        res = (response.choices[0].text.strip())
        return res



    