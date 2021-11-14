import { API_V1 } from "../config/auth-axios";

class employerServices {
  getIndexProjects(options) {
    return API_V1.get(
      `/employer/projects/${options.status}?per_page=${options.perPage}&page=${options.page}`
    );
  }

  getIndexServices(options) {
    return API_V1.get(`/employer/service/job_offers?status=${options.status}`);
  }

  getProposalsPerProject(projectId) {
    return API_V1.get(`/employer/proposal/project/${projectId}?status=0`);
  }

  projectShowById(id) {
    return API_V1.get(`projects/${id}`);
  }

  serviceShowById(id) {
    return API_V1.get(`services/${id}`);
  }

  showProposalById(id) {
    return API_V1.get(`/employer/proposal/${id}`);
  }

  proposalAction(body) {
    return API_V1.post("/employer/proposal/update", body);
  }

  confirmProposalByEmployer(proposalId) {
    return API_V1.get(`/employer/proposal/hire/${proposalId}`);
  }

  indexMilestone(proposalId) {
    return API_V1.get(`/milestone/proposal/${proposalId}`);
  }

  indexMilestoneForServices(estimationId) {
    return API_V1.get(`/milestone/estimation/${estimationId}`);
  }

  indexJobOffers(status) {
    return API_V1.get(`/employer/service/job_offers?status=${status}`);
  }

  showJobOfferById(id) {
    return API_V1.get(`/employer/service/job_offers/${id}`);
  }

  indexEstimations(id) {
    return API_V1.get(`/employer/service/job_offers/estimation/${id}`);
  }

  showEstimation(id) {
    return API_V1.get(`/employer/service/estimation/${id}`);
  }

  confirmServiceEmployment(id) {
    return API_V1.get(`/employer/service/employment/${id}`);
  }

  rejectServiceEstimation(id) {
    return API_V1.get(`/employer/service/reject_estimation/${id}`);
  }

  myProjects(options) {
    return API_V1.get(
      `/employer/projects?per_page=${options.perPage}&page=${options.page}`
    );
  }

  fakePaymentEmployer(body) {
    return API_V1.post("/pay", body);
  }

  mileStoneAction(body) {
    return API_V1.post("/employer/milestone/status", body);
  }
}

export default new employerServices();
