import React, { useState } from "react";
import request from "../../api/request";
import StyleInput from "../../components/StyleInput";
import { ADMIN_ROUTE } from "../../navigation/routes";
import Toastify from "../../utilities/useToastify";
import ItemOption from "../../components/ItemOption";

const AddProduct = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const changeProductInfo = async () => {
    try {
      const res1 = await request.post("/add-product", {
        image1,
        image2,
        category,
        name,
        price,
      });
      Toastify.alert("Thêm sản phẩm thành công")
      window.location.href = ADMIN_ROUTE.controlframe;
      
    } catch (err) {
      Toastify.error(err);
    }
  };
  const TYPE_CATEGORY = {
    top: "Top",
    bottom: "Bottom",
    accessories: "Accessories",
  };
  const [listCategories, setListCategories] = useState([]);
  


  const onChangeCategory = (typeCategory) => {
    setCategory(typeCategory)
    const index = listCategories.indexOf(typeCategory);
    if (index !== -1) {
      const temp = [...listCategories];
      temp.pop(index);
      setListCategories(temp);
    
    } else {
      setListCategories([typeCategory]);
      
    }
  };

  return (
    <div style={Style.page}>
      <div style={Style.view}>
        <h1>Thông tin sản phẩm</h1>
        <h2>Image1:</h2>
        <StyleInput placeholder="Image1" value={image1} setValue={setImage1} />
        <div style={{ marginTop: 40 }}></div>
        <h2>Image2:</h2>
        <StyleInput placeholder="Image2" value={image2} setValue={setImage2} />
        <div style={{ marginTop: 40 }}></div>
        <h2>Category:</h2>
        <div style={{marginLeft: "20",display:"flex", marginTop: "30", width: 450}}>
          
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
      
        <div style={{ marginTop: 40 }}></div>
        <h2>Tên sản phẩm:</h2>
        <StyleInput placeholder="name" value={name} setValue={setName} />
        <div style={{ marginTop: 40 }}></div>
        <h2>Giá sản phẩm:</h2>
        <StyleInput placeholder="price" value={price} setValue={setPrice} />
        <button
          style={Style.button1}
          onClick={changeProductInfo}
          className="cursorPointer"
        >
          Thêm sản phẩm
        </button>
      </div>
      <div style={Style.view}>
        <img src={image1} style={Style.imageStyle2} />
        <img src={image2} style={Style.imageStyle2} />
      </div>
    </div>
  );
};

const Style = {
  button1: {
    width: 200,
    marginLeft: 145,
    marginTop: 25,
    borderRadius: 50,
    backgroundColor: "black",
    height: 50,
    color: "white",
    fontSize: 20,
  },
  page: {
    position: "relative",
    width: 1440,
    margin: "auto",

    display: "flex",
    flexDirection: "row",
  },
  imageStyle2: {
    width: 320,
    margin: 20,
  },
  view: {
    width: "50%",
  },
};

export default AddProduct;
