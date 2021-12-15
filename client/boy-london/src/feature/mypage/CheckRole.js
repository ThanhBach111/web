import Cookies from "js-cookie";
import React from "react";
import Login from "../user/Login";
import MyPage from "./MyPage";

const CheckRole = () => {
  const token = Cookies.get("token");

  if (!token) {
    return <Login />;
  }

  return <MyPage />;
};

export default CheckRole;
