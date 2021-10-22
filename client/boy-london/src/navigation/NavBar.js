import React from "react";
import { NavLink } from "react-router-dom";
import { Bars, Nav, NavMenu } from "./NavbarElement";
import { ROOT_SCREEN } from "./routes";

function NavBar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink to={ROOT_SCREEN.shop} activeStyle>
            Shop
          </NavLink>
          <NavLink to={ROOT_SCREEN.explore} activeStyle>
            Explore
          </NavLink>
          <NavLink to={ROOT_SCREEN.aboutUs} activeStyle>
            About us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default NavBar;
