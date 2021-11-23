import React from "react";
import "./css/itemOption.css";

const ItemOption = (props) => {
  const { title, onPress, isSelected } = props;
  const backgroundColor = isSelected ? "gray" : "transparent";

  return (
    <div className="itemOptionTouch">
      <div className="titleTouch">
        <p>{title}</p>
      </div>
      <div className="buttonTickTouch">
        <button
          className="buttonTick"
          onClick={onPress}
          style={{ backgroundColor }}
        >
          {isSelected && <p className="textChooseX">x</p>}
        </button>
      </div>
    </div>
  );
};

export default ItemOption;
