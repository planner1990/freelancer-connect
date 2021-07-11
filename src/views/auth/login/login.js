const loginComp = () => import("./../../../components/loginComp/index");

export default {
  name: "login",
  components: { loginComp },
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
