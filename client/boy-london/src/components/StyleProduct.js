import React from "react";
import "./css/styleProduct.css";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../navigation/routes";
import {formatMoney} from '../utilities/format'

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
      <div className="imageBoxLP hoverSmallScale">
        <img className="imageLP hoverAnimation" src={image} />
      </div>
      <div className="nameBoxLP">
        <p className="nameProductLP">{name}</p>
        <p className="priceTextLP">{formatMoney(price)}</p>
      </div>
    </Link>
  );
};

export default StyleProduct;
