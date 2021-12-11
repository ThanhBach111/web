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

//  "productID": 1,
//  "image1": "https://storage.googleapis.com/cdn.nhanh.vn/store/29193/ps/20211204/21ST_URBAN_Floral_Wool_Overshirt_23.jpg",
//  "category": "Top",
//  "price": 200000,
//  "name": "Áo Armor",
//  "description": null,
//  "image2": "https://storage.googleapis.com/cdn.nhanh.vn/store/29193/ps/20211204/21ST_URBAN_Floral_Wool_Overshirt_35.jpg",
//  "quantityInStock": 100
export const apiGetProductDetail = (productId) => {
  return request.get(`/product/get-detail/${productId}`);
};
