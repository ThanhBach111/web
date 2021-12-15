import React from "react";
import Images from "../../assets/images";
import { useEffect, useState } from "react";
import request from "../../api/request";
import ItemAdmin from "../../components/ItemAdmin";
import { ADMIN_ROUTE } from "../../navigation/routes";

const data = [
    {
      id: 0,
      image:
        "https://ibb.co/vvfrW8b",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 1,
      image:
        "https://ibb.co/w6xXPkm",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/20/6a/7b/206a7b1acab097f8b864497c81d05b66.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/20/6a/7b/206a7b1acab097f8b864497c81d05b66.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 4,
      image:
        "https://www.logolynx.com/images/logolynx/74/740ef38ce219d8b589c7d898ad16227a.jpeg",
      name: "Product",
      price: "200,000d",
    },
  ];

  
const Admin = () => {
  const goToAddProduct = () => {
    window.location.href = ADMIN_ROUTE.addProduct;
  }
  const [listProduct, setListProduct] = useState([]);

  

  const getData = async () => {
    try {
      const res = await request.get("/get-landing-page");
      setListProduct(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

    return (
    
        <div style={styles.container}>
            
            
            <div style={styles.listProductView}>
            <div style={styles.navbaradmin}>
            <input style={styles.search}
            type="text"
            id="admin-search"
            placeholder="Type your search"
            />
            <button  style={styles.buttonI} type="submit">
                <button><img style={styles.submit} src={Images.sea}/></button>
            </button>
            </div>
            <div style={styles.img}>
              <button onClick={goToAddProduct}>
            <img src={Images.addproduct} style={styles.button}/>
            </button>
            </div>
            <div style={{borderTopStyle: "solid", borderColor: "#DEDEDE", borderTopWidth: 3, borderSize: 0,marginTop: 10,}}>
            <div style={styles.view}>
            {listProduct.map((item) => (
             <ItemAdmin
            ID = {item.id}
            image={item.image}
            name={item.name}
            price={item.price}
           />))}
            </div>
            </div>
            </div>
            
        </div>
    
    );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 70,
    paddingRight: 70,
    flexDirection: "column",
    borderRadius: 10,
  },

    search: {
        width: 235,
        height: 40,
        marginLeft: 30,
        display: "block",
        marginTop: 30,
        
    },
    buttonI : {
        backgroundColor: "transparent",
        borderColor: "transparent",
    },
    submit: {
        width: 85,
        height: 40,
        marginLeft: 30,
        marginTop: 30,
        backgroundColor: "transparent",
        borderColor: "transparent",
    },
    button: {
        width: 98,
        height: 19,
        marginTop: 40,
        marginLeft: 10,
    },
    img : {
        marginLeft: 30,
        marginTop: 0,
    },
    navbaradmin: {
        
        display: "flex",
        marginLeft: 10,
    },
    
    view :{
        width: "100%",
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 30,  
        marginLeft: 30,
        
    },
}

export default Admin;