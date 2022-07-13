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
    return API_V1.get(`/profile_info`);
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

  deleteProposalRequest(id) {
    return API_V1.delete(`/freelancer/proposals/${id}`);
  }

  showMessage(params) {
    return API_V1.get(`freelancer/notifications`, { params });
  }

  profileExperienceIndex() {
    return API_V1.get(`/profile_experience`);
  }

  profileExperienceStore(body) {
    return API_V1.post("/profile_experience", body);
  }

  profileExperienceUpdate(body, experienceId) {
    return API_V1.post(`/profile_experience/${experienceId}/update`, body);
  }

  profileExperienceShow(experienceId) {
    return API_V1.get(`/profile_experience/${experienceId}`);
  }

  profileExperienceDelete(experienceId) {
    return API_V1.post(`/profile_experience/${experienceId}/delete`);
  }

  profileEducationIndex() {
    return API_V1.get(`/profile_education`);
  }

  profileEducationStore(body) {
    return API_V1.post("/profile_education", body);
  }

  profileEducationUpdate(body, educationId) {
    return API_V1.post(`/profile_education/${educationId}/update`, body);
  }

  profileEducationShow(educationId) {
    return API_V1.get(`/profile_education/${educationId}`);
  }

  profileEducationDelete(educationId) {
    return API_V1.post(`/profile_education/${educationId}/delete`);
  }

  profileProjectIndex() {
    return API_V1.get(`/profile_project`);
  }

  profileProjectStore(body) {
    return API_V1.post("/profile_project", body);
  }

  profileProjectUpdate(body, projectId) {
    return API_V1.post(`/profile_project/${projectId}/update`, body);
  }

  profileProjectShow(projectId) {
    return API_V1.get(`/profile_project/${projectId}`);
  }

  profileProjectDelete(projectId) {
    return API_V1.post(`/profile_project/${projectId}/delete`);
  }

  profileCertificateIndex() {
    return API_V1.get(`/profile_certificate`);
  }

  profileCertificateStore(body) {
    return API_V1.post("/profile_certificate", body);
  }

  profileCertificateUpdate(body, certificateId) {
    return API_V1.post(`/profile_certificate/${certificateId}/update`, body);
  }

  profileCertificateShow(certificateId) {
    return API_V1.get(`/profile_certificate/${certificateId}`);
  }

  profileCertificateDelete(certificateId) {
    return API_V1.post(`/profile_certificate/${certificateId}/delete`);
  }

  profileInfoIndex() {
    return API_V1.get(`/profile_info`);
  }

  profileInfoUpdate(body) {
    return API_V1.post(`/profile_info/update`, body);
  }
}

export default new freelancerServices();
