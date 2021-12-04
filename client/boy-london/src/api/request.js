import axios from "axios";

const request = axios.create({
  baseURL: "https://random-data-api.com",
  timeout: 15000,
  headers: { Accept: "*/*" },
});

request.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${"token__backend"}`;
    return config;
  },
  async (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response.data,
  async (error) => Promise.reject(error)
);

export default request;
