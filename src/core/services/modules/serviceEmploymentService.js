import { API_V1 } from "../config/auth-axios";

class ServiceEmploymentService {
  employerUpdateProfile(body) {
    return API_V1.post("admin/employer/update/profile_info", body);
  }
  getJobOfferFreelancer() {
    return API_V1.get(`admin/freelancer/service/job_offers/ongoing`);
  }
}

export default new ServiceEmploymentService();
