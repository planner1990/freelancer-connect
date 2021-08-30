import { API_V1 } from "../config/auth-axios";

class projectsService {
  createProject(body) {
    return API_V1.post("admin/employer/projects", body);
  }
  createService(body) {
    return API_V1.post("admin/freelancer/service", body);
  }
  getAllServices() {
    return API_V1.get(`services`);
  }
  employerProjectStatus(options) {
    return API_V1.get(
      `admin/employer/projects/${options.status}?per_page=${options.perPage}&page=${options.page}`
    );
  }
  projectDurations() {
    return API_V1.get(`type/project_durations`);
  }
  activityTypes() {
    return API_V1.get(`category`);
  }
  skills() {
    return API_V1.get(`type/skill`);
  }
  companyCriteria() {
    return API_V1.get(`type/company_criteria`);
  }
}

export default new projectsService();
