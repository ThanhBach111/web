from pydantic import BaseModel
from typing import *

class AccountLogin(BaseModel):
    email: str
    password: str

class AccountRegister(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phoneNumber: Optional[str] = None
    address: Optional[str] = None
    password: Optional[str] = None
    confirmPassword: Optional[str] = None

class AccountChangePass(BaseModel):
    oldPassword: Optional[str] = None
    newPassword: Optional[str] = None
    confirmPassword: Optional[str] = None

class AccountInfo(BaseModel):
    name: str
    email: str
    phoneNumber: str
    address: str

class User_prod_ID(BaseModel):
    productId: int
    quantityOrdered: int

class Order(BaseModel):
    productID: int
    quantityOrdered: int
    priceEach: int

class ProductsChange(BaseModel):
    name: Optional[str] = None
    price: Optional[int] = None
    image1: Optional[str] = None
    image2:Optional[str] =None
    category: Optional[str] = None