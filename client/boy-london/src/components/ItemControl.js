import React from "react";

const ItemControl = ({ icon, title, onPress, isSelected }) => {
  const backgroundColor = isSelected ? "#2E6BC6" : "white";

  return (
    <button
      style={{
        ...styles.container,
        backgroundColor,
      }}
      className="cursorPointer"
      onClick={onPress}
    >
      <img src={icon} style={styles.icon} />
      <p>{title}</p>
    </button>
  );
};

const styles = {
  container: {
    width: 70,
    height: 70,
    boxShadow: "3px 4px 5px rgba(0,0,0,0.2)",
    marginTop: 30,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: "auto",
    marginBottom: 10,
  },
};

export default ItemControl;
