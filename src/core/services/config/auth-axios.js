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
      // localStorage.removeItem("accessToken");
      // this.$router.push({ path: "/login" });
      let storage;
      try {
        localStorage.setItem("accessToken", "x");
        localStorage.removeItem("accessToken");
        this.$router.push({ path: "/login" });
        return true;
      } catch (e) {
        return (
          e instanceof DOMException &&
          // everything except Firefox
          (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage &&
          storage.length !== 0
        );
      }
    }
    return Promise.reject(error);
  }
);

export { API_V1 };
