import { API_V1 } from "../config/auth-axios";

class AuthService {
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  register(body) {
    return API_V1.post("auth/register", body);
  }

  getAssignedRole() {
    return API_V1.get("get_assigned_role");
  }

  showProfile() {
    return API_V1.get("/api/profile");
  }
}

export default new AuthService();
