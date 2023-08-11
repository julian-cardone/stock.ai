import pandas as pd

def compute_moving_average(df):
    # Calculate 2-day moving average of Close_Price for each stock
    df['Moving_Avg_Close'] = df.groupby('Symbol')['Close_Price'].rolling(window=2).mean().reset_index(drop=True)

def compute_vwap(df):
    # Calculate 2-day moving VWAP of Close_Price for each stock
    df['VWAP'] = df.groupby(['Symbol'])['Close_Price'].rolling(window=2).apply(lambda x: (x * df.loc[x.index, 'Close_Volume']).sum() / df.loc[x.index, 'Close_Volume'].sum()).reset_index(drop=True)

def process_data(csv_file):
    """
    Reads in a CSV file containing historical stock data, computes 2-day moving average and VWAP for each stock,
    and returns the processed DataFrame.

    Parameters:
        csv_file (str): The path to the CSV file containing historical stock data.

    Returns:
        pandas.DataFrame: A DataFrame containing the processed stock data with moving averages and VWAP.
    """
    
    # Read the CSV file into a DataFrame
    df = pd.read_csv(csv_file)

    # Convert the 'Date' column to datetime type
    df['Date'] = pd.to_datetime(df['Date'])

    # Compute moving averages and VWAP
    compute_moving_average(df)
    compute_vwap(df)

    # Pivot the DataFrame to get the desired structure
    df_pivot = df.pivot(index='Date', columns='Symbol', values=['Close_Price', 'Moving_Avg_Close', 'VWAP'])

    # Flatten column names
    df_pivot.columns = [f'{col[1]} {col[0]}' for col in df_pivot.columns]

    return df_pivot.reset_index()