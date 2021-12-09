import { React, Component } from "react";
import Images from "../../assets/images";
import { USER_ROUTE } from "../../navigation/routes";
import { useEffect, useState } from "react";

const Manager = () => {
  const [listProduct, setListProduct] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [listOrder, setListOrder] = useState([]);
  const getData = async () => {
    try {
      const res = await request.get("/get-landing-page");
      setListProduct(res);
      const res1 = await request.get("/get-list-user");
      setListUser(res1);
      const res2 = await request.get("/get-list-order");
      setListOrder(res2);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
 const returnMyPage = () => {
   window.location.href = USER_ROUTE.myPage;
 }
  return (

    <div style={styles.page}>
      <div >
        <h1 style={{ marginLeft: 100 }}>
          Danh sách sản phẩm
        </h1>
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <p style={styles.data1}>MÃ SẢN PHẨM</p>
            <p style={styles.data1}>LOẠI SẢN PHẨM</p>
            <p style={styles.data1}>TÊN SẢN PHẨM</p>
            <p style={styles.data1}>GIÁ BÁN </p>
            <p style={styles.data1}>SỐ LƯỢNG TỒN KHO</p>
          </div>
          <div style={styles.dataView}>
          {listProduct.map((item) => (
            <div
              style={styles.dataTable}
            >
              <div style={styles.data1}>{item.productID}</div>
              <div style={styles.data1}>{item.category}</div>
              <div style={styles.data1}>{item.name}</div>
              <div style={styles.data1}>{item.price}</div>
              <div style={styles.data1}>{item.quantityInStock}</div>
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
            <p style={styles.data}>TÊN ĐĂNG NHẬP</p>
            <p style={styles.data}>TÊN KHÁCH HÀNG</p>
            <p style={styles.data}>SỐ ĐIỆN THOẠI</p>
            <p style={styles.data}>ĐỊA CHỈ</p>
          </div>
          <div style={styles.dataView}>
          {listUser.map((item) => (
            <div
              style={styles.dataTable}
            >
              <div style={styles.data}>{item.email}</div>
              <div style={styles.data}>{item.name}</div>
              <div style={styles.data}>{item.phoneNumber}</div>
              <div style={styles.data}>{item.address}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ marginLeft: 100 }}>Danh sách đơn hàng</h1>
        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <p style={styles.data2}>Mã đơn hàng</p>
            <p style={styles.data2}>Ngày</p>
            <p style={styles.data2}>Tên khách hàng</p>
            <p style={styles.data2}>Địa chỉ</p>
            <p style={styles.data2}>Tổng tiền</p>
            <p style={styles.data2}>Tình trạng</p>
          </div>
          <div style={styles.dataView}>
          {listOrder.map((item) => (
            <div
              style={styles.dataTable}
            >

              <div style={styles.data2}>{item.orderid}</div>
              <div style={styles.data2}>{item.date}</div>
              <div style={styles.data2}>{item.username}</div>
              <div style={styles.data2}>{item.address}</div>
              <div style={styles.data2}>{item.orderMoney}</div>
              <div style={styles.data2}>{item.status}</div>
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
