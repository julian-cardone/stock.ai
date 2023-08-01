import os
import psycopg2
from dotenv import load_dotenv
from .models.instance import Instance

def setup_db():

    # # Load environment variables from .env file
    load_dotenv()

    url = os.getenv("DATABASE_URL")
    connection = psycopg2.connect(url)

    # setup instance table
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(Instance.create_table)
            cursor.execute(Instance.index_table)

    return connection