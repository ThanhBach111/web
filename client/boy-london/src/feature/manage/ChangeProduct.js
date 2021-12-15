import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetProductDetail } from "../../api/modules";
import StyleInput from "../../components/StyleInput";
import { SHOP_ROUTE, ADMIN_ROUTE } from "../../navigation/routes";
import Images from "../../assets/images";
import request from "../../api/request";




const ChangeProduct = ({ location }) => {
  const { idProduct } = location.state;

  
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  

  

  const getData = async () => {
    try {
      const res = await apiGetProductDetail(idProduct);
      setImage1(res.image1);
      setImage2(res.image2);
      setCategory(res.category);
      setName(res.name);
      setPrice(res.price);
      
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const changeProductInfo = async () => {
    try {
        const res1 = await request.post(`/change-product/${idProduct}`, {
            image1,
            image2,
            category,
            name,
            price,
            
        })
        window.location.href = ADMIN_ROUTE.controlframe;
    } catch (err) {
        alert(err)
    }
  };

  const deleteProduct = async () => {
    try {
      const res1 = await request.post(`/delete-product/${idProduct}`)
      window.location.href = ADMIN_ROUTE.controlframe;
  } catch (err) {
      alert(err)
  }
  }

  return (
    <div style={Style.page}>
      <div style={Style.view}>
        <h1>Thông tin sản phẩm</h1>
        <h2>Image1:</h2>
        <StyleInput
          
          placeholder="Image1"
          value={image1}
          setValue={setImage1}
        />
        <div style={{ marginTop: 40 }}></div>
        <h2>Image2:</h2>
        <StyleInput
          
          placeholder="Image2"
          value={image2}
            setValue={setImage2}
        />
        <div style={{ marginTop: 40 }}></div>
        <h2>Category:</h2>
        <StyleInput
          
          placeholder="Category"
          value={category}
            setValue={setCategory}
        />
        <div style={{ marginTop: 40 }}></div>
        <h2>Tên sản phẩm:</h2>
        <StyleInput
          
          placeholder="name"
          value={name}
            setValue={setName}
        />
        <div style={{ marginTop: 40 }}></div>
        <h2>Giá sản phẩm:</h2>
        <StyleInput
          
          placeholder="price"
          value={price}
            setValue={setPrice}
        />
        <button style={Style.button1} onClick={changeProductInfo} className="cursorPointer">Lưu thay đổi</button>

        <button style={Style.button1} onClick={deleteProduct} className="cursorPointer">Xóa sản phẩm</button>

      </div>
      <div style={Style.view}>
        <img src={image1} style={Style.imageStyle2}/>
        <img src={image2} style={Style.imageStyle2}/>
        </div>
      </div>
  );
};

const Style = {
    button1: {
        width:200,
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

export default ChangeProduct;
