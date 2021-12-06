import React from "react";
import "./css/styleinput.css";

const StyleInput = (props) => {
  const {
    icon,
    placeholder,
    value,
    setValue,
    type,
    containerStyle = {},
  } = props;

  return (
    <div style={{ ...styles.container, containerStyle }}>
      <img src={icon} style={{ width: 15, height: "auto", marginLeft: 15 }} />
      <input
        type={type || "text"}
        value={value}
        onChange={(evt) => setValue?.(evt.target.value)}
        style={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

const styles = {
  container: {
    width: 500,
    height: 55,
    borderRadius: 70,
    display: "flex",
    backgroundColor: "#DBDADA",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 0,
    backgroundColor: "transparent",
    outlineWidth: 0,
    padding: 10,
    outline: "none",
    borderWidth: 0,
    fontSize: 15,
  },
};

export default StyleInput;
