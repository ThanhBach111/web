import React from "react";
import Images from "../../assets/images";
import { USER_ROUTE } from "../../navigation/routes";
import "./policyMenu.css";

const PolicyHomePage = () => {
    const onPolicy = () => {
        window.location.href = USER_ROUTE.policy;
      };
    const onInstruc = () => {
        window.location.href = USER_ROUTE.instruction;
      };
    return(
        <div>
            <h1 style={styles.banner}>CHÍNH SÁCH BẢO HÀNH & CÁCH MUA HÀNG</h1>
        <div style={styles.page}  >
            
            <div style={{display:"float"},{marginLeft:70}} className="img-wrapper" >
                <button style={styles.button} onClick={onPolicy}>
                <img src={Images.backIns} style={styles.image} className="hover-zoom"/>
            
                </button>
                <p style={styles.para}>CHÍNH SÁCH BẢO HÀNH</p>
              
            </div>
            <div style={{marginLeft:220}} className="img-wrapper">
                <button style={styles.button} onClick={onInstruc}>
                <img src={Images.backPoli} style={styles.image} className="hover-zoom"/>
                </button>
                <p style={styles.para}>HƯỚNG DẪN MUA HÀNG</p>
            </div>
        </div>
        </div>
    )
}


const styles = {
    banner: {
        textAlign:"center", 
        fontColor: "#827A7A",
    },
    image: {
        width: 550,
        height: 400,
        marginLeft: 80,
        alignItem: "center",
        borderRadius: 10,
    },
    page: {
        marginLeft: 75,
        marginTop: 50,
        display: "flex",
        
    },
    para: {
        marginLeft: 250,
        marginTop: 10,
        paddingLeft: 40,
        textAlign: "center",
        fontColor: "#827A7A",
        fontSize: 20,
        
    },
    head: {
        marginLeft: 100,
    },
    button: {
        borderColor: "transparent",
        backgroundColor: "transparent",
        width: 500,
        height: 400,
        marginLeft: 20,
        marginBottim: 30,
        marginTop: 10,
        backgroundImage: "url(/Images.backIns)",
    },
}


export default PolicyHomePage;