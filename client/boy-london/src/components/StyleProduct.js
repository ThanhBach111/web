import React from "react";
import "./css/styleProduct.css";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../navigation/routes";

const StyleProduct = (props) => {
  const { image, name, price,ID, onPress } = props;

  return (
    <Link
      className="productViewLP"
      to={{
        pathname: SHOP_ROUTE.productDetail,
        state: {
          idProduct: ID,
        },
      }}
      onClick={onPress}
    >
      <div className="imageBoxLP">
        <img className="imageLP" src={image} />
      </div>
      <div className="nameBoxLP">
        <p className="nameProductLP">{name}</p>
        <p className="priceTextLP">{price}</p>
      </div>
    </Link>
  );
};

export default StyleProduct;
