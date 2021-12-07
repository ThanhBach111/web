import axios from "axios";
import appStore from "../app-redux/store";

const request = axios.create({
  baseURL: "https://localhost:8000",
  timeout: 5000,
  headers: { Accept: "*/*" },
});

request.interceptors.request.use(
  async (config) => {
    const token = appStore.getState().accountSlice.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response.data,
  async (error) => Promise.reject(error)
);

export default request;
