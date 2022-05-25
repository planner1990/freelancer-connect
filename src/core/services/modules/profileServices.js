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
  search(options) {
    return API_V1.get(`/search`, { params: options });
  }
  searchTypesIndex() {
    return API_V1.get(`/search/index`);
  }
  getInfo() {
    return API_V1.get(`/users/info`);
  }
  showProfileSidebar(user_id) {
    return API_V1.get(`/profile/${user_id}`);
  }
  showProfileProject(user_id) {
    return API_V1.get(`/profile/${user_id}/projects`);
  }
  showProfileDetail(user_id) {
    return API_V1.get(`/profile/${user_id}/details`);
  }
}

export default new profileServices();
