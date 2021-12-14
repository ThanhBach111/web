import Cookies from "js-cookie";
import React from "react";
import { ROLE_USER } from "../assets/enums";
import Images from "../assets/images";

import { ROOT_SCREEN, SHOP_ROUTE, USER_ROUTE } from "./routes";

const NavBar = () => {
  const isUser = Cookies.get("role") === ROLE_USER.user;

  const onNavigateAuthentication = () => {
    window.location.href = ROOT_SCREEN.mypage;
  };

  const onNavigateRoot = () => {
    window.location.href = ROOT_SCREEN.root;
  };

  const onNavigateShop = () => {
    window.location.href = ROOT_SCREEN.shop;
  };
  const onNavigateExplore = () => {
    window.location.href = ROOT_SCREEN.explore;
  };
  const onNavigateAboutUs = () => {
    window.location.href = USER_ROUTE.policyInstruc;
  };

  const onNavigateSearch = () => {
    window.location.href = ROOT_SCREEN.search;
  };

  const onCart = () => {
    window.location.href = SHOP_ROUTE.cartPayment;
  };

  return (
    <div style={styles.container}>
      <button style={styles.logoView} onClick={onNavigateRoot}>
        <img src={Images.logo} height="77" weight="102" alt="logo" />
      </button>

      {isUser && (
        <div style={styles.elementChoiceView}>
          <div style={styles.elementChoiceBox}>
            <button onClick={onNavigateShop}>
              <b className="scaleText cursorPointer" style={styles.textNavBar}>
                SHOP
              </b>
            </button>
          </div>

          <div style={styles.elementChoiceBox}>
            <button onClick={onNavigateExplore}>
              <b className="scaleText cursorPointer" style={styles.textNavBar}>
                EXPLORE
              </b>
            </button>
          </div>

          <div style={styles.elementChoiceBox}>
            <button onClick={onNavigateAboutUs}>
              <b className="scaleText cursorPointer" style={styles.textNavBar}>
                ABOUT US
              </b>
            </button>
          </div>
        </div>
      )}

      {isUser && (
        <div style={styles.iconOptionView}>
          <button
            style={styles.iconNavMenu}
            className="cursorPointer hoverScale"
          >
            <img src={Images.search} width={20} onClick={onNavigateSearch} />
          </button>

          <button
            style={styles.iconNavMenu}
            onClick={onNavigateAuthentication}
            className="cursorPointer hoverScale"
          >
            <img src={Images.user} width={22} />
          </button>

          <button
            style={styles.iconNavMenu}
            className="cursorPointer hoverScale"
          >
            <img src={Images.shoppingCart} width={20} onClick={onCart} />
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    boxShadow: "3px 4px 5px rgba(0,0,0,0.2)",
    marginBottom: 20,
  },
  logoView: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: 170,
  },
  iconNavMenu: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  iconOptionView: {
    top: 30,
    right: 100,
    width: 160,
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 200,
  },
  textNavBar: {
    marginLeft: 30,
    marginRight: 30,
  },
  elementChoiceView: {
    width: 550,
    height: "100%",
    marginLeft: 250,
    display: "flex",
    flexDirection: "row",
  },
  elementChoiceBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default NavBar;
