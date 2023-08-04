import openpyxl
import datetime

class Sheet:

    def __init__(self, stock_model):
        self.stock_model = stock_model
        self.workbook = openpyxl.load_workbook('model.xls')
        self.worksheet = workbook['Sheet1']
        self.date = datetime.date.today()
        self.create_model(self)
    
    def insert_year(self):
        self.worksheet['E74'] = self.date.year
        workbook.save('model_year.xls')
        workbook.close()
        
    def create_model(self):
        self.insert_year()



