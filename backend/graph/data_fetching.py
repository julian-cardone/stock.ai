# data_fetching.py

import pandas as pd
import yfinance as yf

def create_historical_data_csv(symbol):
    """
    Fetches historical stock data for the stock using yfinance and saves it to a CSV file.

    The function fetches 'Close' price and 'Volume' data for the specified stock between 2022.01.03 to 2022.01.19.
    """
    
    # Define the stock ticker
    ticker = symbol

    # Define the date range
    start_date = '2022-01-03'
    end_date = '2022-01-19'

    # Fetch historical data using yfinance
    stock_data = yf.download(ticker, start=start_date, end=end_date)

    # Prepare an empty DataFrame to store the data
    historical_data = pd.DataFrame()

    # Extract 'Close' and 'Volume' data
    stock_df = stock_data[['Close', 'Volume']].reset_index()
    stock_df.rename(columns={'Close': 'Close_Price', 'Volume': 'Close_Volume'}, inplace=True)
    stock_df['Symbol'] = ticker

    # Append the DataFrame to the historical_data DataFrame
    historical_data = pd.concat([historical_data, stock_df], ignore_index=True)

    # Save the DataFrame to a CSV file
    historical_data.to_csv('./historical_stock_data.csv', index=False)