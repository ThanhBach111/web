import request from "./request";

/**
 * Authentication
 */
export const apiLogin = ({ username, password }) => {
  console.log(username, " - ", password);
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  return request.post("/auth", formData);
};

export const apiRegister = (params) => {
  return request.post("/auth/register", {
    email: params.email,
    name: params.name,
    phoneNumber: params.phoneNumber,
    isActive: true,
    password: params.password,
    confirmPassword: params.password,
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

/**
 * Product
 */
export const apiGetProductDetail = (productId) => {
  return request.get(`/product/get-detail/${productId}`);
};

export const apiAddToCart = ({ productId, quantityOrdered }) => {
  return request.post("/product/add-to-cart", {
    productId,
    quantityOrdered,
  });
};
