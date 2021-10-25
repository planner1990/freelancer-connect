import { API_V1 } from "../config/auth-axios";

class employerServices {
  getIndexProjects(options) {
    return API_V1.get(
      `admin/employer/projects/${options.status}?per_page=${options.perPage}&page=${options.page}`
    );
  }

  getIndexServices(options) {
    return API_V1.get(
      `/admin/employer/service/job_offers?status=${options.status}`
    );
  }

  getProposalsPerProject(body) {
    return API_V1.post("admin/employer/proposals", body);
  }

  projectShowById(id) {
    return API_V1.get(`projects/${id}`);
  }

  serviceShowById(id) {
    return API_V1.get(`services/${id}`);
  }

  showProposalById(id) {
    return API_V1.get(`admin/employer/proposal/${id}`);
  }

  proposalAction(body) {
    return API_V1.post("admin/employer/proposal/update", body);
  }

  confirmProposalByEmployer(proposalId) {
    return API_V1.get(`/admin/employer/proposal/hire/${proposalId}`);
  }

  indexMilestone(proposalId) {
    return API_V1.get(`/admin/milestone/proposal/${proposalId}`);
  }

  indexMilestoneForServices(estimationId) {
    return API_V1.get(`/admin/milestone/estimation/${estimationId}`);
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

  myProjects() {
    return API_V1.get(`/admin/employer/projects`);
  }

  fakePaymentEmployer(body) {
    return API_V1.post("/admin/employer/milestone/pay", body);
  }

  mileStoneAction(body) {
    return API_V1.post("/admin/employer/milestone/status", body);
  }
}

export default new employerServices();
