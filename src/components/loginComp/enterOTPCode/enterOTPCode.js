import OtpService from "../../../core/services/modules/otpService";
import { mapGetters } from "vuex";
import * as types from "../../../shared/store/types";
import AuthService from "../../../core/services/modules/authService";

export default {
  name: "enter-otp-code",
  components: {},
  props: [],
  data() {
    return {
      OTPCode: null,
      signInLoading: false,
      timer: 119
    };
  },
  computed: {
    ...mapGetters({
      registrationData: types.storeRegisterForm.REGISTER_FORM_GET,
      getEmployerData:
        types.HandleEmployerToLogin.getters.HANDLE_EMPLOYER_TO_LOGIN_GET
    }),
    getDataFromStore() {
      return this.registrationData;
    }
  },
  mounted() {
    setInterval(this.handleTimer, 1000);
    this.resetRegister();
  },
  methods: {
    backToPrevStep() {
      this.$router.push("/login");
    },
    handleTimer() {
      if (this.timer > 0) {
        this.timer--;
      }
    },
    resendConfirmCode() {
      this.timer = 119;
      this.handleSendOTP();
    },
    handleSendOTP() {
      const body = {
        identification: this.getDataFromStore.identification,
        type: 0
      };
      OtpService.sendOTP(body).then(res => {
        console.log(res);
      });
    },
    handleVerifyOTP() {
      const body = {
        phone: this.getDataFromStore.identification,
        code: this.OTPCode
      };
      OtpService.verifyOTP(body).then(res => {
        console.log(res);
        if (res.data.data["is_registered"] === false) {
          localStorage.setItem("accessToken", res.data.data.token);
          this.$router.push("/login/freelancer-or-employer");
        } else {
          if (
            this.getEmployerData.currentURL &&
            this.getEmployerData.serviceId
          ) {
            localStorage.setItem("accessToken", res.data.data.token);
            this.$router.push(this.getEmployerData.currentURL);
          } else {
            localStorage.setItem("accessToken", res.data.data.token);
            this.goToDashboard();
          }
        }
      });
    },
    goToDashboard() {
      AuthService.getAssignedRole().then(response => {
        const role = response.data.data.role;
        switch (role) {
          case "freelancer":
            this.$router.push("/freelancer/profile-setting");
            break;
          case "employer":
            this.$router.push("/employer/profile-setting");
            break;
          case "admin":
            this.$router.push("/panel");
            break;
        }
      });
    },
    resetRegister() {
      if (!this.getDataFromStore.identification) {
        this.$router.push("/login");
      }
    }
  }
};
