import { API_V1 } from "../config/auth-axios";

class projectsService {
  createProject(body) {
    return API_V1.post("/employer/projects", body);
  }
  createService(body) {
    return API_V1.post("/freelancer/service", body);
  }
  getAllServices(options) {
    return API_V1.get(
      `services?per_page=${options.perPage}&page=${options.page}`
    );
  }
  getServiceById(id) {
    return API_V1.get(`services/${id}`);
  }
  getProjectById(id) {
    return API_V1.get(`projects/${id}`);
  }
  sendJobOffer(body) {
    return API_V1.post("/employer/service", body);
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

  getAllProjects(options) {
    return API_V1.get(
      `projects?per_page=${options.perPage}&page=${options.page}`
    );
  }
  submitProposal(body) {
    return API_V1.post("/freelancer/proposals", body);
  }
  getCommission() {
    return API_V1.get(`/users/commission`);
  }
}

export default new projectsService();
