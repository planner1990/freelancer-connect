import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
import employerServices from "../../../core/services/modules/employerServices";
export default {
  name: "my-projects",
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
          text: "نام پروژه",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "تاریخ ایجاد",
          value: "createAt",
          sortable: false,
          align: "center"
        },
        {
          text: "توضیحات",
          value: "description",
          sortable: false,
          align: "center"
        },
        { text: "وضعیت", value: "status", sortable: false, align: "center" },
        {
          text: "تعداد پیشنهادات دریافتی",
          value: "numOfJobOffer",
          sortable: false,
          align: "center"
        }
      ],
      dataUserManagement: []
    };
  },
  computed: {},
  mounted() {
    this.showMyProjects();
  },
  methods: {
    showMyProjects() {
      employerServices.myProjects().then(res => {
        this.dataUserManagement = res.data.data.projects;
      });
    }
  }
};
