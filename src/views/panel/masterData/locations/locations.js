import DashboardCard from "../../../../components/dashboardCard/index";
import TableDashboard from "../../../../components/table-dashboard/index";
export default {
  name: "locations",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      files: [],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters"
      ],
      headersUserManagement: [
        {
          text: "آیکون",
          align: "center",
          sortable: false,
          value: "icon"
        },
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
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt1",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt2",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt3",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt4",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt5",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt6",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt7",
          slug: "test@ernyka.com"
        },
        {
          icon: "https://picsum.photos/id/11/500/300",
          name: "Frozen Yogurt8",
          slug: "test@ernyka.com"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    resetValidation() {
      // this.$refs.form.resetValidation();
    }
  }
};
