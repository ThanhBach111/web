from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine=create_engine("mysql+pymysql://root:meogay89@localhost/web", echo=True)

Base=declarative_base()

SessionLocal=sessionmaker(bind=engine)