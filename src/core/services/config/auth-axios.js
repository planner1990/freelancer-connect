import axios from "axios";
import authService from "../modules/authService";
const headers = {
  "content-type": "application/json",
  Accept: "application/json",
  "Accept-Language": "fa"
};

const API_V1 = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_V1,
  headers: headers
});

API_V1.interceptors.request.use(
  config => {
    const token = authService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

API_V1.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      this.$router.push({ path: "/login" });
    }
    return Promise.reject(error);
  }
);

export { API_V1 };
