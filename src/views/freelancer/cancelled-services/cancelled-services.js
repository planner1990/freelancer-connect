import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
export default {
  name: "cancelled-services",
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
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters"
      ],
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
            title: "انجام کارهای بک اند با PHP",
            src: "https://picsum.photos/id/11/500/300",
            price: "200.000 تومان"
          },
          serviceStatus: ["جاری شدن پروژه"],
          queue: "پروژه ناتمام"
        },
        {
          title: {
            title: "طراحی UI",
            src: "https://picsum.photos/id/732/500/300",
            price: "350.000 تومان"
          },
          serviceStatus: ["جاری شدن پروژه"],
          queue: "پروژه ناتمام"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
