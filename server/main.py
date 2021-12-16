from os import access
from fastapi import *
from pydantic.errors import NoneIsAllowedError
from sqlalchemy.orm import Session
from sqlalchemy.sql.expression import update
from starlette.status import *
from database import SessionLocal, engine
from models import *
from oauth2 import get_current_user, create_access_token
from schemas import *
from oauth2 import *
import datetime
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from typing import *
import re
app = FastAPI() # create instance

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


"""

Login

"""
# @app.post("/auth")
# async def log_in(acc: AccountLogin, db: Session = Depends(get_db)):
#     acc_dict = acc.dict()

#     #select account in db where email == acc_dict['email']
#     user = db.query(User).filter(User.email == acc_dict['email']).first()
#     if (user != None and user.password == acc_dict['password']): 
#         user.isActive = True
#         db.commit()

#         return db.query(User).filter(User.email == acc_dict['email']).first()

#     else: raise HTTPException(status_code=HTTP_400_BAD_REQUEST, detail="Incorrect Email or Password")


@app.post("/auth")
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == user_credentials.username).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    if user.password != user_credentials.password:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    
    if user.isActive == 0: 
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Account Banned")
    # create a token
    # return token
    access_token = create_access_token(data = {"user_id": user.userID})

    return {"access_token": access_token, "token_type": "bearer", "role": user.role}

"""

Log out

"""
@app.get("/logout/{id}")
async def log_out(id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.userID == id).first()
    user.isActive = False
    db.commit()

    return db.query(User).filter(User.userID == id).first()

"""

Register

"""
@app.post("/auth/register")
async def register(acc: AccountRegister, db: Session = Depends(get_db)):
    acc_dict = acc.dict()
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    # No duplicate account/email in database
    if (db.query(User).filter(User.email == acc_dict['email']).first() is None):
        if (acc_dict['phoneNumber'].isdecimal()):
            if (acc_dict['password'] == acc_dict['confirmPassword']):
                db_user = User(email = acc_dict['email'],
                            password = acc_dict['password'],
                            name = acc_dict['name'],
                            address = acc_dict['address'],
                            phoneNumber = acc_dict['phoneNumber'],
                            role = "user",
                            isActive = True)
                db.add(db_user)
                db.commit()
                db.refresh(db_user)
            else: raise HTTPException(status_code = HTTP_400_BAD_REQUEST, detail = "Confirm Password incorrect")
        else: raise HTTPException(status_code = HTTP_400_BAD_REQUEST, detail = "Phone number must be digits")
    else: raise HTTPException(status_code = HTTP_400_BAD_REQUEST, detail = "Email existed")

    return db.query(User).all()


"""

Change Pass

"""
@app.put("/account/change-password")
async def change_password(acc: AccountChangePass, db: Session = Depends(get_db), user_id = Depends(get_current_user)):
    acc_dict = acc.dict()
    post_query = db.query(User).filter(User.userID == user_id.userID)
    if (acc_dict['oldPassword'] == post_query.first().password and acc_dict['newPassword'] == acc_dict['confirmPassword']):
        # post_query = db.query(User).filter(User.userID == id)
        post_query.update({"password": acc_dict["newPassword"]}, synchronize_session=False)
        db.commit()
    else: raise HTTPException(status_code = HTTP_400_BAD_REQUEST, detail = "oldPassword or confirmPassword Incorrect")
    
    
    return db.query(User).filter(User.userID == user_id.userID).first()


"""

Change Info

"""
@app.put("/account/change-information")
async def change_info( acc: AccountInfo, db: Session = Depends(get_db),user_id = Depends(get_current_user)):
    acc_dict = acc.dict()
    for i in acc_dict:
        if acc_dict[i]=="":
            return status.HTTP_404_NOT_FOUND
    post_query = db.query(User).filter(User.userID == user_id.userID)
    post_query.update(acc_dict, synchronize_session=False)
    db.commit()
    return post_query.first()


"""

View Account

"""
@app.get("/account")
async def view_info(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    return user_id



"""

Get List Cart

"""
@app.get("/product/get-list-cart")
async def get_list_cart( db: Session = Depends(get_db),user_id = Depends(get_current_user)):
    list_prod_ID = []

    post_query = db.query(Cart).filter(Cart.userID ==user_id.userID ).all()

    if  post_query is None:
        return null

    for i in post_query:
        list_prod_ID.append(i.productID)
    
    x = []
    for i in list_prod_ID:
        prod = db.query(Products,Cart).filter(Products.productID == i).filter(Products.productID==Cart.productID).first()
        x.append(prod)
    
       
    return x


"""

Add To Cart

"""
@app.post("/product/add-to-cart")
async def add_to_cart(upi: User_prod_ID, db: Session = Depends(get_db),user_id = Depends(get_current_user)):
    upi_dict = upi.dict()
    index = 0
    if (db.query(Cart).filter(Cart.userID == user_id.userID).first() is not None):
        query = db.query(Cart).filter(Cart.userID == user_id.userID).all()
        for i in query:
            if (i.productID == upi_dict['productId']):
                i.quantityOrdered += upi_dict['quantityOrdered']
                db.commit()
                index += 1
        if (index == 0):
            db_cart = Cart(userID = user_id.userID, productID = upi_dict['productId'], quantityOrdered = upi_dict['quantityOrdered'])
            db.add(db_cart)
            db.commit()
    else :
        db_cart_2 = Cart(userID = user_id.userID, productID = upi_dict['productId'], quantityOrdered = upi_dict['quantityOrdered'])
        db.add(db_cart_2)
        db.commit()
    return status.HTTP_200_OK 


# Delete from cart
@app.delete("/delete-cart/{id}")
async def delete_cart(id:int,db: Session = Depends(get_db),user_id = Depends(get_current_user)):
    queue=db.query(Cart).filter(Cart.userID==user_id.userID).all()
    for i in queue:
        if i.productID==id :
            db.delete(i)
            db.commit()
    return status.HTTP_200_OK

"""

Tracking

"""
@app.get("/tracking/{order_id}")
async def tracking(order_id: int, db: Session = Depends(get_db)):
    return db.query(Orders.status).filter(Orders.orderID == order_id).first()


"""

Finish Order

"""
# @app.post("/orders/finish")
# async def finish_order(order: List[Order], db: Session = Depends(get_db), user_id = Depends(get_current_user)):
#     query = db.query(Orders.orderID).order_by(Orders.orderID.desc()).first()
#     ord_ID = int(query.orderID) + 1
    
#     i = 0
#     for ord in order:
#         i += 1
#         ord_dict = ord.dict()
#         if (i == 1):
#             db_order = Orders(orderID = ord_ID,
#                               orderDate = datetime.datetime.now(),
#                               status = "Shipping",
#                               userID = user_id.userID)
#             db.add(db_order)
#             db.commit()

#         db_od = OrderDetails(orderID = ord_ID,
#                              productID = ord_dict["productID"],
#                              quantityOrdered = ord_dict["quantityOrdered"],
#                              priceEach = ord_dict["priceEach"])
#         db.add(db_od)
#         db.commit()
#     post_query = db.query(Cart).filter(Cart.userID ==user_id.userID ).all()
#     db.delete(post_query)
#     db.commit()
#     return ord_ID

@app.post("/orders/finish")
async def finish_order(order: List[Order], db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    query = db.query(Orders.orderID).order_by(Orders.orderID.desc()).first()
    ord_ID = int(query.orderID) + 1

    i = 0
    for ord in order:
        i += 1
        ord_dict = ord.dict()
        if (i == 1):
            db_order = Orders(orderID = ord_ID,
                              orderDate = datetime.datetime.now(),
                              status = "Shipping",
                              userID = user_id.userID)
            db.add(db_order)
           

        db_od = OrderDetails(orderID = ord_ID,
                             productID = ord_dict["productID"],
                             quantityOrdered = ord_dict["quantityOrdered"],
                             priceEach = ord_dict["priceEach"])
        db.add(db_od)
     
    post_query = db.query(Cart).filter(Cart.userID ==user_id.userID ).all()
    for i in post_query:
        db.delete(i)
    db.commit()
    return ord_ID

    
# Get Landing Page
@app.get("/get-landing-page")
async def get_landing_page (db: Session = Depends(get_db)):
    return db.query(Products).all()


# Get Product Detail
@app.get("/product/get-detail/{id}")
async def get_product_details (id: int, db: Session = Depends(get_db)):
    return db.query(Products).get(id)


# Get Category
@app.get("/product/get-category/{type}")
async def get_category (type:str,db: Session = Depends(get_db)):
    return db.query(Products).filter(Products.category==type).all()


# Search Product
@app.get("/search/{info}")
async def search_product(info:str,db: Session = Depends(get_db)):
    queue = db.query(Products).filter(Products.name.contains(info)).all()
    return queue


# Delete Product
@app.delete("/delete-product/{id}")
async def delete_product(id:int,db: Session = Depends(get_db)):
    product_delete=db.query(Products).filter(Products.productID==id).first()

    if product_delete is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Khong co product")
    db.delete(product_delete)
    db.commit()
    return db.query(Products).all()


# Change Product
@app.post("/change-product/{id}")
async def changer_product(id:int,product:ProductsChange,db:Session=Depends(get_db)):
    product_dict = product.dict()
    product_change = db.query(Products).filter(Products.productID ==id).first()
    if product_change is not None:
        product_change.name = product.name
        product_change.price = product.price
        product_change.quantityInStock = 100
        product_change.image1 = product.image1
        product_change.image2 = product.image2
        product_change.category = product.category
        
        db.commit()
    # else:
    #     new_product = Products (
    #         productID = product.id,
    #         name = product.name,
    #         image1 = product.image,
    #         quantityInStock = product.quantityinstock,
    #         price = product.price,
    #         category = product.category
    #     )
    #     db.add(new_product)
    #     db.commit()
    
    return db.query(Products).all()

# Add product
@app.post("/add-product")
async def changer_product(product:ProductsChange,db:Session=Depends(get_db)):
    new_product = Products (
            name = product.name,
            image1 = product.image1,
            image2 = product.image2,
            quantityInStock = 100,
            price = product.price,
            category = product.category
        )
    db.add(new_product)
    db.commit()
    return status.HTTP_200_OK


# Get user list
@app.get("/get-userlist")
async def get_userlist(db:Session=Depends(get_db)):
    return db.query(User).filter(User.role=="user").all()


# Get order list
@app.get("/get-orderlist")
async def get_orderlist(db:Session=Depends(get_db)):
    return db.query(Orders).all()    

# Update Order
@app.put("/update-order/{id}")
async def update_order(id:int,db:Session=Depends(get_db)):
    queue=db.query(Orders).filter(Orders.orderID==id)
    queue.update({"shippedDate": datetime.datetime.now(),"status": "Shipped"}, synchronize_session=False)
    db.commit()
    return db.query(Orders).all()

# Get order user list
@app.get("/get-user-orderlist")
async def get_user_orderlist(db:Session=Depends(get_db),user_id= Depends(get_current_user)):
    post_queue=db.query(Orders).filter(Orders.userID==user_id.userID).all()
    if post_queue is None:
        return null
    queue=db.query(Orders,Products,OrderDetails).filter(Orders.userID==user_id.userID).filter(Orders.orderID==OrderDetails.orderID).filter(OrderDetails.productID==Products.productID).all()
    return queue


# Ban acc
@app.put("/ban-acc/{id}")
async def ban_acc(id:int,db:Session=Depends(get_db)):
    queue=db.query(User).filter(User.userID==id)
    queue.update({"isActive": False},synchronize_session=False)
    db.commit()
    return status.HTTP_200_OK


#Free acc
@app.put("/free-acc/{id}")
async def ban_acc(id:int,db:Session=Depends(get_db)):
    queue=db.query(User).filter(User.userID==id)
    queue.update({"isActive": True},synchronize_session=False)
    db.commit()
    return status.HTTP_200_OK