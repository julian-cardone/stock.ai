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

        stock_info = {
            'previousClose': combined_dict.get('previousClose'),
            'open': combined_dict.get('open'),
            'bid': combined_dict.get('bid'),
            'ask': combined_dict.get('ask'),
            'dayLow': combined_dict.get('dayLow'),
            'dayHigh': combined_dict.get('dayHigh'),
            'fiftyTwoWeekLow': combined_dict.get('fiftyTwoWeekLow'),
            'fiftyTwoWeekHigh': combined_dict.get('fiftyTwoWeekHigh'),
            'volume': combined_dict.get('volume'),
            'averageVolume': combined_dict.get('averageVolume'),
            'marketCap': combined_dict.get('marketCap'),
            'beta': combined_dict.get('beta'),
            'trailingPE': combined_dict.get('trailingPE'),
            'trailingEps': combined_dict.get('trailingEps'),
            'trailingAnnualDividendYield': combined_dict.get('trailingAnnualDividendYield'),
            'trailingAnnualDividendRate': combined_dict.get('trailingAnnualDividendRate'),
            'exDividendDate': combined_dict.get('exDividendDate'),
            'targetMeanPrice': combined_dict.get('targetMeanPrice'),
            'currentPrice': combined_dict.get('currentPrice'),
            'currentRatio': combined_dict.get('currentRatio'),
            'quickRatio': combined_dict.get('quickRatio'),
            'returnOnEquity': combined_dict.get('returnOnEquity'),
            'returnOnAssets': combined_dict.get('returnOnAssets'),
            'grossMargins': combined_dict.get('grossMargins'),
            'debtToEquity': combined_dict.get('debtToEquity'),
        }
        return stock_info

        # stock_info = [
        #     {'previousClose': combined_dict.get('previousClose')},
        #     {'open': combined_dict.get('open')},
        #     {'bid': combined_dict.get('bid')},
        #     {'ask': combined_dict.get('ask')},
        #     {'dayLow': combined_dict.get('dayLow')},
        #     {'dayHigh': combined_dict.get('dayHigh')},
        #     {'fiftyTwoWeekLow': combined_dict.get('fiftyTwoWeekLow')},
        #     {'fiftyTwoWeekHigh': combined_dict.get('fiftyTwoWeekHigh')},
        #     {'volume': combined_dict.get('volume')},
        #     {'averageVolume': combined_dict.get('averageVolume')},
        #     {'marketCap': combined_dict.get('marketCap')},
        #     {'beta': combined_dict.get('beta')},
        #     {'trailingPE': combined_dict.get('trailingPE')},
        #     {'trailingEps': combined_dict.get('trailingEps')},
        #     {'trailingAnnualDividendYield': combined_dict.get('trailingAnnualDividendYield')},
        #     {'trailingAnnualDividendRate': combined_dict.get('trailingAnnualDividendRate')},
        #     {'exDividendDate': combined_dict.get('exDividendDate')},
        #     {'targetMeanPrice': combined_dict.get('targetMeanPrice')},
        #     {'currentPrice': combined_dict.get('currentPrice')},
        #     {'currentRatio': combined_dict.get('currentRatio')},
        #     {'quickRatio': combined_dict.get('quickRatio')},
        #     {'returnOnEquity': combined_dict.get('returnOnEquity')},
        #     {'returnOnAssets': combined_dict.get('returnOnAssets')},
        #     {'grossMargins': combined_dict.get('grossMargins')},
        #     {'debtToEquity': combined_dict.get('debtToEquity')}
        # ]

        # stock_info = [
        #     {'longName': combined_dict.get('longName')},
        #     {'underlyingSymbol': combined_dict.get('underlyingSymbol')},
        #     {'exchange': combined_dict.get('exchange')},
        #     {'currency': combined_dict.get('currency')}
        # ]

            # real_time_info = [
            #     {"currentPrice": combined_dict.get('currentPrice')}, 
            #     {"previousClose": combined_dict.get('previousClose')}, 
            #     {'currentTime': formatted_time}
            # ]
        
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