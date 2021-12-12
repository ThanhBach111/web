import React from "react";
import { useSelector } from "react-redux";
import Login from "../user/Login";
import MyPage from "./MyPage";

const CheckRole = () => {
  const token = useSelector((state) => state.accountSlice.token);

  if (!token) {
    return <Login />;
  }

  return <MyPage />;
};

export default CheckRole;
