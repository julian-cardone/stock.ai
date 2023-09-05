# Welcome to Stock.ai
This project is a full-stack financial data analysis application enabling users to input stock symbols and receive financial data reports, statistical analyses, and personalized financial models from a pro forma financial statement.

## Technologies used in this project
* PostgreSQL
* Flask
* React
* OpenAI API
* yfinance API
* Alpha Vantage API

## Selecting a company
Entering a stock symbol brings you to the company's overview page. This page allows users to view a financial summary of the company
and interact with a graph of the company's historical data.

## Financials
The Financial Statements tab provides a digestible medium for displaying income statment, balance sheet, and cash flow statement figures.
This tab also allows the user to select a data model from a pro forma financial statement. 
Models currently working:
* Operating Assumptions report
![Main Page Picture](backend/app/static/images/stockai-input.png)

## An excel file is genereated and downloaded to your device
![Model Picture 1](backend/app/static/images/model-1.png)
![Model Picture 2](backend/app/static/images/model-2.png)

## Future plans for the project
* As I am using a free API for fundamental data, there are limitations. When I find a solution, I will be able to populate the entire pro
forma financial model with reliable data. 
* I am working on further analysis on the companies using python libraries such as pandas, plotly, and dash.
* Deploy a live version of the application
