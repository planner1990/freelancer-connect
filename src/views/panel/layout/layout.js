import appBar from "./app-bar/index";
import navigationDrawer from "./navigation-drawer/index";
import panelFooter from "./footer/index";
import transitionPage from "../../../components/transitionPage/index";
export default {
  name: "layout",
  components: { appBar, navigationDrawer, panelFooter, transitionPage },
  data() {
    return {
      tourCallbacks: {
        onFinish: this.onFinishStepsCallback
      },
      steps: [
        {
          target: '[data-v-step="0"]', // We're using document.querySelector() under the hood
          header: {
            title: "Get Started"
          },
          content: `Discover <strong>Vue Tour</strong>!`
        },
        {
          target: '[data-v-step="1"]',
          content: "An awesome plugin made with Vue.js!"
        },
        {
          target: '[data-v-step="2"]',
          content:
            "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
          params: {
            placement: "top" // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          }
        }
      ]
    };
  },
  computed: {},
  mounted() {
    this.launchTour();
  },
  methods: {
    launchTour() {
      const tourStatus = localStorage.getItem("tour_status");
      if (tourStatus !== "off") {
        this.$tours["myTour"].start();
      } else {
        this.$tours["myTour"].finish();
      }
    },
    onFinishStepsCallback() {
      localStorage.setItem("tour_status", "off");
    }
  }
};
