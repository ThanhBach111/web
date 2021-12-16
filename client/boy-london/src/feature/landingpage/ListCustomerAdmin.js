import React from "react";
import Images from "../../assets/images";
import { useEffect, useState } from "react";
import request from "../../api/request";
import Toastify from "../../utilities/useToastify";

const ListCustomerAdmin = () => {
  const onBlockCustomer = async (id) => {
    try {
      const res = await request.put(`/ban-acc/${id}`);
      const res1 = await request.get("/get-userlist");
      setListCustomerAdmin(res1);
    } catch (err) {
      Toastify.error(err);
    }
  };

  const unBlock = async (id) => {
    try {
      const res = await request.put(`/free-acc/${id}`);
      const res1 = await request.get("/get-userlist");
      setListCustomerAdmin(res1);
    } catch (err) {
      Toastify.error(err);
    }
  };

  const [listCustomerAdmin, setListCustomerAdmin] = useState([]);

  const getData = async () => {
    try {
      const res1 = await request.get("/get-userlist");
      setListCustomerAdmin(res1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const checkBanAcc = (isActive, id) => {
    if (isActive == 1) {
      return (
        <button
          style={styles.buttonBox}
          className="cursorpointer"
          onClick={() => onBlockCustomer(id)}
        >
          <img src={Images.block} style={{ width: 20 }} />
        </button>
      );
    } else {
      return (
        <button
          style={styles.buttonBox}
          className="cursorpointer"
          onClick={() => unBlock(id)}
        >
          <img src={Images.check} style={{ width: 20 }} />
        </button>
      );
    }
  };

  return (
    <div style={styles.container}>
      <h2>Danh sách khách hàng</h2>

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

        {listCustomerAdmin.map((item) => (
          <div style={styles.dataTable}>
            <div style={styles.tableElement}>
              <p>{item.userID}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.email}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.name}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.phoneNumber}</p>
            </div>
            <div style={styles.tableElement}>
              <p>{item.address}</p>
            </div>
            <div style={styles.tableElement}>
              {checkBanAcc(item.isActive, item.userID)}
            </div>
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
