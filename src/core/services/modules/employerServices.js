import { API_V1 } from "../config/auth-axios";

class employerServices {
  getIndexProjects(options) {
    return API_V1.get(
      `admin/employer/projects/${options.status}?per_page=${options.perPage}&page=${options.page}`
    );
  }

  getProposalsPerProject(body) {
    return API_V1.post("admin/employer/proposals", body);
  }

  projectShowById(id) {
    return API_V1.get(`projects/${id}`);
  }

  showProposalById(id) {
    return API_V1.get(`admin/employer/proposal/${id}`);
  }

  proposalAction(body) {
    return API_V1.post("admin/employer/proposal/update", body);
  }
}

export default new employerServices();
