import React from "react";
import { NavLink } from "react-router-dom";
import { Bars, Nav, NavMenu, NavIcon, NavIconUser, NavIconCart } from "./NavbarElement";
import { ROOT_SCREEN } from "./routes";
import "./css/NavBar.css";



function NavBar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="/logo.jpeg"
              height="77"
              weight="102"
              alt="logo"
            />
        </NavLink>
        <NavMenu>
          <NavLink className="navBarLink" to={ROOT_SCREEN.shop} activeStyle>
          Shop
          </NavLink>
          <NavLink className="navBarLink" to={ROOT_SCREEN.explore} activeStyle>
            Explore 
          </NavLink>
          <NavLink className="navBarLink" to={ROOT_SCREEN.aboutUs} activeStyle>
            About us
          </NavLink>
        </NavMenu>
        <p>
        <NavIconUser />
        <NavIconCart />
        </p>
      </Nav>
    </>
  );
}

export default NavBar;
