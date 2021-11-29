import React from "react";
import StyleInput from "../../components/StyleInput";
import Images from "../../assets/images";

const info = [
    {
    
      image: Images.user,
      name: "User",
      
    },
    {
      
      image: Images.mail,
      name: "Mail",
      
    },
    {
      
      image:Images.phone,
      name: "Phone",
      
    },
    {
  
      image:Images.home,
      name: "Address",
      
    },
    
  ];

const MyPage = () => {
    return(
        <div style={Style.page}>
            <div style={Style.userinfo}>
                <h1>Tài khoản của tôi</h1>
                {info.map((item) => (
                <StyleInput image={item.image} name={item.name}  />
                ))}
                <button style={Style.button1}>Cập nhật thông tin</button>
            </div>
            <div style={Style.cartinfo}>
              <h1>Thông tin khuyến mãi</h1>

            </div>
        </div>
    )
}

const Style ={
  page: {
    position: "relative",
    width: 1440,
    margin: "auto",
    
    display: "flex",
    flexDirection: "row"
},
userinfo: {
    borderLeft: 130,
    width: "50%"
},
cartinfo: {
    width: "50%"
},

button1: {
    width: 200,
    marginLeft: 125,
    marginTop: 25,
    borderRadius: 50,
    backgroundColor:"black",
    height: 50,
    color: "white",
    fontSize: 20
}
}

export default MyPage;