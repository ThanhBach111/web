import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartPayment from "../feature/product/CartPayment";
import ListProduct from "../feature/product/ListProduct";
import ProductDetail from "../feature/product/ProductDetail";
import NavBar from "./NavBar";
import { ROOT_SCREEN, SHOP_ROUTE } from "./routes";

const RootScreen = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ListProduct} />
        <Route path={ROOT_SCREEN.shop} component={ListProduct} />
        <Route path={ROOT_SCREEN.explore} component={ListProduct} />
        <Route path={SHOP_ROUTE.productDetail} component={ProductDetail} />
        <Route path={SHOP_ROUTE.cartPayment} component={CartPayment} />
        {/* <Route path={ROOT_SCREEN.aboutUs} component={register} />
        <Route path={ROOT_SCREEN.register} component={register} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default RootScreen;
