import { API_V4 } from "@/services/config/auth-axios";

class PasswordService {
  update(oldPassword, newPassword, repeatPassword) {
    return API_V4.post("/verification/users/password/update", {
      current_password: oldPassword,
      new_password: newPassword,
      new_password_confirmation: repeatPassword
    });
  }
  passwordRegex() {
    return API_V4.get("/users/password/regex");
  }
}

export default new PasswordService();
