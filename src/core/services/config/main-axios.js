import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Accept-Language": "fa",
  version: "1000"
};
const API_V3 = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_V3,
  headers: headers
});
const API_V4 = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_V4,
  headers: headers
});

export { API_V3, API_V4 };
