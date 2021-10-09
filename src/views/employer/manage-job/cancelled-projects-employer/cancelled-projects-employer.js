import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
export default {
  name: "cancelled-projects-employer",
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
      headersUserManagement: [
        {
          text: "نام پروژه",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "وضعیت پروژه",
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
            title: "سئو سایت",
            src: "https://picsum.photos/id/11/500/300",
            price: "۱۰.۰۰۰.۰۰۰ تومان"
          },
          serviceStatus: ["جاری شدن پروژه"],
          queue: "پروژه ناتمام"
        },
        {
          title: {
            title: "گوگل آنالتیکس",
            src: "https://picsum.photos/id/732/500/300",
            price: "۲.۰۰۰.۰۰۰ تومان"
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
