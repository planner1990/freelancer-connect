import { API_V1 } from "../config/auth-axios";

class freelancerServices {
  getAllProposals() {
    return API_V1.get(`admin/freelancer/proposal_list`);
  }

  getPendingProposals() {
    return API_V1.get(`admin/freelancer/proposal_list?status=0`);
  }

  submitProposal(body) {
    return API_V1.post("admin/freelancer/proposals", body);
  }
}

export default new freelancerServices();
