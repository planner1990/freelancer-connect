import { API_V1 } from "../config/auth-axios";

class freelancerServices {
  getAllProposals() {
    return API_V1.get(`/freelancer/proposal_list`);
  }

  getPendingProposals() {
    return API_V1.get(`/freelancer/proposal_list?status=0`);
  }

  getPendingProposalById(id) {
    return API_V1.get(`/freelancer/proposals/${id}`);
  }

  getOngoingProposalById(id) {
    return API_V1.get(`/freelancer/estimation/${id}`);
  }

  getFilteredProjects(options) {
    return API_V1.get(
      `/freelancer/projects/${options.status}?per_page=${options.perPage}&page=${options.page}`
    );
  }

  getFilteredServices(options) {
    return API_V1.get(
      `/freelancer/service/job_offers/${options}`
      // `/freelancer/services/${options.status}?per_page=${options.perPage}&page=${options.page}`
    );
  }

  submitMilestone(body) {
    return API_V1.post(`/freelancer/milestone`, body);
  }

  getChatList(proposalId) {
    return API_V1.get(`/chat/proposal/${proposalId}`);
  }

  getChatListForService(estimationId) {
    return API_V1.get(`/chat/estimation/${estimationId}`);
  }

  getChatListFreelancer(proposalId) {
    return API_V1.get(`/chat/estimation/${proposalId}`);
  }

  storeChat(body) {
    return API_V1.post(`/chat`, body);
  }

  indexJobOffers(status) {
    return API_V1.get(`/freelancer/service/job_offers/${status}`);
  }

  showServiceById(serviceId) {
    return API_V1.get(`/services/${serviceId}`);
  }

  showProfile() {
    return API_V1.get(`/freelancer/profile`);
  }

  updateProfile(body) {
    return API_V1.post(`/freelancer/update/profile`, body);
  }

  updateExperienceEducation(body) {
    return API_V1.post(`/freelancer/update-experience-education`, body);
  }

  updateProjectsAward(body) {
    return API_V1.post(`/freelancer/update-project-award`, body);
  }

  myServices() {
    return API_V1.get(`/freelancer/services`);
  }
}

export default new freelancerServices();
