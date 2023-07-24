import random

class Instance:
    #class attributes
    characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()'    

    #constructor
    def __init__(self):
        self.instance = self.__generate_instance_token()

    #method
    def __generate_instance_token(self):
        instance_key =''
        for x in range(20):
            random_int = random.randint(0, len(self.characters) - 1)
            instance_key += self.characters[random_int]

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     email = db.Column(db.String(120), unique=True, nullable=False)

#     def __repr__(self):
#         return f'<User {self.username}>'