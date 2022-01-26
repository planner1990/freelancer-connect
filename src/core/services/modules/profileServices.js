import { API_V1 } from "../config/auth-axios";

class profileServices {
  employerUpdateProfile(body) {
    return API_V1.post("/employer/update/profile_info", body);
  }
  employerGetProfile() {
    return API_V1.get(`/employer/profile`);
  }
  bestProjects(options) {
    return API_V1.get(`/projects`, { params: options });
  }
  bestFreelancers(options) {
    return API_V1.get(`/users`, { params: options });
  }
}

export default new profileServices();
