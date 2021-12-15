import React from "react";
import Images from "../../assets/images";

const listCustomer = [
  {
    customerId: "1231312",
    username: "ducdatpham",
    customerName: "Duc Dat",
    phoneNumber: "4589349535",
    address: "56 Nguyen Chi Thanh",
  },
  {
    customerId: "1231312",
    username: "ducdatpham",
    customerName: "Duc Dat",
    phoneNumber: "4589349535",
    address: "56 Nguyen Chi Thanh",
  },
  {
    customerId: "1231312",
    username: "ducdatpham",
    customerName: "Duc Dat",
    phoneNumber: "4589349535",
    address: "56 Nguyen Chi Thanh",
  },
];

const ListCustomerAdmin = () => {
  const onBlockCustomer = () => {
    try {
      console.log(err);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Danh sách sản phẩm</h2>

      <div style={styles.tableView}>
        <div style={styles.tableHeader}>
          <div style={styles.tableElement}>
            <p>Mã khách hàng</p>
          </div>
          <div style={styles.tableElement}>
            <p>Tên đăng nhập</p>
          </div>
          <div style={styles.tableElement}>
            <p>Tên khách hàng</p>
          </div>
          <div style={styles.tableElement}>
            <p>Số điện thoại</p>
          </div>
          <div style={styles.tableElement}>
            <p>Địa chỉ</p>
          </div>
        </div>

        {listCustomer.map((item) => (
          <div style={styles.dataTable}>
            <div style={styles.tableElement}>
              <p>{item.customerId}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.username}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.customerName}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.phoneNumber}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.address}</p>
            </div>
            <button
              style={styles.buttonBox}
              className="cursorpointer"
              onClick={onBlockCustomer}
            >
              <img src={Images.trash} style={{ width: 50 }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 70,
    paddingRight: 140,
    flexDirection: "column",
    borderRadius: 10,
  },
  tableView: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  tableHeader: {
    width: "100%",
    height: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    borderTop: "0.5px solid gray",
    borderBottom: "0.5px solid gray",
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  dataTable: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 35,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 13,
  },
  tableElement: {
    display: "flex",
    flex: 1,
  },
  buttonBox: {
    position: "absolute",
    right: 100,
  },
};

export default ListCustomerAdmin;
