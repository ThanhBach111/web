from re import I
from fastapi.applications import FastAPI
from sqlalchemy.orm import backref
from sqlalchemy.sql.expression import false, null, true
from database import Base
from sqlalchemy import String,Boolean,Integer,Column,Text
from sqlalchemy.sql.functions import user
from sqlalchemy.sql.schema import ForeignKey, PrimaryKeyConstraint
from sqlalchemy.sql.sqltypes import BOOLEAN, DATE, DATETIME, INTEGER, VARCHAR, Float
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__='users'
    userID=Column(Integer,primary_key=True,nullable=False)
    email=Column(VARCHAR(50),nullable=False)
    password=Column(VARCHAR(50),nullable=False)
    name=Column(VARCHAR(50),nullable=False)
    address=Column(VARCHAR(50),nullable=False)
    phoneNumber=Column(VARCHAR(50),nullable=False)
    role=Column(VARCHAR(50),nullable=False)
    isActive=Column(BOOLEAN,default=False)
    order = relationship("Orders", back_populates="owner")
    cart  = relationship("Cart",back_populates="owner",uselist=False)

class Cart(Base):
    __tablename__="cart"
    userID=Column(Integer,ForeignKey('users.userID'),primary_key=True)
    productID=Column(Integer,ForeignKey('products.productID', ondelete='CASCADE'),primary_key=True)
    quantityOrdered=Column(Integer,nullable=False)
    # productName=Column(VARCHAR(50),nullable=False)
    # quantity=Column(Integer)
    # price=Column(Float)
    # image1=Column(Text,nullable=False)
    # image2=Column(Text,nullable=True)
    owner  = relationship("User",back_populates="cart")
    products =  relationship("Products", back_populates="cart")
    

class Orders(Base):
    __tablename__="orders"
    orderID=Column(Integer,primary_key=true,nullable=False)
    orderDate=Column(DATE,nullable=False)
    shippedDate=Column(DATE,nullable=True)
    # comment=Column(Text,nullable=True)
    status=Column(VARCHAR(50),nullable=False)
    # total_order_value=Column(Integer,nullable=False)
    userID = Column(Integer, ForeignKey('users.userID'))
    owner = relationship("User", back_populates="order")
    orderdetail = relationship("OrderDetails", back_populates="include")

class OrderDetails(Base):
    __tablename__="orderdetails"
    orderID=Column(Integer,ForeignKey('orders.orderID'),primary_key=True)
    productID=Column(Integer,ForeignKey('products.productID', ondelete='CASCADE'),primary_key=True)
    quantityOrdered=Column(Integer,nullable=False)
    priceEach=Column(Integer,nullable=False)
    include = relationship("Orders", back_populates="orderdetail")
    include2 = relationship("Products", back_populates="orderdetail2")

class Products(Base):
    __tablename__="products"
    productID=Column(Integer,primary_key=True,nullable=False)
    name=Column(VARCHAR(50),nullable=False)
    description=Column(Text,nullable=True)
    image1=Column(Text,nullable=False)
    image2=Column(Text,nullable=True)
    category=Column(VARCHAR(50),ForeignKey('category.category'),nullable=False)
    quantityInStock=Column(Integer,nullable=False)
    price=Column(Integer,nullable=False)
    orderdetail2 = relationship("OrderDetails", back_populates="include2", cascade="all, delete", passive_deletes=True)
    cart = relationship("Cart", back_populates="products", cascade="all, delete", passive_deletes=True)
    

class Category(Base):
    __tablename__="category"
    category=Column(VARCHAR(50),primary_key=True)
    description=Column(Text,nullable=True)  
    # cate = relationship("Products", back_populates="category")

class Item(Base):
    __tablename__='items'
    id=Column(Integer,primary_key=True)
    name=Column(String(255),nullable=False,unique=True)
    description=Column(Text)
    price=Column(Integer,nullable=False)
    on_offer=Column(Boolean,default=False)