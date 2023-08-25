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
            self.symbol = symbol
            self.yq_stock = Ticker(symbol)
            self.yf_stock = yf.Ticker(symbol)
            self.yq_stock_info = self.yq_stock.asset_profile[symbol]
            self.yf_stock_info = self.yf_stock.info
            self.combined_info = self._combine_stock_info()
        except Exception as e:
            print(f"An error occurred during initialization: {e}")
            raise RuntimeError("Instance initialization failed.")

    def _combine_stock_info(self):
        combined_dict = self.yq_stock_info.copy()
        combined_dict.update(self.yf_stock_info)
        return combined_dict

    def number_formatter(self, number):
        if number == 0 or not isinstance(number, (int, float)):
            return number

        if abs(number) >= 1e12:
            formatted_number = self.format_large_number(number, 'T')
        elif abs(number) >= 1e9:
            formatted_number = self.format_large_number(number, 'B')
        else:
            abs_number = abs(number)
            if abs_number >= 1:
                if abs_number >= 1000:
                    formatted_number = format(number, ',.0f')
                else:
                    formatted_number = format(number, '.2f')
            elif abs_number >= 0.1:
                formatted_number = format(number, '.3f')
            else:
                formatted_number = format(number, '.5f')

        return formatted_number

    def format_large_number(self, number, suffix):
        magnitude = 0
        while abs(number) >= 1000:
            number /= 1000.0
            magnitude += 1

        formatted_number = f"{number:.3f}{suffix}"
        return formatted_number

    def format_date(self, timestamp):
        if timestamp is not isinstance(timestamp, (int, float)):
            return timestamp
        datetime_obj = datetime.datetime.utcfromtimestamp(timestamp)
        formatted_date = datetime_obj.strftime('%b %d, %Y')
        return formatted_date


    def get_real_time_summary_data(self):
        try:
            yq_stock = Ticker(self.symbol)
            yf_stock = yf.Ticker(self.symbol)
            
            yq_stock_info = yq_stock.asset_profile[self.symbol]
            yf_stock_info = yf_stock.info
            combined_dict = yq_stock_info.copy()
            combined_dict.update(yf_stock_info)

            current_time = datetime.datetime.now()
            formatted_time = current_time.strftime("%I:%M%p %Z")

            real_time_info = {
                "currentPrice": combined_dict['currentPrice'], 
                "previousClose": combined_dict['previousClose'], 
                'currentTime': formatted_time
            }

            return real_time_info
        except Exception as e:
            print(f"An error occurred while fetching real-time data: {e}")
            return None

    def get_static_summary_data(self):
        combined_dict = self.combined_info

        stock_info = {
            'longName': combined_dict['longName'],
            'underlyingSymbol': combined_dict['underlyingSymbol'],
            'exchange': combined_dict['exchange'],
            'currency': combined_dict['currency'],
        }
        return stock_info
        
    def get_overview_info(self):
        combined_dict = self.combined_info

        stock_info = [
            {'key': 'Previous Close', 'value': self.number_formatter(combined_dict.get('previousClose'))},
            {'key': 'Open', 'value': self.number_formatter(combined_dict.get('open'))},
            {'key': 'Bid', 'value': self.number_formatter(combined_dict.get('bid'))},
            {'key': 'Ask', 'value': self.number_formatter(combined_dict.get('ask'))},
            {'key': "Day's Range", 'value': f"{self.number_formatter(combined_dict.get('dayLow'))} - {self.number_formatter(combined_dict.get('dayHigh'))}"},
            {'key': "Year's Range", 'value': f"{self.number_formatter(combined_dict.get('fiftyTwoWeekLow'))} - {self.number_formatter(combined_dict.get('fiftyTwoWeekHigh'))}"},
            {'key': 'Volume', 'value': self.number_formatter(combined_dict.get('volume'))},
            {'key': 'Average Volume', 'value': self.number_formatter(combined_dict.get('averageVolume'))},
            {'key': 'Market Cap', 'value': self.number_formatter(combined_dict.get('marketCap'))},
            {'key': 'Beta', 'value': self.number_formatter(combined_dict.get('beta'))},
            {'key': 'PE Ratio (TTM)', 'value': self.number_formatter(combined_dict.get('trailingPE'))},
            {'key': 'EPS (TTM)', 'value': self.number_formatter(combined_dict.get('trailingEps'))},
            {'key': 'Forward Dividend & Yield', 'value': f"{self.number_formatter(combined_dict.get('trailingAnnualDividendRate'))} ({self.number_formatter(combined_dict.get('trailingAnnualDividendYield')*100)}%)"},
            {'key': 'Ex-Dividend Date', 'value': self.format_date(combined_dict.get('exDividendDate'))},
            {'key': '1-Year Target Estimate', 'value': self.number_formatter(combined_dict.get('targetMeanPrice'))},
            {'key': 'Current Ratio', 'value': self.number_formatter(combined_dict.get('currentRatio'))},
            {'key': 'Quick Ratio', 'value': self.number_formatter(combined_dict.get('quickRatio'))},
            {'key': 'Return on Equity', 'value': f"{self.number_formatter(combined_dict.get('returnOnEquity')*100)}%"},
            {'key': 'Return on Assets', 'value': f"{self.number_formatter(combined_dict.get('returnOnAssets')*100)}%"},
            {'key': 'Debt-to-Equity Ratio', 'value': self.number_formatter(combined_dict.get('debtToEquity'))}
        ]
        return stock_info
        
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