import { API_V1 } from "../config/auth-axios";

class profileServices {
  employerUpdateProfile(body) {
    return API_V1.post("admin/employer/update/profile_info", body);
  }
  employerGetProfile() {
    return API_V1.get(`admin/employer/profile`);
  }
}

export default new profileServices();
