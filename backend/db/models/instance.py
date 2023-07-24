import random

class Instance:
    #class attributes
    characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()'

    create_table = """CREATE TABLE IF NOT EXISTS Instance (id SERIAL PRIMARY KEY, token_id VARCHAR);"""
    index_table = """CREATE INDEX IF NOT EXISTS idx_token_id ON Instance (token_id);"""

    #constructor
    def __init__(self):
        self.instance = self.__generate_instance_token()        

    #private method to generate "unique" instance token
    def __generate_instance_token(self):
        instance_key =''
        for x in range(20):
            random_int = random.randint(0, len(self.characters) - 1)
            instance_key += self.characters[random_int]
        return instance_key