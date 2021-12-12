import TransitionPage from "@/components/transitionPage/index";
import stepperComponent from "@/components/stepper/index";
export default {
  name: "create-project",
  components: { TransitionPage, stepperComponent },
  props: [],
  data() {
    return {
      changeLang: false,
      step: 1
    };
  },
  computed: {},
  mounted() {},
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  },
  watch: {
    $route(to) {
      switch (to.name) {
        case "activity":
          this.step = 2;
          break;
        case "detail":
          this.step = 3;
          break;
        case "confirm-info":
          this.step = 4;
          break;
        case "name-description":
          this.step = 1;
          break;
        default:
          this.step = 1;
      }
    }
  }
};
