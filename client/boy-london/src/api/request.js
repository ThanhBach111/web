import axios from "axios";

const request = axios.create({
  baseURL: "http://locahost:8000",
  timeout: 15000,
  headers: { Accept: "*/*" },
});

export default request;
