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

  indexMilestone(proposalId) {
    return API_V1.get(`/admin/milestone/proposal/${proposalId}`);
  }

  indexJobOffers(status) {
    return API_V1.get(`/admin/employer/service/job_offers?status=${status}`);
  }

  showJobOfferById(id) {
    return API_V1.get(`/admin/employer/service/job_offers/${id}`);
  }

  indexEstimations(id) {
    return API_V1.get(`/admin/employer/service/job_offers/estimation/${id}`);
  }

  showEstimation(id) {
    return API_V1.get(`/admin/employer/service/estimation/${id}`);
  }

  confirmServiceEmployment(id) {
    return API_V1.get(`/admin/employer/service/employment/${id}`);
  }

  rejectServiceEstimation(id) {
    return API_V1.get(`/admin/employer/service/reject_estimation/${id}`);
  }
}

export default new employerServices();
