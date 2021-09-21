import { API_V1 } from "../config/auth-axios";

class OtpService {
  sendOTP(body) {
    return API_V1.post(`/otp`, body);
  }
  verifyOTP(body) {
    return API_V1.post(`/auth/verify_otp`, body);
  }
}

export default new OtpService();
