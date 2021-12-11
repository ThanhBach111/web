import React from "react";
import { useSelector } from "react-redux";

const CheckRole = () => {
  const role = useSelector((state) => state.accountSlice.userInfo?.role);

  return <div></div>;
};

export default CheckRole;
