/*import { mapActions } from "vuex";
import * as types from "./../../store/types";*/
import TransitionPage from "../transitionPage/index";
import AuthService from "../../core/services/modules/authService";

export default {
  name: "login-comp",
  components: { TransitionPage },
  props: [],
  mixins: [],
  data() {
    return {
      loading: false,
      signInLoading: false,
      errors: [],
      step: 1,
      timer: 119,
      items: ["نوع اول", "نوع دوم", "نوع سوم"],
      personality: "",
      registerForm: {
        phone: null,
        OTPCode: null,
        role: "",
        firstName: "",
        lastName: ""
      },
      radios: null
    };
  },
  computed: {},

  mounted() {
    setInterval(this.handleTimer, 1000);
  },
  methods: {
    /*...mapActions({
      checkIsAuth: types.ACTION_CHECK_IS_AUTH
    }),*/
    onSubmit(evt) {
      evt.preventDefault();
      this.step = 2;
      // this.loading = true;
      // this.signInLoading = true;
      // this.handleUsers(this.username);
      /*authService
        .login(this.username, this.password)
        .then(response => {
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("isAuth", true);
          this.checkIsAuth();
          this.$router.push(`/panel`);
        })
        .catch(error => {
          this.notifyErrors(error.response.data);
        })
        .finally(() => {
          this.loading = false;
          this.signInLoading = false;
        });*/
    },
    handleUsers(username) {
      switch (username) {
        case "admin":
          this.$router.push("/panel/dashboard");
          break;
        case "freelancer":
          this.$router.push("/freelancer/dashboard");
          break;
        case "employer":
          this.$router.push("/employer/dashboard");
          break;
        default:
          this.$router.push("/panel/dashboard");
      }
    },
    handleTimer() {
      if (this.step === 2 && this.timer > 0) {
        this.timer--;
      }
    },
    resendConfirmCode() {
      this.timer = 119;
    },
    goToNextStep(step, role = "employer") {
      this.step = step;
      this.registerForm.role = role;
    },
    handlePersonality(personality) {
      this.personality = personality;
    },
    backToPrevStep(step) {
      this.step = step;
    },
    registration() {
      const body = {
        first_name: this.registerForm.firstName,
        last_name: this.registerForm.lastName,
        phone: this.registerForm.phone,
        code: this.registerForm.OTPCode,
        role: this.registerForm.role
      };
      console.log(body);
      AuthService.register(body).then(res => {
        console.log(res);
      });
    }
  },
  created() {}
};
