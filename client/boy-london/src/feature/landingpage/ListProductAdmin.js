import React from "react";
import Images from "../../assets/images";
import { useEffect, useState } from "react";
import request from "../../api/request";
import ItemAdmin from "../../components/ItemAdmin";
import { ADMIN_ROUTE } from "../../navigation/routes";
import ItemOption from "../../components/ItemOption";



const Admin = () => {
  const goToAddProduct = () => {
    window.location.href = ADMIN_ROUTE.addProduct;
  }
  const [listProduct, setListProducts] = useState([]);
  const [search, setSearch] = useState("");

  const TYPE_CATEGORY = {
    top: "Top",
    bottom: "Bottom",
    accessories: "Accessories",
  };
  const [listCategories, setListCategories] = useState([]);
  const [oldList, setOldList] = useState([]);
  

  console.log(listProduct);

  const onChangeCategory = (typeCategory) => {
    const index = listCategories.indexOf(typeCategory);
    if (index !== -1) {
      const temp = [...listCategories];
      temp.pop(index);
      setListCategories(temp);
      setListProducts(oldList);
    } else {
      setListCategories([typeCategory]);
      const temp = oldList.filter((item) => item.category === typeCategory);
      setListProducts(temp);
    }
  };

  const getData = async () => {
    try {
      const res = await request.get("/get-landing-page");
      setListProducts(res);
      setOldList(res);
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
      setListProducts(res);
    } catch (err) {
      setListProducts([])

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
            value={search} 
            onChange={(evt) => setSearch(evt.target.value)}
          />
          <button style={styles.buttonI} onClick={searchProduct} className="cursorPointer" >
            <img style={styles.submit} src={Images.sea} />
          </button>
          <div style={styles.checkbox}>
          
          <ItemOption
            title="Top"
            onPress={() => onChangeCategory(TYPE_CATEGORY.top)}
            isSelected={listCategories.includes(TYPE_CATEGORY.top)}
          />
          <ItemOption
            title="Bottom"
            onPress={() => onChangeCategory(TYPE_CATEGORY.bottom)}
            isSelected={listCategories.includes(TYPE_CATEGORY.bottom)}
          />
          <ItemOption
            title="Accessories"
            onPress={() => onChangeCategory(TYPE_CATEGORY.accessories)}
            isSelected={listCategories.includes(TYPE_CATEGORY.accessories)}
          />
        </div>
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
  checkbox: {
    marginLeft: "190",
    display:"flex", 
    marginTop: "30"
  },
}

export default Admin;