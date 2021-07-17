import DashboardCard from "../../../../components/dashboardCard/index";
import HeaderSection from "../../../../components/header-section/index";
import FileInputDashboard from "../../../../components/file-input-dashboard/index";
export default {
  name: "account-setting",
  components: { DashboardCard, HeaderSection, FileInputDashboard },
  props: [],
  data() {
    return {
      titleCard: "ویرایش پروژه",
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: "",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      picker: false,
      model: ["گوگل آنالتیکس"],
      search: null,
      content: "<h3 style='text-align: right'>توضیحات در مورد پروژه...</h3>",
      files: []
    };
  },
  computed: {},
  mounted() {},
  methods: {
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
