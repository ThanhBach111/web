import React from "react";
import Images from "../../assets/images";
import { useEffect, useState } from "react";
import request from "../../api/request";
import ItemAdmin from "../../components/ItemAdmin";
import { ADMIN_ROUTE } from "../../navigation/routes";




const Admin = () => {
  const goToAddProduct = () => {
    window.location.href = ADMIN_ROUTE.addProduct;
  }
  const [listProduct, setListProduct] = useState([]);
  const [search, setSearch] = useState("");



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

  const searchProduct = async () => {
    try {

      const res = await request.get(`/search/${search}`);
      setListProduct(res);
    } catch (err) {
      setListProduct([])

    }
  }
  return (

    <div style={styles.container}>


      <div style={styles.listProductView}>
        <div style={styles.navbaradmin}>
          <input style={styles.search}
            type="text"
            id="admin-search"
            placeholder="Type your search"
          />
          <button style={styles.buttonI} type="submit" value={search} onChange={(evt) => setSearch?.(evt.target.value)}>
            <button onClick={searchProduct} className="cursorPointer"><img style={styles.submit} src={Images.sea} /></button>
          </button>
        </div>
        <div style={styles.img}>
          <button onClick={goToAddProduct} className="cursorPointer">
            <img src={Images.addproduct} style={styles.button} />
          </button>
        </div>
        <div style={{ borderTopStyle: "solid", borderColor: "#DEDEDE", borderTopWidth: 3, borderSize: 0, marginTop: 10, }}>
          <div style={styles.view}>
            {listProduct.map((item) => (
              <ItemAdmin
                idProduct={item.productID}
                image={item.image1}
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
  buttonI: {
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
  img: {
    marginLeft: 30,
    marginTop: 0,
  },
  navbaradmin: {

    display: "flex",
    marginLeft: 10,
  },

  view: {
    width: "100%",
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    marginLeft: 30,

  },
}

export default Admin;