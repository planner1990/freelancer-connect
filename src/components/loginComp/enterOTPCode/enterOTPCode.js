import OtpService from "../../../core/services/modules/otpService";
import { mapGetters } from "vuex";
import * as types from "../../../shared/store/types";
import AuthService from "../../../core/services/modules/authService";
import Snackbar from "@/components/snackbar/index";

export default {
  name: "enter-otp-code",
  components: { Snackbar },
  props: [],
  data() {
    return {
      OTPCode: null,
      signInLoading: false,
      timer: 119,
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      OTPCodeRule: [
        v => !!v || "لطفا کد پیامک شده را وارد کنید",
        v => (v && v.length >= 4) || "کد وارد شده باید 4 رقم باشد"
      ]
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
      this.showSnackbar = false;
      const body = {
        identification: this.getDataFromStore.identification,
        type: 0
      };
      OtpService.sendOTP(body).then(res => {
        console.log(res);
        this.showSnackbar = true;
        this.snackbarMessage = "کد مجددا ارسال شد";
      });
    },
    handleVerifyOTP() {
      this.showSnackbar = false;
      const body = {
        phone: this.getDataFromStore.identification,
        code: this.OTPCode
      };
      OtpService.verifyOTP(body)
        .then(res => {
          if (res.data.data["is_registered"] === false) {
            localStorage.setItem("accessToken", res.data.data.token);
            this.$router.push("/login/freelancer-or-employer");
          } else {
            if (this.getEmployerData.currentURL) {
              localStorage.setItem("accessToken", res.data.data.token);
              this.$router.push(this.getEmployerData.currentURL);
            } else {
              localStorage.setItem("accessToken", res.data.data.token);
              this.goToDashboard();
            }
          }
        })
        .catch(error => {
          console.log(error);
          this.showSnackbar = true;
          this.snackbarMessage = "کد وارد شده معتبر نیست.";
        });
    },

    goToDashboard() {
      AuthService.getAssignedRole().then(response => {
        const role = response.data.data.role;
        switch (role) {
          case "freelancer":
            this.$router.push("/freelancer/dashboard");
            break;
          case "employer":
            this.$router.push("/employer/dashboard");
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
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  }
};
