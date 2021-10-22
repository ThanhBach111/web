import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ListProduct from "../feature/product/ListProduct";
import { ROOT_SCREEN } from "./routes";

const RootScreen = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ListProduct} />
        <Route path={ROOT_SCREEN.shop} component={ListProduct} />
        <Route path={ROOT_SCREEN.explore} component={ListProduct} />
        <Route path={ROOT_SCREEN.aboutUs} component={ListProduct} />
      </Switch>
    </div>
  );
};

export default RootScreen;
