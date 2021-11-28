import React from "react";
import "./mypage.css";
import StyleInput from "../../components/StyleInput";


const info = [
    {
      id: 0,
      image:"/img/arrival1.png",
      name: "Product",
      
    },
    {
      id: 1,
      image:"/landingpage/img/arrival1.png",
      name: "Product",
      
    },
    {
      id: 2,
      image:'/img/arrival3',
      name: "Product",
      
    },
    {
      id: 3,
      image:'/img/arrival4',
      name: "Product",
      
    },
    
  ];


const MyPage = () => {
    return(
        <div className="page">
            <div className="userinfo">
                <h1>Tài khoản của tôi</h1>
                {info.map((item) => (
                <StyleInput image={item.image} name={item.name}  />
                ))}
                <button>Cập nhật thông tin</button>
                
            </div>
            <div className="cartinfo">
              <h1>Thông tin khuyến mãi</h1>
            </div>
        </div>
    )
}

export default MyPage;
