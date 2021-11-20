import DashboardCard from "@/components/dashboardCard/index";
export default {
  name: "bank-card",
  components: { DashboardCard },
  props: [],
  data() {
    return {
      dialog: false,
      valid: false,
      title: "",
      sheba: "",
      cardId: "",
      accountInfo: []
    };
  },
  computed: {},
  mounted() {},
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    resetForm() {
      this.$refs.form.reset();
    },
    addToBankCard() {
      this.accountInfo.push({
        title: this.title,
        sheba: this.sheba,
        cardId: this.cardId
      });
      this.dialog = false;
      this.resetForm();
    }
  }
};
