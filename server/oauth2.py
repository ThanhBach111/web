from jose import JWTError,jwt
from datetime import datetime,timedelta
from main import *
import database
import models
from jose.constants import ALGORITHMS, Algorithms
from pydantic import main
from sqlalchemy.sql import roles
from fastapi import Depends,status,HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from fastapi.security import OAuth2PasswordBearer, oauth2

#SECRET KEY
#Algorithm
#Expriation time

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme= OAuth2PasswordBearer(tokenUrl="auth")


def create_access_token(data:dict):
    to_encode= data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token:str,credentials_exception):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token,SECRET_KEY,algorithms=[ALGORITHM])
        user_id:int = payload.get("user_id")
        
        if user_id is None:
            raise credentials_exception
        
    except JWTError:
        raise credentials_exception

    return user_id


def get_current_user(token: int = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                          detail=f"Could not validate credentials", 
                                          headers={"WWW-Authenticate": "Bearer"})

    token = verify_token(token, credentials_exception)

    user = db.query(models.User).filter(models.User.userID == token).first()

    return user