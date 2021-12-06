import React, { useState } from "react";
import { USER_ROUTE } from "../../navigation/routes";
import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";
import appStore from "../../app-redux/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    window.location.href = USER_ROUTE.register;
  };
  const onForgotPass = () => {
    window.location.href = USER_ROUTE.forgotPass;
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.textBanner}>ĐĂNG NHẬP</h1>

      <div style={styles.userInfoView}>
        <StyleInput
          icon={Images.mail}
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.lock}
          placeholder="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <button style={styles.btnLogin}>ĐĂNG NHẬP</button>

        <button style={styles.btnRegister} onClick={onRegister}>
          <p style={{ fontSize: 16 }}>Đăng ký</p>
        </button>

        <button style={styles.btnChangePassword} onClick={onForgotPass}>
          <p style={{ fontSize: 15 }}>Đổi mật khẩu?</p>
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
  userInfoView: {
    width: 50,
    margin: "auto",
    marginTop: 100,
    marginRight: 100,
    marginLeft: 180,
  },
  textBanner: {
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
  btnLogin: {
    width: 280,
    height: 50,
    marginTop: 60,
    marginLeft: 100,
    borderRadius: 25,
    color: "white",
    backgroundColor: "black",
  },
  btnChangePassword: {
    height: 36,
    width: 160,
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 160,
    border: "none",
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
  btnRegister: {
    height: 36,
    width: 160,
    marginTop: 40,
    marginBottom: 0,
    marginLeft: 160,
    border: "none",
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
};

export default Login;
