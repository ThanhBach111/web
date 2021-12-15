import React, { useState } from "react";
import ItemControl from "../../components/ItemControl";
import Images from "../../assets/images";
import { TYPE_CONTROL } from "../../assets/enums";
import Cookies from "js-cookie";
import ListCustomerAdmin from "./ListCustomerAdmin";
import ListOrderAdmin from "./ListOrderAdmin";
import { ROOT_SCREEN } from "../../navigation/routes";

const ControlFrame = () => {
  const [controlSelected, setControlSelected] = useState(TYPE_CONTROL.product);

  const onLogOut = () => {
    try {
      Cookies.remove("token");
      window.location.href(ROOT_SCREEN.mypage);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div style={styles.container}>
      {/* control view */}
      <div style={styles.controlView}>
        <ItemControl
          icon={Images.database}
          title="DSSP"
          isSelected={controlSelected === TYPE_CONTROL.product}
          onPress={() => setControlSelected(TYPE_CONTROL.product)}
        />
        <ItemControl
          icon={Images.customer}
          title="DSSP"
          isSelected={controlSelected === TYPE_CONTROL.customer}
          onPress={() => setControlSelected(TYPE_CONTROL.customer)}
        />
        <ItemControl
          icon={Images.truck}
          title="DSSP"
          isSelected={controlSelected === TYPE_CONTROL.order}
          onPress={() => setControlSelected(TYPE_CONTROL.order)}
        />

        <button
          style={{ marginTop: 80 }}
          onClick={onLogOut}
          className="cursorPointer"
        >
          <p style={{ fontWeight: "bold" }}>Đăng suất</p>
        </button>
      </div>

      {/* product view */}
      {controlSelected === TYPE_CONTROL.customer && <ListCustomerAdmin />}

      {controlSelected === TYPE_CONTROL.order && <ListOrderAdmin />}
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "lightgray",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 100,
    borderRadius: 15,
    margin: "auto",
  },
  controlView: {
    width: 100,
    height: 500,
    backgroundColor: "#F3F5F8",
    borderRadius: 10,
    marginRight: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default ControlFrame;
