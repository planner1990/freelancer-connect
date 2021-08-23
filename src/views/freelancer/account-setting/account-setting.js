import DashboardCard from "../../../components/dashboardCard/index";
import HeaderSection from "../../../components/header-section/index";
export default {
  name: "account-setting",
  components: { DashboardCard, HeaderSection },
  props: [],
  data() {
    return {
      valid: false,
      items: ["انگلیسی", "ترکی", "عربی", "فارسی"],
      model: ["فارسی"],
      search: null,
      select: "",
      switch1: false,
      email: "ernika@gmail.com",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      pass: ""
    };
  },
  computed: {},
  mounted() {},
  methods: {
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    }
  }
};
