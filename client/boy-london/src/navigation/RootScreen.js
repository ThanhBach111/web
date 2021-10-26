import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import ListProduct from "../feature/product/ListProduct";
import { ROOT_SCREEN } from "./routes";

const RootScreen = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ListProduct} />
        <Route path={ROOT_SCREEN.shop} component={ListProduct} />
        <Route path={ROOT_SCREEN.explore} component={ListProduct} />
        <Route path={ROOT_SCREEN.aboutUs} component={ListProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootScreen;
