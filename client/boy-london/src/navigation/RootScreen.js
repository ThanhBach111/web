import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import ListProduct from "../feature/product/ListProduct";
import { ROOT_SCREEN } from "./routes";
import register from "../feature/user/register";

const RootScreen = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ListProduct} />
        <Route path={ROOT_SCREEN.shop} component={ListProduct} />
        <Route path={ROOT_SCREEN.explore} component={ListProduct} />
        <Route path={ROOT_SCREEN.aboutUs} component={register} />
        <Route path={ROOT_SCREEN.register} component={register} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootScreen;
