import { API_V1 } from "../config/auth-axios";

class ServiceEmploymentService {
  estimationForFreelancer(body) {
    return API_V1.post("admin/freelancer/service/job_offers/estimation", body);
  }
  getJobOfferFreelancer() {
    return API_V1.get(`admin/freelancer/service/job_offers/ongoing`);
  }

  showJobOfferEmployer() {
    return API_V1.get(`admin/employer/service/job_offers`);
  }

  showEstimationEmployer(id) {
    return API_V1.get(`admin/employer/service/job_offers/estimation/${id}`);
  }

  rejectEstimationEmployer(id) {
    return API_V1.get(`admin/employer/service/reject_estimation/${id}`);
  }

  employmentService(id) {
    return API_V1.get(`admin/employer/service/employment/${id}`);
  }
}

export default new ServiceEmploymentService();
