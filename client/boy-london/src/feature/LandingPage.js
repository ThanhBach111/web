import React from "react";

import ItemProduct from "../../components/ItemProduct";
import Images from "../../assets/images";

const data = [
    {
      id: 0,
      image: Images.logo,
      name: "Product",
      price: "200,000d",
    },
    {
      id: 1,
      image:"/landingpage/img/arrival1.png",
      name: "Product",
      price: "200,000d",
    },
    {
      id: 2,
      image:'/img/arrival3',
      name: "Product",
      price: "200,000d",
    },
    {
      id: 3,
      image:'/img/arrival4',
      name: "Product",
      price: "200,000d",
    },
    
  ]
const LandingPage = () => {

    return(
        <>
        <div style={Style.page}>
            <div style={Style.banner}></div>
            <div style={Style.style}>
                
            </div>
            <div style={Style.text}><b>NEW ARRIVAL</b></div>
            <div style={Style.text}>show more</div>
            <div style={Style.newarrival}>
                {data.map((item) => (
                <ItemProduct image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
            
            <div style={Style.text}><b>New Product</b></div>
            <div style={Style.text} >show more</div>
            <div Style={Style.bestsale}>
              <div style={Style.bestsaleproduct}>
                  {data.map((item) => (
                  <ItemProduct image={item.image} name={item.name} price={item.price} />
                  ))}
              </div>
              <div Style={Style.imgview}></div>
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
  page: {
    display: "block",
position: "relative",
    width: "1440px",
    margin: "auto",
    backgroundSize: "cover"
},
banner: { 
    width: "1440px",
    height: "538px",
},
style: {
  marginTop: 50,
  width: "100%",
  height: 489,
  display: "flex",
  flexDirection: "row"
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
bestsale: {
  height: 1100,
  display: "flex",
  flexWrap: "wrap",
},
bestsaleproduct: {
  width: "50%",
  height: 1100,
  display: "flex",
  flexWrap: "wrap"
},
imgview: {
  width: "50%",
  height: 1100,
  backgroundSize: "cover"
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