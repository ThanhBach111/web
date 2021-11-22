import React from "react";
import "./css/itemOption.css";

const ItemOption = (props) => {
  const { title, onPress, isSelected } = props;

  return (
    <div className="itemOptionTouch">
      <div className="titleTouch">
        <p>{title}</p>
      </div>
      <div className="buttonTickTouch">
        <button className="buttonTick" onClick={onPress}></button>
      </div>
    </div>
  );
};

export default ItemOption;
