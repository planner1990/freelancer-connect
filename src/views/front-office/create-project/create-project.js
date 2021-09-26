import TransitionPage from "../../../components/transitionPage/index";
export default {
  name: "create-project",
  components: { TransitionPage },
  props: [],
  data() {
    return {
      changeLang: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  }
};
