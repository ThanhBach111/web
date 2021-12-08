import React, { Component } from "react";

class Tracking extends Component {

    constructor(props) {
        super(props) 
        this.state = { 
           costumer: [
              {productid: "tdung352009", date: '12/5/2021', name: "Nguyễn Tùng Dương", address: "12, Q.Linh Đàm, Hà Nội", sum:"12,290,000 VND", status:"Shipping" },
              {productid: "tdung352009", date: '12/5/2021', name: "Nguyễn Tùng Dương", address: "12, Q.Linh Đàm, Hà Nội", sum:"12,290,000 VND", status:"Shipping" },
              {productid: "tdung352009", date: '12/5/2021', name: "Nguyễn Tùng Dương", address: "12, Q.Linh Đàm, Hà Nội", sum:"12,290,000 VND", status:"Shipped" },
              {productid: "tdung352009", date: '12/5/2021', name: "Nguyễn Tùng Dương", address: "12, Q.Linh Đàm, Hà Nội", sum:"12,290,000 VND", status:"Shipping" },
              {productid: "tdung352009", date: '12/5/2021', name: "Nguyễn Tùng Dương", address: "12, Q.Linh Đàm, Hà Nội", sum:"12,290,000 VND", status:"Shipped" },
              {productid: "tdung352009", date: '12/5/2021', name: "Nguyễn Tùng Dương", address: "12, Q.Linh Đàm, Hà Nội", sum:"12,290,000 VND", status:"Shipped" },
              {productid: "tdung352009", date: '12/5/2021', name: "Nguyễn Tùng Dương", address: "12, Q.Linh Đàm, Hà Nội", sum:"12,290,000 VND", status:"Shipping" },
           ]
        }
     }

     renderTableData() {
        return this.state.costumer.map((costumer, index) => {
           const { id, productid, date, name, address, sum, status } = costumer
           return (
              <tr key={id}>
                 <td>{productid}</td>
                 <td>{date}</td>
                 <td>{name}</td>
                 <td>{address}</td>
                 <td>{sum}</td>
                 <td>{status}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.costumer[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render () {
        return (
        <div>
        <h1 style={styles.banner}>Danh sách đơn hàng</h1>
        <button style={styles.button}>Toàn bộ trạng thái</button>
        <button style={styles.unbutton}>Đang giao</button>
        <button style={styles.unbutton}> Đã nhận</button>
        <table id='costumer' style={styles.table}>
            <tbody>
                <tr style={styles.tableHeader}>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
            </tbody>
        </table>
        </div>
        )
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
        borderBottom: 10,
        borderBottomStyle: "solid",
        borderColor: "black",
    },
    banner: {
        marginLeft: 100,
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
    }
}

export default Tracking;