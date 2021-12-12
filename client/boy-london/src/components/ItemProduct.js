import React from "react";
import "./css/itemProduct.css";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../navigation/routes";

const ItemProduct = (props) => {
  const { image, name, price, onPress, idProduct } = props;

  return (
    <Link
      className="productView"
      to={{
        pathname: SHOP_ROUTE.productDetail,
        state: {
          idProduct,
        },
      }}
      onClick={onPress}
    >
      <div className="imageBox">
        <img className="image" src={image} />
      </div>
      <div className="nameBox">
        <p className="nameProduct">{name}</p>
        <p className="priceText">{price}</p>
      </div>
    </Link>
  );
};

export default ItemProduct;
