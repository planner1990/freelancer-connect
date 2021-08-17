import TransitionPage from "../transitionPage/index";

export default {
  name: "login-comp",
  components: { TransitionPage },
  props: [],
  mixins: [],
  data() {
    return {};
  },
  computed: {},

  mounted() {},
  methods: {
    /*...mapActions({
      checkIsAuth: types.ACTION_CHECK_IS_AUTH
    }),*/
    onSubmit(evt) {
      evt.preventDefault();
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
    }
  },
  created() {}
};
