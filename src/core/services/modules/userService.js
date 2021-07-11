import { API_V4 } from "@/services/config/auth-axios";

class UserService {
  updateUsername(username) {
    return API_V4.post("/verification/users/username/update", {
      username
    });
  }

  getInfo() {
    return API_V4.get("/accounts/user-information");
  }

  getVerifyInfo() {
    return API_V4.get("/accounts/user-verify-information");
  }

  updateInfo(data) {
    const { firstName, lastName, nationalCode, birthDate } = data;
    return API_V4.post("/verification/users/personal-information/update", {
      first_name: firstName,
      last_name: lastName,
      national_code: nationalCode,
      // gender,
      birth_date: birthDate
    });
  }
}

export default new UserService();
