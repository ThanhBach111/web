import React from "react";
import "./css/styleinput.css";

const StyleInput = (props) => {
  const { image, name} = props;
  return (
        <input style={{backgroundImage:  "url("+image+")"}} type="text"  placeholder={name}></input>
  );
};

export default StyleInput;
