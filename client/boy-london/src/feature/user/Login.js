import React from "react";
import { USER_ROUTE } from "../../navigation/routes";
import Images from "../../assets/images";


const info = [
    {
      id: 0,
      image:"../assets/ic_lock.png",
      name: "Email",
    },
    {
      id: 1,
      image:"../assets/ic_lock.png",
      name: "Password",
    },
    
  ];

const Login = () => {
    const onRegister = () => {
        window.location.href = USER_ROUTE.register;
    };
    const onForgotPass = () => {
        window.location.href = USER_ROUTE.forgotPass;
    };
    const onUser = () => {
        window.location.href = USER_ROUTE.myPage;
    };

    return(
        <div style={styles.page}>
            <h1 style={styles.wordbanner}>
                ĐĂNG NHẬP
            </h1>
            <div style={styles.userinfo}>
                
                <div style={styles.forminput}>
                <img src={Images.mail} style={styles.image} />
                <input type="text" style={styles.textInput} placeholder={"EMAIL"}></input>
                </div>
                <div style={styles.forminput}>
                <img src={Images.lock} style={styles.image} />
                <input type="password" style={styles.textInput} placeholder={"MẬT KHẨU"}></input>
                </div>
                <button style={styles.button_regist_pass} onClick={onForgotPass}>Đổi mật khẩu?</button>

                <button style={styles.button_login}>ĐĂNG NHẬP</button>

                <button style={styles.button_regist_pass} onClick={onRegister}>Đăng ký</button>
            </div>
        </div>
    )
}

const styles =  {
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
        marginLeft: 180,
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
        height: 40,
        marginTop: 10,
        marginLeft: 100,
        borderRadius: 25,
        color: "white",
        backgroundColor: "black",
    },
    button_regist_pass: {
        height: 36,
        width: 160,
        marginTop: 10,
        marginBottom: 0,
        marginLeft: 160,
        border: "none",
        backgroundColor: "transparent",
        textDecoration: "underline",
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
};

export default Login;
/*{info.map((item) => (
                <StyleInput image={item.image} name={item.name}/>
                ))}*/