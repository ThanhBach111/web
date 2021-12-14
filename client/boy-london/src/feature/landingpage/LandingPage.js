import React, { useEffect, useState } from "react";
import { ROOT_SCREEN ,SHOP_ROUTE} from "../../navigation/routes";
import request from "../../api/request";
import StyleProduct from "../../components/StyleProduct";
import Images from "../../assets/images";


const Banner =
  "https://m.boylondon-ltd.com/web/product/medium/201809/20f90323d8b58d0d335df6c673919d2a.jpg";

const Banner2 =
  "http://www.njtsales.com/wp-content/uploads/2021/06/boy-london-womensmens-t-shirts-boy-london-tee-blackwhite_1.jpg";

const ProductStyle = [

  "https://images.asos-media.com/products/boy-london-patch-sweater/6505038-1-black?$n_640w$&wid=513&fit=constrain",

  "https://cbu01.alicdn.com/img/ibank/2013/783/318/1069813387_788585301.400x400.jpg",

  "https://i.pinimg.com/originals/05/3c/22/053c22845098045994aabefe77b457c7.jpg",

  "https://dynamic.zacdn.com/Vq7LJgCSgR4PEesSxzJIa-Sckd0=/fit-in/346x500/filters:quality(95):fill(ffffff)/https://static-sg.zacdn.com/p/boy-london-2035-1175191-1.jpg",

];

const LandingPage = () => {
  const [listProduct, setListProduct] = useState([])

  const openListProduct = () => {
    window.location.href = ROOT_SCREEN.shop;
  };

  const onGoToDetailProduct = (productID) => {
    return productID;

  };

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
    <>
      <div style={Style.page}>
        <div style={Style.banner}>
          <img src={Banner} style={Style.imageStyle}></img>
        </div>
        <div style={Style.style}>
          {ProductStyle.map((item) => (
            <img src={item} style={Style.imageStyle2} />
          ))}
        </div>
        <div style={Style.text}>
          <p><b>NEW ARRIVAL</b></p>
          <button style={Style.showmore} onClick={openListProduct}>show more</button>
        </div>
        <div style={Style.newarrival}>
          {listProduct.slice(0, 4).map((item) => (
            <StyleProduct
              image={item.image1}
              name={item.name}
              price={item.price}
              ID={item.productID}
              onPress={() => onGoToDetailProduct(item.productID)}
            />
          ))}
        </div>

        <div style={Style.text}>
          <p><b>Best Sale Product</b></p>
          <button style={Style.showmore} onClick={openListProduct}>show more</button>
        </div>
        <div style={Style.bestSale}>
          <div style={Style.bestsaleproduct}>
            {listProduct.slice(4, 8).map((item) => (
              <StyleProduct
                image={item.image1}
                name={item.name}
                price={item.price}
                ID={item.productID}
                onPress={() => onGoToDetailProduct(item.productID)}
              />
            ))}
          </div>
          <div style={Style.imgView}>
            <img src={Banner2} style={Style.imageStyle}></img>
          </div>
        </div>
        <div style={Style.contact}>
          <div style={Style.contactblock}>
            <b> Store location</b>
            <p>111 Trần Quốc Toản, Q. Bắc Từ Liêm,</p>
            <p>HN145 Hai Bà Trưng, Q. Bắc Từ Liêm, HN</p>
            <p>951 Đổng Triều, Q. 1, HCM</p>
          </div>
          <div style={Style.contactblock}>
            <b>Hỗ trợ mua hàng</b>
            <p>Hướng dẫn mua hàng tại website</p>
          </div>
          <div style={Style.contactblock}>
            <b>Contact us</b>
            <p>Hotline tư vấn : 0912981249</p>
            <p>Hotline khiếu nại: 091237124</p>
          </div>
          <div>
        
            
          </div>
          <div style={Style.contactblock}>

          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  imageStyle: {
    width: "100%",
    
  },
  showmore: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "x-large",
    textDecoration: "underline",
  },
  page: {
    display: "block",
    position: "relative",
    width: "1440px",
    margin: "auto",
    backgroundSize: "cover",
  },
  banner: {
    width: 1400,
    
  },
  style: {
    width: 1400,
    marginTop: 50,
    
    display: "flex",
    flexDirection: "row",
  },
  imageStyle2: {
    margin: "auto",
    width: 320,
  },
  text: {
    margin: 10,
    textAlign: "center",
    fontSize: "x-large",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
  newarrival: {
    width: 1400,
    display: "flex",
    flexWrap: "wrap",
  },
  bestSale: {
    width: 1400,
    
    display: "flex",
    flexDirection: "row",
  },
  bestsaleproduct: {
    width: 700,
    
    display: "flex",
    flexWrap: "wrap",
  },
  imgView: {
    width: 680,
    
    marginLeft: 10,
    marginRight: 10,
    marginTop: "auto",
    marginBottom: "auto",
  },
  contact: {
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  contactblock: {
    paddingRight: 10,
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    width: "45%",
  },
};
export default LandingPage;
