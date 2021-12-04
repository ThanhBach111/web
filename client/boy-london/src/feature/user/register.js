import React from "react";
import Images from "../../assets/images";
import { ROOT_SCREEN } from "../../navigation/routes";

const info = [
  {
    id: 0,
    image: "../assets/ic_user_text_box",
    name: "Name",
  },
  {
    id: 1,
    image: "../assets/ic_mail.png",
    name: "Email",
  },
  {
    id: 2,
    image: "../assets/ic_phne.png",
    name: "Phone Number",
  },
  {
    id: 3,
    image: "../assets/ic_home.png",
    name: "Address",
  },
  {
    id: 4,
    image: "../assets/ic_lock.png",
    name: "Password",
  },
];

const backLogin = () => {
  window.location.href = ROOT_SCREEN.login;
};

const Register = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.wordbanner}>ĐĂNG KÝ</h1>
      <div style={styles.userinfo}>
        <div style={styles.forminput}>
          <img src={Images.userText} style={styles.image} />
          <input
            type="text"
            style={styles.textInput}
            placeholder={"HỌ VÀ TÊN"}
          ></input>
        </div>
        <div style={styles.forminput}>
          <img src={Images.mail} style={styles.image} />
          <input
            type="text"
            style={styles.textInput}
            placeholder={"EMAIL"}
          ></input>
        </div>
        <div style={styles.forminput}>
          <img src={Images.phone} style={styles.image} />
          <input
            type="text"
            style={styles.textInput}
            placeholder={"SỐ ĐIỆN THOẠI"}
          ></input>
        </div>
        <div style={styles.forminput}>
          <img src={Images.home} style={styles.image} />
          <input
            type="text"
            style={styles.textInput}
            placeholder={"ĐỊA CHỈ"}
          ></input>
        </div>
        <div style={styles.forminput}>
          <img src={Images.lock} style={styles.image} />
          <input
            type="password"
            style={styles.textInput}
            placeholder={"MẬT KHẨU"}
          ></input>
        </div>
        <button style={styles.button_login}>ĐĂNG KÝ</button>
        <button style={styles.iconNavMenu} onClick={backLogin}>
          <img src={Images.back} style={styles.back} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    width: 1440,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    flexDirection: "row",
  },
  userinfo: {
    width: 50,
    margin: "auto",
    marginTop: 100,
    marginRight: 100,
    marginLeft: 280,
  },
  wordbanner: {
    margin: "auto",
    marginTop: 180,
    marginLeft: 48,
    marginRight: 60,
    fontFamily: "Nunito",
    fontSize: 88,
    fontStyle: "bold",
    borderBottomStyle: "solid",
    borderBottomWidth: 7,
    borderSize: 100,
  },
  button_login: {
    width: 280,
    height: 36,
    marginTop: 10,
    marginLeft: 100,
    borderRadius: 25,
    color: "white",
    backgroundColor: "black",
  },
  image: {
    width: 20,
    height: 18,
    paddingTop: 10,
    paddingRight: 10,
    display: "inline",
  },
  forminput: {
    marginTop: 25,
    borderRadius: 50,
    width: 450,
    position: "relative",
    borderStyle: "solid",
    borderWidth: 2,
    paddingTop: 10,
    paddingLeft: 0,
    paddingLeft: 10,
  },
  textInput: {
    marginBottom: 15,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  back: {
    width: 30,
    height: 25,
    marginTop: 30,
  },
  iconNavMenu: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
};

export default Register;
