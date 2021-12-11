import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetProductDetail } from "../../api/modules";
import { SHOP_ROUTE } from "../../navigation/routes";
import "./index.css";

const fakeData = {
  productID: 1,
  image1:
    "https://storage.googleapis.com/cdn.nhanh.vn/store/29193/ps/20211204/21ST_URBAN_Floral_Wool_Overshirt_23.jpg",
  category: "Top",
  price: 200000,
  name: "Áo Armor",
  description: null,
  image2:
    "https://storage.googleapis.com/cdn.nhanh.vn/store/29193/ps/20211204/21ST_URBAN_Floral_Wool_Overshirt_35.jpg",
  quantityInStock: 100,
};

const ProductDetail = ({ location }) => {
  const { idProduct } = location.state;

  const [productDetail, setProductDetail] = useState();
  const [numberOrders, setNumberOrders] = useState(1);

  const { userInfo } = useSelector((state) => state.accountSlice);

  const status = productDetail?.quantityInStock ? "Còn hàng" : "Hết hàng";

  const getData = async () => {
    try {
      const res = await apiGetProductDetail(idProduct);
      setProductDetail(res);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onDesOrIncNumberOrders = (numberAdd) => {
    const temp = numberOrders + numberAdd;
    if (temp < 1) return;
    setNumberOrders(temp);
  };

  const onAddToCart = () => {
    window.location.href = SHOP_ROUTE.cartPayment;
  };

  const onDeleteProduct = () => {
    console.log("delete product");
  };

  return (
    <div style={styles.container}>
      <div style={styles.imagesView}>
        <img src={productDetail?.image1} style={styles.image} />
        <img src={productDetail?.image2} style={styles.image} />
      </div>

      <div style={styles.priceOrderView}>
        <div>
          <p>{productDetail?.name}</p>
          <p>{productDetail?.price}</p>

          <div style={styles.lineDivide}></div>

          <table style={{ margin: "auto", marginTop: 17 }}>
            <tr>
              <td
                className="buttonDesIncNumberOrder"
                style={styles.buttonDesIncNumberOrder}
                onClick={() => onDesOrIncNumberOrders(-1)}
              >
                -
              </td>
              <td style={styles.buttonDesIncNumberOrder}>{numberOrders}</td>
              <td
                className="buttonDesIncNumberOrder"
                style={styles.buttonDesIncNumberOrder}
                onClick={() => onDesOrIncNumberOrders(1)}
              >
                +
              </td>
            </tr>
          </table>

          <div style={styles.lineDivide}></div>

          <button
            style={styles.buttonBox}
            onClick={onAddToCart}
            className="buttonAddToCart"
          >
            <p style={{ color: "white" }}>ADD TO CART</p>
          </button>

          <p style={{ marginTop: 40 }}>Trạng thái: {status}</p>
          <button style={{ backgroundColor: "transparent", borderWidth: 0 }}>
            <p style={styles.textEditProduct}>Edit product</p>
          </button>

          <button style={styles.buttonDeleteBox} onClick={onDeleteProduct}>
            <p style={{ color: "white" }}>Delete product</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  imagesView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  image: {
    width: "48%",
    marginBottom: 30,
  },
  priceOrderView: {
    flex: 0.8,
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
  lineDivide: {
    width: "100%",
    display: "flex",
    alignSelf: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    marginTop: 20,
  },
  buttonBox: {
    width: 300,
    height: 45,
    backgroundColor: "black",
    display: "flex",
    margin: "auto",
    marginTop: 35,
    borderWidth: 0,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDeleteBox: {
    width: 170,
    height: 35,
    backgroundColor: "#FF0000",
    display: "flex",
    marginLeft: 100,
    marginTop: 70,
    borderWidth: 0,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textEditProduct: {
    textDecoration: "underline",
    marginTop: 15,
    fontStyle: "italic",
    color: "#F00000",
  },
  buttonDesIncNumberOrder: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    width: 40,
    height: 40,
    marginTop: 17,
    textAlign: "center",
  },
};

export default ProductDetail;
