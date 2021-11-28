import React from "react";
import Images from "../../assets/images";
import { USER_ROUTE } from "../../navigation/routes";

const PolicyHomePage = () => {
    const onPolicy = () => {
        window.location.href = USER_ROUTE.policy;
      };
    const onInstruc = () => {
        window.location.href = USER_ROUTE.instruction;
      };
    return(
        <div style={styles.page}>
            
            <div>
                <button style={styles.button} onClick={onPolicy}>
                <img src={Images.backIns} style={styles.image}/>
                </button>
                <p style={styles.para}>CHÍNH SÁCH BẢO HÀNH</p>
            </div>
            <div>
                <button style={styles.button} onClick={onInstruc}>
                <img src={Images.backPoli} style={styles.image}/>
                </button>
                <p style={styles.para}>HƯỚNG DẪN MUA HÀNG</p>
            </div>
        </div>
        
    )
}


const styles = {
    image: {
        width: 500,
        height: 400,
        marginLeft: 80,
        alignItem: "center",
        borderRadius: 10,
    },
    page: {
        marginLeft: 50,
        marginTop: 50,
        display: "flex",
    },
    para: {
        marginLeft: 220,
        marginTop: 10,
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
    },
}


export default PolicyHomePage;