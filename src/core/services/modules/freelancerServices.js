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
    return API_V1.get(`/freelancer/service/job_offers/${options.status}`, {
      params: options
    });
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

  indexJobOffers(options) {
    return API_V1.get(`/freelancer/service/job_offers/${options.status}`, {
      params: options
    });
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

  showCredit() {
    return API_V1.get(`/credit`);
  }

  transactionIndex(options) {
    return API_V1.get(`/transaction`, { params: options });
  }

  accountStore(body) {
    return API_V1.post(`/account`, body);
  }

  showTransactionDetail(id) {
    return API_V1.get(`/transaction/${id}`);
  }

  indexAccount() {
    return API_V1.get(`/account`);
  }

  transactionWithdraw(body) {
    return API_V1.post(`/transaction/withdraw`, body);
  }

  payCredit(body) {
    return API_V1.post(`/pay/credit`, body);
  }

  rejectJobOffer(body) {
    return API_V1.post(`/freelancer/service/job_offers/reject`, body);
  }

  showJobOffer(id) {
    return API_V1.get(`/freelancer/service/job_offers/show/${id}`);
  }

  deleteService(body) {
    return API_V1.post("/freelancer/services/delete", body);
  }
}

export default new freelancerServices();
