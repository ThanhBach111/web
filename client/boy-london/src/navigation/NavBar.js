import React from "react";
import { NavLink } from "react-router-dom";
import Images from "../assets/images";
import "./css/NavBar.css";
import { Nav, NavMenu } from "./NavbarElement";
import { ROOT_SCREEN, SHOP_ROUTE, USER_ROUTE } from "./routes";

const NavBar = () => {
  const onNavigateAuthentication = () => {
    window.location.href = ROOT_SCREEN.mypage;
  };

  const onInstruction = () => {
    window.location.href = USER_ROUTE.instruction;
  };

  const onCart = () => {
    window.location.href = SHOP_ROUTE.cartPayment;
  };

  const openSearch = () => {
    window.location.href = ROOT_SCREEN.search;
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Images.logo} height="77" weight="102" alt="logo" />
        </NavLink>

        <NavMenu>
          <NavLink
            className="navBarLink cursorPointer"
            to={ROOT_SCREEN.shop}
            activeStyle
          >
            <b className="scaleText" style={styles.textNavBar}>
              SHOP
            </b>
          </NavLink>
          <NavLink
            className="navBarLink cursorPointer"
            to={ROOT_SCREEN.explore}
            activeStyle
          >
            <b className="scaleText" style={styles.textNavBar}>
              EXPLORE
            </b>
          </NavLink>
          <NavLink
            className="navBarLink cursorPointer"
            to={USER_ROUTE.policyInstruc}
            activeStyle
          >
            <b className="scaleText" style={styles.textNavBar}>
              ABOUT US
            </b>
          </NavLink>
        </NavMenu>

        <div style={styles.iconOptionView}>
          <button
            style={styles.iconNavMenu}
            className="cursorPointer hoverScale"
          >
            <img src={Images.search} width={20} onClick={openSearch} />
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
      </Nav>
    </>
  );
};

const styles = {
  iconNavMenu: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  iconOptionView: {
    position: "absolute",
    top: 30,
    right: 100,
    width: 160,
    display: "flex",
    justifyContent: "space-between",
  },
  textNavBar: {
    marginLeft: 30,
    marginRight: 30,
  },
};

export default NavBar;
