import React, { useEffect, useState } from "react";
import { ROOT_SCREEN } from "../../navigation/routes";
import request from "../../api/request";
import StyleProduct from "../../components/StyleProduct"


const Banner =
  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg";

const Banner2 =
  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg";

const ProductStyle = [
  
      "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  
      "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
 
      "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",

      "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
 
];

const LandingPage = () => {
  const [listProduct, setListProduct] = useState([])

  const openListProduct = () => {
    window.location.href = ROOT_SCREEN.shop;
  };

  const onGoToDetailProduct = (productId) => {
    return null;
  };

  const getData = async () => {
    try {
      
      const res = await request.get("/get-landingpage");
      setListProduct(res)
      
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
                <img src={item} style={Style.imageStyle2}/>
                ))}
            </div>
            <div style={Style.text}>
              <p><b>NEW ARRIVAL</b></p>
              <button style={Style.showmore} onClick={openListProduct}>show more</button>
            </div>
            <div style={Style.newarrival}>
              {listProduct.slice(0,4).map((item) => (
                <StyleProduct
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  onPress={() => onGoToDetailProduct(item.id)}
                />
              ))}
            </div>
            
            <div style={Style.text}>
              <p><b>Best Sale Product</b></p>
              <button style={Style.showmore} onClick={openListProduct}>show more</button>
            </div>
            <div style={Style.bestSale}>
              <div style={Style.bestsaleproduct}>
                  {listProduct.slice(4,8).map((item) => (
                      <StyleProduct
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      onPress={() => onGoToDetailProduct(item.id)}
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
    height: "100%",
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
    height: 538,
  },
  style: {
    marginTop: 50,
    height: 450,
    display: "flex",
    flexDirection: "row",
  },
  imageStyle2: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 340,
  },
  text: {
    margin: 10,
    textAlign: "center",
    fontSize: "x-large",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
  newarrival: {
    height: 530,
    display: "flex",
    flexWrap: "wrap",
  },
  bestSale: {
    width: "100%",
    height: 1100,
    display: "flex",
    flexDirection: "row",
  },
  bestsaleproduct: {
    width: 700,
    height: 1050,
    display: "flex",
    flexWrap: "wrap",
  },
  imgView: {
    width: 680,
    height: 1050,
    marginLeft: 10,
    marginRight: 10,
  },
  contact: {
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  contactblock: {
    paddingRight: 10,
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    width: "25%",
  },
};
export default LandingPage;
