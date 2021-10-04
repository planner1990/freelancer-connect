import DashboardCard from "../../../../components/dashboardCard/index";
import TableDashboard from "../../../../components/table-dashboard/index";
export default {
  name: "completed-services-employer",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      // nameRules: [
      //   v => !!v || "Name is required",
      //   v => (v && v.length <= 50) || "Name must be less than 10 characters"
      // ],
      headersUserManagement: [
        {
          text: "نام خدمات",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "وضعیت خدمات",
          value: "serviceStatus",
          sortable: false,
          align: "center"
        },
        { text: "صف", value: "queue", sortable: false, align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: [
        {
          title: {
            title: "طراحی UI & UX",
            src: "https://picsum.photos/id/11/500/300",
            price: "۹۵۰.۰۰۰ تومان"
          },
          serviceStatus: ["تکمیل خدمات"],
          queue: "اتمام خدمات"
        },
        {
          title: {
            title: "پیاده سازی طرح UI",
            src: "https://picsum.photos/id/732/500/300",
            price: "350.000 تومان"
          },
          serviceStatus: ["تکمیل خدمات"],
          queue: "اتمام خدمات"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
