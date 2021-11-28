import React from "react";
import { NavLink } from "react-router-dom";
import Images from "../assets/images";
import "./css/NavBar.css";
import { Nav, NavMenu } from "./NavbarElement";
import { ROOT_SCREEN, USER_ROUTE } from "./routes";

function NavBar() {
  const onNavigateAuthentication = () => {
    window.location.href = ROOT_SCREEN.login;
  };
  const onInstruction = () => {
    window.location.href = USER_ROUTE.instruction;
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Images.logo} height="77" weight="102" alt="logo" />
        </NavLink>

        <NavMenu>
          <NavLink className="navBarLink" to={ROOT_SCREEN.shop} activeStyle>
            SHOP
          </NavLink>
          <NavLink className="navBarLink" to={ROOT_SCREEN.explore} activeStyle>
            EXPLORE
          </NavLink>
          <NavLink className="navBarLink" to={USER_ROUTE.policyInstruc} activeStyle>
            ABOUT US
          </NavLink>
        </NavMenu>

        <div style={styles.iconOptionView}>
          <button style={styles.iconNavMenu}>
            <img src={Images.search} width={20} />
          </button>

          <button style={styles.iconNavMenu} onClick={onNavigateAuthentication}>
            <img src={Images.user} width={22} />
          </button>

          <button style={styles.iconNavMenu}>
            <img src={Images.shoppingCart} width={20} />
          </button>
        </div>
      </Nav>
    </>
  );
}

const styles = {
  iconNavMenu: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  iconOptionView: {
    position: "absolute",
    top: 0,
    right: 100,
    width: 160,
    display: "flex",
    justifyContent: "space-between",
  },
};

export default NavBar;
