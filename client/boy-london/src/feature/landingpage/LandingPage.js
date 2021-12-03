import React from "react";
import { ROOT_SCREEN } from "../../navigation/routes";
import StyleProduct from "../../components/StyleProduct";
import Images from "../../assets/images";

const newProduct = [
    {
      id: 0,
      image:  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 1,
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 2,
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 3,
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    
  ]
  const bestSaleProduct = [
    {
      id: 0,
      image:  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 1,
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 2,
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 3,
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
      name: "Product",
      price: "200,000d",
    },
    
  ]
  const Banner ="https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg" 

  const Banner2 ="https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg" 

const ProductStyle = [
  {
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  },
  {
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  },
  {
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  },
  {
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  }
]

const LandingPage = () => {
  const openListProduct = () => {
    window.location.href = ROOT_SCREEN.shop;
  };
    return(
        <>
        <div style={Style.page}>
            <div style={Style.banner}>
              <img src={Banner} style={Style.imageStyle}></img>
            </div>
            <div style={Style.style}>
            {ProductStyle.map((item) => (
                <img src={item.image} style={Style.imageStyle2}/>
                ))}
            </div>
            <div style={Style.text}>
              <p><b>NEW ARRIVAL</b></p>
              <button style={Style.showmore} onClick={openListProduct}>show more</button>
            </div>
            <div style={Style.newarrival}>
                {newProduct.map((item) => (
                <StyleProduct image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
            
            <div style={Style.text}>
              <p><b>Best Sale Product</b></p>
              <button style={Style.showmore} onClick={openListProduct}>show more</button>
            </div>
            <div style={Style.bestSale}>
              <div style={Style.bestsaleproduct}>
                  {bestSaleProduct.map((item) => (
                  <StyleProduct image={item.image} name={item.name} price={item.price} />
                  ))}
              </div>
              <div style={Style.imgView}>
              <img src={Banner2} style={Style.imageStyle}></img>
              </div>
            </div>
            <div style={Style.contact}>
              <div style={Style.contactblock}>
              <b> Store location</b>
              <p>111 Trầnn Quốcc Toảnn, Q. Bắcc Từ Liêmm,</p>
              <p>HN145 Hai Bà Trưnng, Q. Bắcc Từ Liêmm, HN</p>
              <p>951 Đổnng Triềuu, Q. 1, HCM</p>
              </div>
              <div style={Style.contactblock}>
              <b>Hỗ trợ mua hàng</b>
              <p>Hướng dẫn mua hàng tại website</p>
              </div>
              <div style={Style.contactblock}>
              <b>Contact us</b>
              <p>Hotline tư vấnn : 0912981249</p>
              <p>Hotline khiếuu nạii: 091237124</p>
              </div>
              <div style={Style.contactblock}>
                
              </div>
            </div>
        </div>
        </>
        
    )
}

const Style = {
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  showmore: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft : "auto",
    marginRight: "auto",
    fontSize: "x-large",
    textDecoration: "underline",
  },
  page: {
    display: "block",
position: "relative",
    width: "1440px",
    margin: "auto",
    backgroundSize: "cover"
},
banner: { 
    width:1400,
    height: 538,
    
},
style: {
  marginTop: 50,
  height: 450,
  display: "flex",
  flexDirection: "row"
},
imageStyle2 :{
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 5,
  marginRight: 5,
  width: 340
},
text: {
  margin: 10,
  textAlign: "center",
  fontSize: "x-large",
  fontFamily:"Verdana, Geneva, Tahoma, sans-serif"
},
newarrival: {
  height: 535,
  display: "flex",
  flexWrap: "wrap",
},
bestSale: {
  width: "100%",
  height: 1100,
  display: "flex",
  flexDirection: "row"
},
bestsaleproduct: {
  width: 700,
  height: 1100,
  display: "flex",
  flexWrap: "wrap"
},
imgView: {
  width: 680,
  height: 1050,
  marginLeft: 10,
  marginRight: 10
},
contact: {
  paddingLeft: 10,
  marginTop: 20,
  marginBottom: 10,
  display: "flex",
  flexDirection: "row"
},
contactblock: {
  paddingRight: 10,
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  width: "25%"
}
}
export default LandingPage;