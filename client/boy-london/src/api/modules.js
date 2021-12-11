import request from "./request";

/**
 * Authentication
 */
export const apiLogin = ({ username, password }) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  return request.post("/auth/login", formData);
};

export const apiRegister = (params) => {
  return request.post("/auth/register", {
    email: params.email,
    name: params.name,
    phoneNumber: params.phoneNumber,
    isActive: true,
    password: params.password,
    address: params.address,
    role: "user",
  });
};

export const apiChangePassword = (params) => {
  return request.put("/account/change-password", params);
};

/**
 * Profile
 */
export const apiChangeInfo = (params) => {
  return request.post("/account/change-informartion", {
    name: params.name,
    email: params.email,
    phoneNumber: params.phoneNumber,
    address: params.address,
  });
};

export const apiGetProfile = () => {
  return request.get("/account");
};
