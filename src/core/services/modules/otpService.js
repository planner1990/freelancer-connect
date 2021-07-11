import { API_V4 } from "@/services/config/auth-axios";

class OtpService {
  activeSms(mobile) {
    return API_V4.post(`/verification/otp/sms`, {
      mobile
    });
  }

  activeGoogle() {
    return API_V4.post(`/verification/otp/google2fa`, {});
  }

  verify(strategy, code, password) {
    return API_V4.post(`/verification/otp/${strategy}/verify`, {
      code,
      password
    });
  }

  inactive(strategy, password) {
    return API_V4.post(`/verification/otp/${strategy}/inactive`, {
      password
    });
  }

  setDefault(strategy) {
    return API_V4.get(`/verification/otp/${strategy}/default`);
  }
}

export default new OtpService();
