import React, { useEffect, useState } from "react";
import request from "../../api/request";

const ListOrderAdmin = () => {
  const [listOrderAdmin, setListOrderAdmin] = useState([]);
  const getData = async () => {
    try {
      const res2 = await request.get("/get-orderlist");
      setListOrderAdmin(res2);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const setStatus = async (ID) => {
    try {
      await request.put(`/update-order/${ID}`);
      const res2 = await request.get("/get-orderlist");
      setListOrderAdmin(res2);
    } catch (err) {
      console.log(err);
    }
  };

  const checkStatus = (status, orderID) => {
    if (status == "Shipped") {
      return <div style={{ color: "#05F000", ...styles.data }}>{status}</div>;
    }
    return (
      <div style={{ color: "#C7CA2F", ...styles.data }}>
        <button onClick={() => setStatus(orderID)}>{status}</button>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h2>Danh sách đơn hàng</h2>

      <div style={styles.tableView}>
        <div style={styles.tableHeader}>
          <div style={styles.tableElement}>
            <p>Mã đơn hàng</p>
          </div>
          <div style={styles.tableElement}>
            <p>Mã khách hàng</p>
          </div>
          <div style={styles.tableElement}>
            <p>Ngày đặt hàng</p>
          </div>
          <div style={styles.tableElement}>
            <p>Ngày chuyển hàng</p>
          </div>
          <div style={styles.tableElement}>
            <p>Tình Trạng</p>
          </div>
        </div>

        {listOrderAdmin.map((item) => (
          <div style={styles.dataTable}>
            <div style={styles.data}>
              <p>{item.orderID}</p>
            </div>
            <div style={styles.data}>
              <p>{item.userID}</p>
            </div>
            <div style={styles.data}>
              <p>{item.orderDate}</p>
            </div>
            <div style={styles.data}>
              <p>{item.shippedDate}</p>
            </div>
            {checkStatus(item.status, item.orderID)}
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
  data: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    color: "#2E6BC6",
    paddingLeft: 20,
  },
};

export default ListOrderAdmin;
