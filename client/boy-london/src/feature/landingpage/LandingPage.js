import React from "react";
import "./landingpage.css";
import ItemProduct from "../../components/ItemProduct";


const data = [
    {
      id: 0,
      image:"/img/arrival1.png",
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
    
  ];
const LandingPage = () => {
    return(
        <>
        <div className="page">
            <div className="banner"></div>
            <div className="style">
                <div className="style1"></div>
                <div className="style2"></div>
                <div className="style3"></div>
                <div className="style1"></div>
            </div>
            <div className ="text"><b>NEW ARRIVAL</b></div>
            <div className ="text">show more</div>
            <div className="newarrival">
                {data.map((item) => (
                <ItemProduct image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
            
            <div className="text"><b>New Product</b></div>
            <div className ="text">show more</div>
            <div className="bestsale">
              <div className="bestsaleproduct">
                  {data.map((item) => (
                  <ItemProduct image={item.image} name={item.name} price={item.price} />
                  ))}
              </div>
              <div className="imgview"><image src="img/imgview.png" /></div>
            </div>
            <div className="contact">
              <div className="contactblock">
              <b> Store location</b>
              <p>111 Trầnn Quốcc Toảnn, Q. Bắcc Từ Liêmm,</p>
              <p>HN145 Hai Bà Trưnng, Q. Bắcc Từ Liêmm, HN</p>
              <p>951 Đổnng Triềuu, Q. 1, HCM</p>
              </div>
              <div className="contactblock">
              <b>Hỗ trợ mua hàng</b>
              <p>Hướng dẫn mua hàng tại website</p>
              </div>
              <div className="contactblock">
              <b>Contact us</b>
              <p>Hotline tư vấnn : 0912981249</p>
              <p>Hotline khiếuu nạii: 091237124</p>
              </div>
              <div className="contactblock">
                
              </div>
            </div>
        </div>
        </>
        
    )
}

export default LandingPage;