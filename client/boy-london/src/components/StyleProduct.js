import React from "react";
import "./css/styleProduct.css";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../navigation/routes";

const StyleProduct = (props) => {
  const { image, name, price, onPress } = props;

  return (
    <Link
      className="productView"
      to={{
        pathname: SHOP_ROUTE.productDetail,
        state: {
          idProduct: 1000,
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

export default StyleProduct;
