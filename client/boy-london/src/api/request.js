import axios from "axios";
import Cookies from "js-cookie";
import appStore from "../app-redux/store";

const request = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
  headers: { Accept: "*/*" },
});

request.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('token')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log('error request: ', error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    console.log('error resonse: ', error);
    return Promise.reject(error);
  }
);

export default request;
