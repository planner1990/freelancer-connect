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
    changeRTL() {
      this.$vuetify.rtl = this.$vuetify.rtl !== true;
    }
  }
};
