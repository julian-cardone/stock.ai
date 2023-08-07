from openpyxl import load_workbook, worksheet, workbook
import datetime
import os
from financial_data_class import FinancialData

class Sheet:
    def __init__(self, stock_model):
        self.stock_model = stock_model
        self.file_path = os.path.join('/home/jcar/dev/projects/stock.ai/backend/model/main', 'model.xlsx')
        self.workbook = load_workbook(filename=self.file_path)
        self.worksheet = self.workbook['model']
        self.date = datetime.date.today()
        self.fin_data = FinancialData(stock_model)

        self.create_model()

    def insert_specs(self):
        if self.fin_data.format:
            self.worksheet['O1'] = "MILLIONS"
        else:
            self.worksheet['O1'] = "NONE"
        self.worksheet['Q1'] = self.stock_model.symbol
    
    def insert_year(self):
        self.worksheet['I53'] = self.date.year

    def insert_historic_revenue(self):
        data = self.fin_data.get_historic_revenue()
        self.worksheet['H55'] = data[0]
        self.worksheet['G55'] = data[1]
        self.worksheet['F55'] = data[2]

    def insert_historic_cor(self):
        data = self.fin_data.get_historic_cor()
        self.worksheet['H59'] = data[0]
        self.worksheet['G59'] = data[1]
        self.worksheet['F59'] = data[2]

    def insert_historic_depreciation(self):
        data = self.fin_data.get_historic_depreciation()
        self.worksheet['H62'] = data[0]
        self.worksheet['G62'] = data[1]
        self.worksheet['F62'] = data[2]

    def insert_historic_rnd(self):
        data = self.fin_data.get_historic_rnd()
        self.worksheet['H66'] = data[0]
        self.worksheet['G66'] = data[1]
        self.worksheet['F66'] = data[2]

    def insert_historic_sga(self):
        data = self.fin_data.get_historic_sga()
        self.worksheet['H69'] = data[0]
        self.worksheet['G69'] = data[1]
        self.worksheet['F69'] = data[2]

    def insert_historic_capex(self):
        data = self.fin_data.get_historic_capex()
        self.worksheet['H79'] = data[0]
        self.worksheet['G79'] = data[1]
        self.worksheet['F79'] = data[2]

    def create_model(self):
        self.insert_year()
        self.insert_historic_revenue()
        self.insert_specs()
        self.insert_historic_cor()
        self.insert_historic_depreciation()
        self.insert_historic_rnd()
        self.insert_historic_sga()
        self.insert_historic_capex()
        self.workbook.save('model_year_stock.xlsx')
        self.workbook.close()