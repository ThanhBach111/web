import React, { useEffect, useState } from "react";
import StyleInput from "../../components/StyleInput";
import Images from "../../assets/images";
import { ADMIN_ROUTE, ROOT_SCREEN, USER_ROUTE } from "../../navigation/routes";
import request from "../../api/request";

const listPromotion = [
  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",

  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",

  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",

  "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
];

const MyPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const getData = async () => {
    try {
      const res = await request.get("/account");
      setName(res.name);
      setEmail(res.mail);
      setPhone(res.phoneNumber);
      setAddress(res.address);
      setRole(res.role);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onChangeInfo = async () => {
    try {
      const res = await apiChangeInfo("/account/change-information", {
        name: name,
        email: email,
        phoneNumber: phone,
        address: address,
      });
    } catch (err) {
      alert(err);
    }
  };

  const gotoMangerPage = () => {
    window.location.href = ADMIN_ROUTE.productManage;
  };

  const logOut = async () => {
    try {
      const res= await request.get("/logout");
      window.location.href = ROOT_SCREEN.login;
    } catch(err){
      alert(err)
    }
  } 
  

  const changePassword = () => {
    window.location.href = USER_ROUTE.forgotPass;
  }

  const checkRole = () => {
    if (role == "admin")
      return (
        
          <button style={Style.button1} onClick={gotoMangerPage}>
            Quản lý thông tin
          </button>
        
      )
  }

  return (
    <div style={Style.page}>
      <div style={Style.userinfo}>
        <h1>Tài khoản của tôi</h1>
        <StyleInput
          icon={Images.userText}
          placeholder="Họ và tên"
          value={name}
          setValue={setName}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.mail}
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.phone}
          placeholder="Phone"
          value={phone}
          setValue={setPhone}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.home}
          placeholder="Địa chỉ"
          value={address}
          setValue={setAddress}
        />

        <button style={Style.button1} onClick={onChangeInfo}>
          Cập nhật thông tin
        </button>

        <div>
        <button style={Style.button2} onClick={changePassword}>
          Đổi mật khẩu
        </button>

        <button style={Style.button2} onClick={logOut}>
          Đăng xuất
        </button>
        </div>
        {checkRole()}
      </div>
      <div style={Style.cartinfo}>
        <h1>Thông tin khuyến mãi</h1>
        {listPromotion.map((item) => (
          <img src={item} style={Style.promotion} />
        ))}
      </div>
    </div>
  );
};

const Style = {
  button2: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: 80,
    marginTop:30,
    fontSize: "x-large",
    textDecoration: "underline",
  },
  promotion: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 340,
  },
  page: {
    position: "relative",
    width: 1440,
    margin: "auto",

    display: "flex",
    flexDirection: "row",
  },
  userinfo: {
    borderLeft: 130,
    width: "50%",
  },
  cartinfo: {
    width: "50%",
  },

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
};

export default MyPage;
