import React, { useState , useEffect} from "react";
import request from "../../api/request";

import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";
import StyleProduct from "../../components/StyleProduct";
import { ROOT_SCREEN } from "../../navigation/routes";


const SearchProduct = () => {
  const [listSearch, setListSearch] = useState([]);
  
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");
 
  
  const getData = async () => {
    try {
     const res = await request.get("/get-landing-page")
       
       setListSearch(res);
    } catch (err) {
     
      alert(err);
    }
  };

    const searchList = async () => {
        try {
          setAlert("")
          const res = await request.get(`/search/${search}`);
          setListSearch(res);
        } catch (err) {
          setListSearch([])
          setAlert("Không tìm thấy sản phẩm nào")
        }
    }
  

  useEffect(() => {
    getData();
    
  }, []);

  const onGoToDetailProduct = (productID) => {
    return productID;

  };

  const goToShop = () => {
    window.location.href = ROOT_SCREEN.shop;
  }

  return (
    <div style={styles.page}>
      <div style={styles.boxSearch}>
        <h1>TÌM KIẾM SẢN PHẨM</h1>
        
        <StyleInput
          icon={Images.search}
          placeholder="Search"
          value={search}
          setValue={setSearch}
        />
        <button style={styles.button} onClick={searchList}>Tìm</button>
        
      </div>
      
      
      <h1>Sản phẩm cần tìm:{alert}</h1>
      <div style={styles.showProduct}>
      
      {listSearch.map((item) => (
              <StyleProduct
                image={item.image1}
                name={item.name}
                price={item.price}
                ID={item.productID}
                onPress={() => onGoToDetailProduct(item.productID)}
              />
            ))}
        </div>
        <button style={styles.button2} onClick={goToShop}>xem thêm sản phẩm khác</button>
    </div>
  );
};

const styles = {
  button: {
    width: 100,
    marginTop: 25,
    borderRadius: 50,
    backgroundColor: "black",
    height: 50,
    color: "white",
    fontSize: 20,
  },
  page: {
    width: 1400,
    position: "relative",
    margin: "auto",
  },
  boxSearch: {
      width: 500,
      margin: "auto",
      textAlign: "center",
  },
  showProduct: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  button2: {
    backgroundColor: "transparent",
    borderWidth: 0,
    
    marginTop:30,
    fontSize: "x-large",
    textDecoration: "underline",
  }
};

export default SearchProduct;
