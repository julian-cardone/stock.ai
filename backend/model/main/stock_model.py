import yfinance as yf
from backend.model.sheet.sheet import Sheet

class StockModel:

    def __init__(self, symbol):
        try:
            stock = yf.Ticker(symbol.upper())
            stock_info = stock.info
            self.symbol = symbol
            self.info = stock_info
        except Exception as e:
            print(f"An error occurred: {e}")
            self.symbol = None
            raise RuntimeError("Instance creation aborted")

    def create_model(self):
        self.model = sheet.Sheet(self)

StockModel('aapl').create_model()

# {   '52WeekChange': 0.15615356,
#     'SandP52WeekChange': 0.08605158,
#     'address1': 'One Apple Park Way',
#     'ask': 185.33,
#     'askSize': 1000,
#     'auditRisk': 4,
#     'averageDailyVolume10Day': 48342600,
#     'averageVolume': 55933106,
#     'averageVolume10days': 48342600,
#     'beta': 1.286802,
#     'bid': 185.36,
#     'bidSize': 800,
#     'boardRisk': 1,
#     'bookValue': 3.953,
#     'city': 'Cupertino',
#     'companyOfficers': [   {   'age': 61,
#                                'exercisedValue': 0,
#                                'fiscalYear': 2022,
#                                'maxAge': 1,
#                                'name': 'Mr. Timothy D. Cook',
#                                'title': 'CEO & Director',
#                                'totalPay': 16425933,
#                                'unexercisedValue': 0,
#                                'yearBorn': 1961},
#                            {   'age': 59,
#                                'exercisedValue': 0,
#                                'fiscalYear': 2022,
#                                'maxAge': 1,
#                                'name': 'Mr. Luca  Maestri',
#                                'title': 'CFO & Sr. VP',
#                                'totalPay': 5019783,
#                                'unexercisedValue': 0,
#                                'yearBorn': 1963},
#                            {   'age': 58,
#                                'exercisedValue': 0,
#                                'fiscalYear': 2022,
#                                'maxAge': 1,
#                                'name': 'Mr. Jeffrey E. Williams',
#                                'title': 'Chief Operating Officer',
#                                'totalPay': 5018337,
#                                'unexercisedValue': 0,
#                                'yearBorn': 1964},
#                            {   'age': 58,
#                                'exercisedValue': 0,
#                                'fiscalYear': 2022,
#                                'maxAge': 1,
#                                'name': 'Ms. Katherine L. Adams',
#                                'title': 'Sr. VP, Gen. Counsel & Sec.',
#                                'totalPay': 5015208,
#                                'unexercisedValue': 0,
#                                'yearBorn': 1964},
#                            {   'age': 55,
#                                'exercisedValue': 0,
#                                'fiscalYear': 2022,
#                                'maxAge': 1,
#                                'name': "Ms. Deirdre  O'Brien",
#                                'title': 'Sr. VP of Retail',
#                                'totalPay': 5019783,
#                                'unexercisedValue': 0,
#                                'yearBorn': 1967},
#                            {   'exercisedValue': 0,
#                                'maxAge': 1,
#                                'name': 'Mr. Chris  Kondo',
#                                'title': 'Sr. Director of Corp. Accounting',
#                                'unexercisedValue': 0},
#                            {   'exercisedValue': 0,
#                                'maxAge': 1,
#                                'name': 'Mr. James  Wilson',
#                                'title': 'Chief Technology Officer',
#                                'unexercisedValue': 0},
#                            {   'exercisedValue': 0,
#                                'maxAge': 1,
#                                'name': 'Ms. Mary  Demby',
#                                'title': 'Chief Information Officer',
#                                'unexercisedValue': 0},
#                            {   'exercisedValue': 0,
#                                'maxAge': 1,
#                                'name': 'Ms. Nancy  Paxton',
#                                'title': 'Sr. Director of Investor Relations & '
#                                         'Treasury',
#                                'unexercisedValue': 0},
#                            {   'exercisedValue': 0,
#                                'maxAge': 1,
#                                'name': 'Mr. Greg  Joswiak',
#                                'title': 'Sr. VP of Worldwide Marketing',
#                                'unexercisedValue': 0}],
#     'compensationAsOfEpochDate': 1672444800,
#     'compensationRisk': 5,
#     'country': 'United States',
#     'currency': 'USD',
#     'currentPrice': 185.3518,
#     'currentRatio': 0.94,
#     'dateShortInterest': 1689292800,
#     'dayHigh': 187.38,
#     'dayLow': 183.25,
#     'debtToEquity': 176.349,
#     'dividendRate': 0.96,
#     'dividendYield': 0.005,
#     'earningsGrowth': 0.0,
#     'earningsQuarterlyGrowth': -0.034,
#     'ebitda': 123788001280,
#     'ebitdaMargins': 0.32145,
#     'enterpriseToEbitda': 24.725,
#     'enterpriseToRevenue': 7.948,
#     'enterpriseValue': 3060598833152,
#     'exDividendDate': 1683849600,
#     'exchange': 'NMS',
#     'fiftyDayAverage': 186.8782,
#     'fiftyTwoWeekHigh': 198.23,
#     'fiftyTwoWeekLow': 124.17,
#     'financialCurrency': 'USD',
#     'firstTradeDateEpochUtc': 345479400,
#     'fiveYearAvgDividendYield': 0.87,
#     'floatShares': 15711872289,
#     'forwardEps': 6.59,
#     'forwardPE': 28.126223,
#     'freeCashflow': 83796623360,
#     'fullTimeEmployees': 164000,
#     'gmtOffSetMilliseconds': -14400000,
#     'governanceEpochDate': 1690848000,
#     'grossMargins': 0.43181,
#     'grossProfits': 170782000000,
#     'heldPercentInsiders': 0.00071999995,
#     'heldPercentInstitutions': 0.61317,
#     'impliedSharesOutstanding': 15728700416,
#     'industry': 'Consumer Electronics',
#     'industryDisp': 'Consumer Electronics',
#     'lastDividendDate': 1683849600,
#     'lastDividendValue': 0.24,
#     'lastFiscalYearEnd': 1663977600,
#     'lastSplitDate': 1598832000,
#     'lastSplitFactor': '4:1',
#     'longBusinessSummary': 'Apple Inc. designs, manufactures, and markets '
#                            'smartphones, personal computers, tablets, '
#                            'wearables, and accessories worldwide. The company '
#                            'offers iPhone, a line of smartphones; Mac, a line '
#                            'of personal computers; iPad, a line of '
#                            'multi-purpose tablets; and wearables, home, and '
#                            'accessories comprising AirPods, Apple TV, Apple '
#                            'Watch, Beats products, and HomePod. It also '
#                            'provides AppleCare support and cloud services; and '
#                            'operates various platforms, including the App '
#                            'Store that allow customers to discover and '
#                            'download applications and digital content, such as '
#                            'books, music, video, games, and podcasts. In '
#                            'addition, the company offers various services, '
#                            'such as Apple Arcade, a game subscription service; '
#                            'Apple Fitness+, a personalized fitness service; '
#                            'Apple Music, which offers users a curated '
#                            'listening experience with on-demand radio '
#                            'stations; Apple News+, a subscription news and '
#                            'magazine service; Apple TV+, which offers '
#                            'exclusive original content; Apple Card, a '
#                            'co-branded credit card; and Apple Pay, a cashless '
#                            'payment service, as well as licenses its '
#                            'intellectual property. The company serves '
#                            'consumers, and small and mid-sized businesses; and '
#                            'the education, enterprise, and government markets. '
#                            'It distributes third-party applications for its '
#                            'products through the App Store. The company also '
#                            'sells its products through its retail and online '
#                            'stores, and direct sales force; and third-party '
#                            'cellular network carriers, wholesalers, retailers, '
#                            'and resellers. Apple Inc. was incorporated in 1977 '
#                            'and is headquartered in Cupertino, California.',
#     'longName': 'Apple Inc.',
#     'marketCap': 2915343007744,
#     'maxAge': 86400,
#     'messageBoardId': 'finmb_24937',
#     'mostRecentQuarter': 1680307200,
#     'netIncomeToCommon': 94321000448,
#     'nextFiscalYearEnd': 1695513600,
#     'numberOfAnalystOpinions': 40,
#     'open': 185.52,
#     'operatingCashflow': 109583998976,
#     'operatingMargins': 0.29163,
#     'overallRisk': 1,
#     'payoutRatio': 0.1559,
#     'pegRatio': 4.06,
#     'phone': '408 996 1010',
#     'previousClose': 191.17,
#     'priceHint': 2,
#     'priceToBook': 46.888897,
#     'priceToSalesTrailing12Months': 7.5704513,
#     'profitMargins': 0.24493,
#     'quickRatio': 0.764,
#     'quoteType': 'EQUITY',
#     'recommendationKey': 'buy',
#     'recommendationMean': 2.0,
#     'regularMarketDayHigh': 187.38,
#     'regularMarketDayLow': 183.25,
#     'regularMarketOpen': 185.52,
#     'regularMarketPreviousClose': 191.17,
#     'regularMarketVolume': 57422132,
#     'returnOnAssets': 0.20559,
#     'returnOnEquity': 1.4560499,
#     'revenueGrowth': -0.025,
#     'revenuePerShare': 24.116,
#     'sector': 'Technology',
#     'sectorDisp': 'Technologie',
#     'shareHolderRightsRisk': 1,
#     'sharesOutstanding': 15728700416,
#     'sharesPercentSharesOut': 0.0081,
#     'sharesShort': 126626604,
#     'sharesShortPreviousMonthDate': 1686787200,
#     'sharesShortPriorMonth': 121254451,
#     'shortName': 'Apple Inc.',
#     'shortPercentOfFloat': 0.0081,
#     'shortRatio': 2.35,
#     'state': 'CA',
#     'symbol': 'AAPL',
#     'targetHighPrice': 240.0,
#     'targetLowPrice': 140.0,
#     'targetMeanPrice': 196.43,
#     'targetMedianPrice': 195.0,
#     'timeZoneFullName': 'America/New_York',
#     'timeZoneShortName': 'EDT',
#     'totalCash': 55872000000,
#     'totalCashPerShare': 3.552,
#     'totalDebt': 109614997504,
#     'totalRevenue': 385095008256,
#     'trailingAnnualDividendRate': 0.92,
#     'trailingAnnualDividendYield': 0.0048124706,
#     'trailingEps': 5.89,
#     'trailingPE': 31.468899,
#     'trailingPegRatio': 2.641,
#     'twoHundredDayAverage': 159.8155,
#     'underlyingSymbol': 'AAPL',
#     'uuid': '8b10e4ae-9eeb-3684-921a-9ab27e4d87aa',
#     'volume': 57422132,
#     'website': 'https://www.apple.com',
#     'zip': '95014'}


    