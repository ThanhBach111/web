import { React, Component } from "react";
import Images from "../../assets/images";

const fakeDate = [
  {
    id: 1,
    username: "ducdat",
    customerName: "Duc Dat Pham",
    phoneNumber: "091247882312",
    totalMoney: "12,290,000 VND",
  },
  {
    id: 2,
    username: "tdung352009",
    customerName: "Nguyễn Tùng Dương",
    phoneNumber: "091247882312",
    totalMoney: "7,003,003 VND",
  },
];

const orderData = [
  {
    id: 1,
    orderid: "tdung352009",
    date: "12/5/2021",
    username: "Nguyễn Tùng Dương",
    address: "12, Q.Linh Đàm, Hà Nội",
    orderMoney: "12,290,000 VND",
    status: "Đang giao",
  },
  {
    id: 2,
    orderid: "tdung352009",
    date: "12/5/2021",
    username: "Nguyễn Tùng Dương",
    address: "12, Q.Linh Đàm, Hà Nội",
    orderMoney: "12,290,000 VND",
    status: "Đang giao",
  },
  {
    id: 3,
    orderid: "tdung352009",
    date: "12/5/2021",
    username: "Nguyễn Tùng Dương",
    address: "12, Q.Linh Đàm, Hà Nội",
    orderMoney: "12,290,000 VND",
    status: "Đang giao",
  }

];

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costumer: [
        {
          accountid: "tdung352009",
          name: "Nguyễn Tùng Dương",
          phone: "091247882312",
          sum: "12,290,000 VND",
        },
        {
          accountid: "ndd34104",
          name: "Phạm Đức Đạt",
          phone: "09214871242",
          sum: "7,003,003 VND",
        },
      ],
    };
  }

  renderTableData() {
    return this.state.costumer.map((student, index) => {
      const { id, accountid, name, phone, sum } = student;
      return (
        <tr key={id}>
          <td>{accountid}</td>
          <td>{name}</td>
          <td>{phone}</td>
          <td>{sum}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.costumer[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    // return (
    //   <div>
    //     <h1 style={styles.banner}>Danh sách khách hàng</h1>
    //     <table id="costumer" style={styles.table}>
    //       <tbody>
    //         <tr style={styles.tableHeader}>{this.renderTableHeader()}</tr>
    //         {this.renderTableData()}
    //       </tbody>
    //     </table>
    //     <h1 style={styles.banner}>Thêm sản phẩm</h1>
    //     <h3 style={styles.smallBanner}> CATEGORY</h3>
    //     <form style={styles.form}>
    //       <ul style={styles.listCheck}>
    //         <li>
    //           <label style={styles.label}>
    //             Top
    //             <input type="checkbox" style={styles.checkBox} />
    //           </label>
    //         </li>
    //         <li>
    //           <label style={styles.label}>
    //             Pants
    //             <input type="checkbox" style={styles.checkBox} />
    //           </label>
    //         </li>
    //         <li>
    //           <label style={styles.label}>
    //             Sweater
    //             <input type="checkbox" style={styles.checkBox} />
    //           </label>
    //         </li>
    //         <li>
    //           <label style={styles.label}>
    //             Hoodies
    //             <input type="checkbox" style={styles.checkBox} />
    //           </label>
    //         </li>
    //       </ul>
    //       <div style={{ display: "inline" }}>
    //         <button style={styles.addButton}>
    //           <img src={Images.addP} width="141" height="141" />
    //         </button>

    //         <input
    //           style={styles.listInput}
    //           type="text"
    //           name="name"
    //           placeholder="Tên sản phẩm"
    //         />

    //         <input
    //           style={styles.listInput}
    //           type="text"
    //           name="price"
    //           placeholder="Giá sản phẩm"
    //         />

    //         <input type="submit" value="THÊM SẢN PHẨM" style={styles.submit} />
    //       </div>
    //     </form>
    //   </div>
    // );
    return (
      
    <div>
     <div>
       <h1 style={{marginLeft:100}}>
          Danh sách khách hàng
        </h1>
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <p>TÊN ĐĂNG NHẬP</p>
          <p>TÊN KHÁCH HÀNG</p>
          <p>SỐ ĐIỆN THOẠI</p>
          <p>TỔNG TIỀN</p>
        </div>
        {fakeDate.map((item) => (
          <div
            style={styles.dataTable}
          >
            <div style={styles.data}>{item.username}</div>
            <div  style={styles.data}>{item.customerName}</div>
            <div  style={styles.data}>{item.phoneNumber}</div>
            <div  style={styles.data}>{item.totalMoney}</div>
          </div>
        ))}
        </div>
        </div>
        <div>
        <h1 style={{marginLeft:100}}>Danh sách đơn hàng</h1>
        <button style={styles.button}>Toàn bộ trạng thái</button>
        <button style={styles.unbutton}>Đang giao</button>
        <button style={styles.unbutton}> Đã nhận</button>
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <p>Mã đơn hàng</p>
          <p>Ngày</p>
          <p>Tên khách hàng</p>
          <p>Địa chỉ</p>
          <p>Tổng tiền</p>
          <p>Tình trạng</p>
        </div>
        {fakeDate.map((item) => (
          <div
            style={styles.dataTable}
          >
      
            <div  style={styles.data}>{item.orderid}</div>
            <div  style={styles.data}>{item.date}</div>
            <div  style={styles.data}>{item.username}</div>
            <div  style={styles.data}>{item.address}</div>
            <div  style={styles.data}>{item.orderMoney}</div>
            <div  style={styles.data}>{item.status}</div>
          </div>
        ))}
        </div>
        </div>
      </div>
    );
  }
}



const styles = {
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
    paddingLeft:10,
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
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    fontWeight:"bold",
    marginLeft: 100,
    fontSize: 24,
    borderBottom: 2,
    borderStyle: "solid",
    marginBottom: 10,
},
  unbutton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    fontWeight:"normal",
    marginLeft: 10,
    fontSize: 24,
},
};
export default Manager;
