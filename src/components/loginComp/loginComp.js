/*import { mapActions } from "vuex";
import * as types from "./../../store/types";*/

export default {
  name: "login-comp",
  components: {},
  props: [],
  mixins: [],
  data() {
    return {
      loading: false,
      signInLoading: false,
      username: "",
      password: "",
      errors: []
    };
  },
  computed: {},

  mounted() {},
  methods: {
    /*...mapActions({
      checkIsAuth: types.ACTION_CHECK_IS_AUTH
    }),*/
    onSubmit(evt) {
      evt.preventDefault();
      this.loading = true;
      this.signInLoading = true;
      this.handleUsers(this.username);
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
      debugger;
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
    }
    /*showNotification() {
      let option = {
        body: "this is body of notification",
        icon: "/img/icons/android-96x196.png"
      };
      new Notification("hi this is from chaintracker", option);
    }*/
  }
};
