import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import employerServices from "@/core/services/modules/employerServices";
export default {
  name: "my-projects",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      dialog: false,
      valid: true,
      projectId: null,
      name: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      paginationData: null,
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
      const options = {
        page: 1,
        perPage: 10
      };
      employerServices.myProjects(options).then(res => {
        this.dataUserManagement = res.data.data?.projects;
        this.paginationData = res.data.data;
      });
    },
    changePage(currentPage) {
      const options = {
        page: currentPage,
        perPage: 10
      };
      employerServices.myProjects(options).then(res => {
        this.dataUserManagement = res.data.data?.data;
        this.page = currentPage;
      });
    },
    closeDialog() {
      this.dialog = false;
    },
    deleteService() {
      const body = {
        project_id: this.projectId
      };
      employerServices.deleteProject(body).then(() => {
        this.showMyServices();
        this.closeDialog();
      });
    },
    getProjectId(id) {
      this.projectId = id;
    }
  }
};
