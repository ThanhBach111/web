import { React, Component } from "react";
import Images from "../../assets/images";
import { ROOT_SCREEN, USER_ROUTE } from "../../navigation/routes";
import { useEffect, useState } from "react";
import request from "../../api/request";

const Manager = () => {
  const [listProduct, setListProduct] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [listOrder, setListOrder] = useState([]);
  const getData = async () => {
    try {
      const res = await request.get("/get-landing-page");
      setListProduct(res);
      const res1 = await request.get("/get-userlist");
      setListUser(res1);
      const res2 = await request.get("/get-orderlist");
      setListOrder(res2);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
 const returnMyPage = () => {
   window.location.href = ROOT_SCREEN.mypage;
 }
  return (

    <div style={styles.page}>
      <div >
        <h1 style={{ marginLeft: 100 }}>
          Danh sách sản phẩm
        </h1>
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <p style={styles.data}>MÃ SẢN PHẨM</p>
            <p style={styles.data}>LOẠI SẢN PHẨM</p>
            <p style={styles.data}>TÊN SẢN PHẨM</p>
            <p style={styles.data}>GIÁ BÁN </p>
            
          </div>
          <div style={styles.dataView}>
          {listProduct.map((item) => (
            <div
              style={styles.dataTable}
            >
              <div style={styles.data}>{item.productID}</div>
              <div style={styles.data}>{item.category}</div>
              <div style={styles.data}>{item.name}</div>
              <div style={styles.data}>{item.price}</div>
              
            </div>
          ))}
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ marginLeft: 100 }}>
          Danh sách khách hàng
        </h1>
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <p style={styles.data1}>MÃ KHÁCH HÀNG</p>
            <p style={styles.data1}>TÊN ĐĂNG NHẬP</p>
            <p style={styles.data1}>TÊN KHÁCH HÀNG</p>
            <p style={styles.data1}>SỐ ĐIỆN THOẠI</p>
            <p style={styles.data1}>ĐỊA CHỈ</p>
          </div>
          <div style={styles.dataView}>
          {listUser.map((item) => (
            <div
              style={styles.dataTable}
            >
              <div style={styles.data1}>{item.userID}</div>
              <div style={styles.data1}>{item.email}</div>
              <div style={styles.data1}>{item.name}</div>
              <div style={styles.data1}>{item.phoneNumber}</div>
              <div style={styles.data1}>{item.address}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ marginLeft: 100 }}>Danh sách đơn hàng</h1>
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <p style={styles.data1}>MÃ ĐƠN HÀNG</p>
            
            <p style={styles.data1}>MÃ KHÁCH HÀNG</p>
            <p style={styles.data1}>NGÀY ĐẶT HÀNG</p>
            <p style={styles.data1}>NGÀY CHUYỂN HÀNG </p>
            <p style={styles.data1}>TÌNH TRẠNG</p>
          </div>
          <div style={styles.dataView}>
          {listOrder.map((item) => (
            <div
              style={styles.dataTable}
            >

              <div style={styles.data1}>{item.orderID}</div>
          
              <div style={styles.data1}>{item.userID}</div>
              <div style={styles.data1}>{item.orderDate}</div>
              <div style={styles.data1}>{item.shippedDate}</div>
              <div style={styles.data1}>{item.status}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <button style={styles.button1} onClick={returnMyPage}>Quay lại</button>
    </div>
  );

}



const styles = {
  dataView:{
    overflow: "auto",
    height:500
  },
  page: {
    display: "block",
    position: "relative",
    width: "1440px",
    margin: "auto",
    backgroundSize: "cover",
  },
  table: {
    width: 1300,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#E0DEDE",
    textAlign: "center",
    marginTop: 20,
    
  },
  tableHeader: {
    borderBottom: 1,
    borderBottomStyle: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    flex: 1,

  },
  dataTable: {
    
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    justifyContent: "center",
    
    
  },
  data: {
    paddingLeft: 10,
    justifyContent: "center",
    width: "25%",
  },
  data1: {
    paddingLeft: 10,
    justifyContent: "center",
    width: "20%",
  },
  data2: {
    paddingLeft: 10,
    justifyContent: "center",
    width: 215,
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    fontWeight: "bold",
    marginLeft: 100,
    fontSize: 24,
    borderBottom: 2,
    borderStyle: "solid",
    marginBottom: 10,
  },
  unbutton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    fontWeight: "normal",
    marginLeft: 10,
    fontSize: 24,
  },
  button1: {
    width: 150,
    marginLeft: 650,
    marginTop: 25,
    marginBottom: 50,
    borderRadius: 50,
    backgroundColor: "black",
    height: 50,
    color: "white",
    fontSize: 20,
  },
};
export default Manager;
