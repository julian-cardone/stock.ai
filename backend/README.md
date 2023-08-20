# Welcome to Stock.ai
This project is a ull-stack financial data analysis application enabling users to input stock symbols and receive operating
assumptions reports

## Technologies used in this project
* PostgreSQL
* Flask
* React
* OpenAI API
* yfinance API
* Alpha Vantage API

## Selecting a company and a financial statement
A short summary on the business is generated with OpenAI's completion endpoint
![Main Page Picture](backend/app/static/images/stockai-input.png)

## An excel file is genereated and downloaded to your device
![Model Picture 1](backend/app/static/images/model-1.png)
![Model Picture 2](backend/app/static/images/model-2.png)

## Future plans for the project
* As I am using a free API for fundamental data, there are limitations. When I find a solution, I will be able to populate the entire pro
forma financial model with reliable data. 
* I am working on further analysis on the companies using python libraries such as pandas, plotly, and dash.
* Deploy a live version of the application
