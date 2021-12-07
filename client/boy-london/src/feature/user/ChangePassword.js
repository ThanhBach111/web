import React, { useState } from "react";
import { apiChangePassword } from "../../api/modules";
import { accountSliceAction } from "../../app-redux/accountSlice";
import appStore from "../../app-redux/store";
import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangePassword = async () => {
    try {
      await apiChangePassword({
        email,
        newPassword: password,
        confirmPassword,
      });

      appStore.dispatch(
        accountSliceAction.setUserInfo({
          ...appStore.getState().accountSlice.userInfo,
          password: newPassword,
        })
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.textBanner}>ĐỔI MẬT KHẨU</h1>

      <div style={styles.inputView}>
        <StyleInput
          value={email}
          setValue={setEmail}
          placeholder="Email"
          icon={Images.mail}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          value={password}
          setValue={setPassword}
          placeholder="Mật khẩu"
          icon={Images.lock}
          type="password"
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Xác nhận mật khẩu"
          icon={Images.lock}
          type="password"
        />

        <button style={styles.buttonLogin} onClick={onChangePassword}>
          ĐỔI MẬT KHẨU
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 1440,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    flexDirection: "row",
  },
  inputView: {
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
    fontSize: 68,
    fontStyle: "bold",
    borderBottomStyle: "solid",
    borderBottomWidth: 7,
    borderSize: 100,
  },
  buttonLogin: {
    width: 280,
    height: 45,
    marginTop: 70,
    marginLeft: 100,
    borderRadius: 25,
    color: "white",
    backgroundColor: "black",
  },
};

export default ForgotPass;
