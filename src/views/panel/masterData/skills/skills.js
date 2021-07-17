import DashboardCard from "../../../../components/dashboardCard/index";
import TableDashboard from "../../../../components/table-dashboard/index";
export default {
  name: "skills",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters"
      ],
      headersUserManagement: [
        {
          text: "نام",
          align: "center",
          sortable: false,
          value: "name"
        },
        { text: "اسلاگ", value: "slug", sortable: false, align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: [
        {
          name: "Frozen Yogurt",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt2",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt3",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt4",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt5",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt6",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt7",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt8",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt9",
          slug: "test@ernyka.com"
        },
        {
          name: "Frozen Yogurt10",
          slug: "test@ernyka.com"
        }
      ]
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
