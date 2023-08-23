import os
import psycopg2
from psycopg2 import pool
from dotenv import load_dotenv
from .models.instance import Instance

def setup_db_pool():
    # Load environment variables from .env file
    load_dotenv()

    url = os.getenv("DATABASE_URL")
    
    try:
        pool = psycopg2.pool.SimpleConnectionPool(
            minconn=1,
            maxconn=10,
            dsn=url
        )

        # Return the connection pool
        return pool
    except Exception as e:
        print(f"Error setting up database pool: {e}")
        return None

def create_tables(connection):
    # setup instance table
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(Instance.create_table)
            cursor.execute(Instance.index_table)
    return connection