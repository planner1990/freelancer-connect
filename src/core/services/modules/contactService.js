import { API_V4 } from "@/services/config/auth-axios";

class ContactService {
  activeMobile(mobile) {
    return API_V4.post("/verification/mobile/otp", {
      mobile
    });
  }

  verifyMobile(mobileCode) {
    return API_V4.post("/verification/mobile", {
      mobileCode
    });
  }

  activePhone(phone) {
    return API_V4.post("/verification/phone/otp", {
      phone
    });
  }

  verifyPhone(phoneCode) {
    return API_V4.post("/verification/phone", {
      phoneCode
    });
  }

  activeEmail(email) {
    return API_V4.post("/verification/email/otp", {
      email
    });
  }

  verifyEmail(emailCode) {
    return API_V4.post("/verification/email", {
      emailCode
    });
  }

  postImage(file) {
    const form = new FormData();
    file && form.append("image", file);
    return API_V4.post("/verification/users/upload-verify-image", form, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
}

export default new ContactService();
