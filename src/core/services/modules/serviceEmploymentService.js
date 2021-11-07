import { API_V1 } from "../config/auth-axios";

class ServiceEmploymentService {
  estimationForFreelancer(body) {
    return API_V1.post("/freelancer/service/job_offers/estimation", body);
  }
  getJobOfferFreelancer() {
    return API_V1.get(`/freelancer/service/job_offers/ongoing`);
  }

  showJobOfferEmployer(status) {
    return API_V1.get(`/employer/service/job_offers?status=${status}`);
  }

  showEstimationEmployer(id) {
    return API_V1.get(`/employer/service/job_offers/estimation/${id}`);
  }

  rejectEstimationEmployer(id) {
    return API_V1.get(`/employer/service/reject_estimation/${id}`);
  }

  employmentService(id) {
    return API_V1.get(`/employer/service/employment/${id}`);
  }
}

export default new ServiceEmploymentService();
