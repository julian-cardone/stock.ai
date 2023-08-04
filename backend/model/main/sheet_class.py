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
        self.create_model()
        self.data = FinancialData(stock_model)
    
    def insert_year(self):
        self.worksheet['E74'] = self.date.year

    def insert_revenue(self):
        data = self.data.get_historic_revenue()
        print(data)
        
    def create_model(self):
        self.insert_year()
        self.workbook.save('model_year_stock.xlsx')
        self.workbook.close()
