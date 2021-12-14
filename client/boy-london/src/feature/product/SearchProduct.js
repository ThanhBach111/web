import React, { useState , useEffect} from "react";
import request from "../../api/request";

import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";



const SearchProduct = () => {
  const [listSearch, setListSearch] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [search, setSearch] = useState("")
 

  const getData = async () => {
    try {
     const res = await request.get("/get-landing-page")
       setListProduct(res);
      
    } catch (err) {
     
      alert(err);
    }
  };

    const searchList = () => {
        let list = [];
        listProduct.forEach(item => {
            if(item.name.toLowerCase().includes(search))
                list.push(item);

        })
        setListSearch(list);
    }
  

  useEffect(() => {
    getData();
    searchList();
  }, []);

  const onGoToDetailProduct = (productID) => {
    return productID;

  };

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
      </div>
      <h1>Sản phẩm cần tìm:</h1>
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
  );
};

const styles = {
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
  
};

export default SearchProduct;
