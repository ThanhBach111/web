import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartPayment from "../feature/product/CartPayment";
import ListProduct from "../feature/product/ListProduct";
import ProductDetail from "../feature/product/ProductDetail";
import NavBar from "./NavBar";
import { ADMIN_ROUTE, ROOT_SCREEN, SHOP_ROUTE, USER_ROUTE } from "./routes";
import LandingPage from "../feature/landingpage/LandingPage";
import Register from "../feature/user/Register";
import Login from "../feature/user/Login";
import ForgotPass from "../feature/user/ForgotPass";
import Manager from "../feature/manage/Manager";
import MyPage from "../feature/mypage/MyPage";
import Instruction from "../feature/user/Instruction";
import Policy from "../feature/user/Policy";
import PolicyHomePage from "../feature/user/PolicyInstruct";


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
        <Route path={ROOT_SCREEN.login} component={Login} />
        <Route path={USER_ROUTE.register} component={Register}/>
        <Route path={USER_ROUTE.forgotPass} component={ForgotPass}/>
        <Route path={ADMIN_ROUTE.productManage} component={Manager}/>
        <Route path={USER_ROUTE.myPage} component={MyPage} />
        <Route path={USER_ROUTE.instruction} component={Instruction} />
        <Route path={USER_ROUTE.policy} component={Policy} />
        <Route path={USER_ROUTE.policyInstruc} component={PolicyHomePage} />
        {/* <Route path={ROOT_SCREEN.aboutUs} component={register} />
        <Route path={ROOT_SCREEN.register} component={register} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default RootScreen;
