import axios from "axios";

const headers = {
  "content-type": "application/json",
  Accept: "application/json",
  "Accept-Language": "fa"
};
const API_V1 = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_V1,
  headers: headers
});

API_V1.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export { API_V1 };
