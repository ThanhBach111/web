import { React, Component } from "react";
import Images from "../../assets/images";

const fakeDate = [
  {
    id: 1,
    username: "ducdat",
    customerName: "Duc Dat Pham",
    phoneNumber: "23423423",
    totalMoney: "23422",
  },
  {
    id: 2,
    username: "ducdat02",
    customerName: "Duc Dat Pham 02",
    phoneNumber: "23423423",
    totalMoney: "23422",
  },
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
      <div
        style={{
          width: 1000,
          height: "auto",
          backgroundColor: "red",
          padding: 10,
        }}
      >
        {/* title */}
        <div
          style={{
            width: "100%",
            backgroundColor: "lightblue",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <p>Ten dang nhap</p>
          <p>Ten khach hang</p>
          <p>so dien thoai</p>
          <p>Tong tien</p>
        </div>

        {/* data */}
        {fakeDate.map((item) => (
          <div
            style={{
              width: "100%",
              backgroundColor: "lightblue",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <p>{item.username}</p>
            <p>{item.customerName}</p>
            <p>{item.phoneNumber}</p>
            <p>{item.totalMoney}</p>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  table: {
    width: 1200,
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
  },
  banner: {
    marginLeft: 100,
  },
  checkBox: {
    marginRight: 0,
    width: 60,
  },
  submit: {
    marginTop: 0,
    backgroundColor: "black",
    color: "white",
    borderRadius: 25,
    width: 183,
    marginLeft: 750,
    height: 49,
  },
  label: {
    marginRight: 0,
    marginTop: 0,
  },
  listInput: {
    marginLeft: 10,
    width: 280,
    listStyle: "none",

    borderRadius: 15,
    borderStyle: "solid",
    height: 45,
    padding: 10,
  },
  form: {
    marginLeft: 100,
  },
  smallBanner: {
    marginLeft: 100,
    fontWeight: "lighter",
  },
  listCheck: {
    marginLeft: 20,
    width: 200,
    listStyle: "none",
    marginTop: 16,
  },
  liDelete: {
    listStyle: "none",
  },
  addButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
};
export default Manager;
