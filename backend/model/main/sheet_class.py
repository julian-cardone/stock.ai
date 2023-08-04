from openpyxl import load_workbook, worksheet, workbook
import datetime
import os
from financial_data_class import FinancialData

class Sheet:
    def __init__(self, stock_model):
        self.stock_model = stock_model
        self.file_path = os.path.join('/home/jcar/dev/projects/stock.ai/backend/model/main', 'model.xlsx')
        self.workbook = load_workbook(filename=self.file_path)
        self.worksheet = self.workbook['Sheet1']
        self.date = datetime.date.today()
        self.fin_data = FinancialData(stock_model)

        self.create_model()
    
    def insert_year(self):
        self.worksheet['E74'] = self.date.year

    def insert_revenue(self):
        data = self.fin_data.get_historic_revenue()
        self.worksheet['D76'] = data[0]
        self.worksheet['C76'] = data[1]
        self.worksheet['B76'] = data[2]

    def insert_cogs(self):
        data = self.fin_data.get_historic_cogs()
        self.worksheet['D80'] = data[0]
        self.worksheet['C80'] = data[1]
        self.worksheet['B80'] = data[2]
        
    def create_model(self):
        self.insert_year()
        self.insert_revenue()
        self.insert_cogs()
        self.workbook.save('model_year_stock.xlsx')
        self.workbook.close()