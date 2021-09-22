import { API_V1 } from "../config/auth-axios";

class freelancerServices {
  getAllProposals() {
    return API_V1.get(`/admin/freelancer/proposal_list`);
  }

  getPendingProposals() {
    return API_V1.get(`/admin/freelancer/proposal_list?status=0`);
  }

  getPendingProposalById(id) {
    return API_V1.get(`/admin/freelancer/proposals/${id}`);
  }

  getFilteredProjects(status) {
    return API_V1.get(`/admin/freelancer/projects/${status}`);
  }

  submitMilestone(body) {
    return API_V1.post(`/admin/milestone`, body);
  }

  getChatList(proposalId) {
    return API_V1.get(`/chat/proposal/${proposalId}`);
  }

  getChatListFreelancer(proposalId) {
    return API_V1.get(`/chat/estimation/${proposalId}`);
  }

  storeChat(body) {
    return API_V1.post(`/chat`, body);
  }

  indexJobOffers(status) {
    return API_V1.get(`/admin/freelancer/service/job_offers/${status}`);
  }

  showServiceById(serviceId) {
    return API_V1.get(`/services/${serviceId}`);
  }

  showProfile() {
    return API_V1.get(`/admin/freelancer/profile`);
  }

  updateProfile(body) {
    return API_V1.post(`/admin/freelancer/update/profile`, body);
  }

  updateExperienceEducation(body) {
    return API_V1.post(`/admin/freelancer/update-experience-education`, body);
  }

  updateProjectsAward(body) {
    return API_V1.post(`/admin/freelancer/update-project-award`, body);
  }
}

export default new freelancerServices();
