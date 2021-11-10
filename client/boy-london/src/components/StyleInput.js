import React from "react";
import "./css/styleinput.css";

const StyleInput = (props) => {
  const { image, name} = props;
  return (
      <div className="forminput">
        <img src={image} />
        <input type="text" placeholder={name}></input>
      </div>
  );
};

export default StyleInput;
