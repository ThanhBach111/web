import React from "react";
import { Link } from "react-router-dom";
import { SHOP_ROUTE, ADMIN_ROUTE } from "../navigation/routes";
import { formatMoney } from "../utilities/format";

const ItemAdmin = (props) => {
  const { image, name, price, onPress, idProduct } = props;

  return (
    <Link
      className="cursorPointer"
      to={{
        pathname: ADMIN_ROUTE.changeProduct,
        state: {
          idProduct: idProduct ,
        },
      }}
      onClick={onPress}
      style={styles.productView}
    >
      <div style={styles.imageView}>
        <img src={image} style={styles.image} className="hoverAnimation" />
      </div>
      <div style={styles.nameView}>
        <p style={styles.textNameProduct}>{name}</p>
        <p style={styles.textPrice}>{formatMoney(price)}</p>
      </div>
    </Link>
  );
};

const styles = {
  productView: {
    width: 220,
    height: 300,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    textDecoration: "none",
    marginBottom: 20,
  },
  imageView: {
    width: "100%",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  nameView: {
    width: "100%",
    height: "10%",
    textAlign: "center",
  },
  textNameProduct: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  textPrice: {
    fontSize: 13,
    color: "black",
  },
};

export default ItemAdmin;
