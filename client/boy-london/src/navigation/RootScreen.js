import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../feature/landingpage/LandingPage";
import ChangeProduct from "../feature/manage/ChangeProduct";
import Manager from "../feature/manage/Manager";
import CheckRole from "../feature/mypage/CheckRole";
import CartPayment from "../feature/product/CartPayment";
import ListProduct from "../feature/product/ListProduct";
import ProductDetail from "../feature/product/ProductDetail";
import SearchProduct from "../feature/product/SearchProduct";
import ChangePassword from "../feature/user/ChangePassword";
import Instruction from "../feature/user/Instruction";
import Policy from "../feature/user/Policy";
import PolicyHomePage from "../feature/user/PolicyInstruct";
import RegisterScreen from "../feature/user/RegisterScreen";
import Tracking from "../feature/user/TrackingOrder";
import Admin from "../feature/manage/Admin";
import NavBar from "./NavBar";
import { ADMIN_ROUTE, ROOT_SCREEN, SHOP_ROUTE, USER_ROUTE } from "./routes";

const RootScreen = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path={ROOT_SCREEN.shop} component={ListProduct} />
        <Route path={ROOT_SCREEN.explore} component={ListProduct} />
        <Route path={SHOP_ROUTE.productDetail} component={ProductDetail} />
        <Route path={SHOP_ROUTE.cartPayment} component={CartPayment} />
        <Route path={ROOT_SCREEN.mypage} component={CheckRole} />
        <Route path={USER_ROUTE.register} component={RegisterScreen} />
        <Route path={USER_ROUTE.forgotPass} component={ChangePassword} />
        <Route path={ADMIN_ROUTE.productManage} component={Manager} />
        <Route path={USER_ROUTE.instruction} component={Instruction} />
        <Route path={USER_ROUTE.policy} component={Policy} />
        <Route path={USER_ROUTE.policyInstruc} component={PolicyHomePage} />
        <Route path={ADMIN_ROUTE.trackingOrder} component={Tracking} />
<<<<<<< HEAD
        <Route path={ADMIN_ROUTE.adminDashboard} component={Admin} />
=======
        <Route path={ADMIN_ROUTE.changeProduct} component={ChangeProduct} />
        <Route path={ROOT_SCREEN.search} component={SearchProduct} />
>>>>>>> 0f96937f5f1e772a35b3548a136fb6cb371cac07
      </Switch>
    </BrowserRouter>
  );
};

export default RootScreen;
