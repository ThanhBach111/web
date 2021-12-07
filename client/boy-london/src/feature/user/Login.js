import React, { useState } from "react";
import { apiLogin } from "../../api/modules";
import { accountSliceAction } from "../../app-redux/accountSlice";
import appStore from "../../app-redux/store";
import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";
import { USER_ROUTE } from "../../navigation/routes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFailLogin, setIsFailLogin] = useState(false);

  const onNavigateRegister = () => {
    window.location.href = USER_ROUTE.register;
  };
  const onNavigateForgotPassword = () => {
    window.location.href = USER_ROUTE.forgotPass;
  };

  const onRequestLogin = async () => {
    try {
      const res = await apiLogin({ username: email, password });
      appStore.dispatch(accountSliceAction.setToken(res.access_token));
    } catch (err) {
      setIsFailLogin(true);
      alert(err);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.textBanner}>ĐĂNG NHẬP</h1>

      <div style={styles.inputView}>
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

        {isFailLogin && <p style={styles.textLoginFail}>Đăng nhập thất bại</p>}

        <button style={styles.btnLogin} onClick={onRequestLogin}>
          ĐĂNG NHẬP
        </button>

        <button style={styles.btnRegister} onClick={onNavigateRegister}>
          <p style={{ fontSize: 16 }}>Đăng ký</p>
        </button>

        <button
          style={styles.btnChangePassword}
          onClick={onNavigateForgotPassword}
        >
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
  inputView: {
    width: 500,
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
  textLoginFail: {
    fontSize: 13,
    color: "red",
    fontStyle: "italic",
    marginLeft: 20,
    marginTop: 20,
  },
};

export default Login;
