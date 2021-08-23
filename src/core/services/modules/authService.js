import { API_V1, API_V4 } from "../config/auth-axios";

class AuthService {
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  register(body) {
    return API_V1.post("auth/register", body);
  }

  getAssignedRole() {
    return API_V1.get("get_assigned_role");
  }

  getOtpToken() {
    return localStorage.getItem("otpToken");
  }

  getGoogle2faToken() {
    return localStorage.getItem("google2faToken");
  }

  signIn(username, password, captcha_token, captcha_value) {
    return API_V4.post("/users/sign-in", {
      username,
      password,
      captcha_token,
      captcha_value
    });
  }

  verifyUserGoogle2fa(google2faToken, otp) {
    return API_V4.post("/users/two-factor-auth/google2fa/verify", {
      google2fa_token: google2faToken,
      otp: otp
    });
  }

  verifyUserOtp(otp, otpToken) {
    return API_V4.post("/users/two-factor-auth/otp/verify", {
      otp: otp,
      otp_token: otpToken
    });
  }

  resendLoginOtp(otpToken) {
    return API_V4.post("/users/two-factor-auth/otp/resend", {
      otp_token: otpToken
    });
  }

  // REGISTRATION

  signUp(
    emailOrMobile,
    password,
    passwordConfirmation,
    termConfirmation,
    referralCode,
    captchaToken,
    captchaValue
  ) {
    return API_V4.post("/users/sign-up", {
      email_or_mobile: emailOrMobile,
      password: password,
      password_confirmation: passwordConfirmation,
      term_confirmation: termConfirmation,
      captcha_token: captchaToken,
      captcha_value: captchaValue,
      referral_code: referralCode
    });
  }

  verifyRegister(otp, otpToken) {
    return API_V4.post("/users/verify/register", {
      otp: otp,
      otp_token: otpToken
    });
  }

  resendRegisterOtp(otpToken) {
    return API_V4.post("/users/resend/register-otp", {
      otp_token: otpToken
    });
  }

  // PASSWORD

  recoverPassword(emailOrMobile, captchaToken, captchaValue) {
    return API_V4.post("/users/password/recover", {
      email_or_mobile: emailOrMobile,
      captcha_token: captchaToken,
      captcha_value: captchaValue
    });
  }

  passwordRecoveryOtp(otp, otpToken) {
    return API_V4.post("/users/password/recover/otp/verify", {
      otp: otp,
      otp_token: otpToken
    });
  }

  resetPassword(
    otpToken,
    password,
    passwordConfirmation,
    captchaToken,
    captchaValue
  ) {
    return API_V4.post("/users/password/reset/force", {
      otp_token: otpToken,
      password: password,
      password_confirmation: passwordConfirmation,
      captcha_token: captchaToken,
      captcha_value: captchaValue
    });
  }

  resendPasswordRecoveryOtp(otpToken) {
    return API_V4.post("/users/password/recover/otp/resend", {
      otp_token: otpToken
    });
  }
  captcha(type, captcha_hash = null) {
    return API_V4.get("/captcha/get", {
      params: {
        type,
        captcha_hash
      }
    });
  }
  passwordRegex() {
    return API_V4.get("/users/password/regex");
  }
  userInfo() {
    return API_V4.get("/accounts/user-information");
  }
  signOut() {
    return API_V4.get("/users/sign-out");
  }
}

export default new AuthService();
