import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import transitionPage from "../../../../components/transitionPage/index";
import employerServices from "../../../../core/services/modules/employerServices";
export default {
  name: "ongoing-services-employer",
  components: { DashboardCard, TableDashboard, transitionPage },
  props: [],
  data() {
    return {
      valid: true,
      name: "",
      pageCount: 20,
      page: 1,
      totalPage: 10,
      paginationData: null,
      showSelect: true,
      indexProjectsList: []
    };
  },
  computed: {},
  mounted() {
    this.getOngoingProjects();
  },
  methods: {
    redirectToProjectDetail(id, estimationId) {
      this.$router.push({
        path: `ongoing-services/${id}/service-detail`,
        query: { estimationId }
      });
    },
    getOngoingProjects() {
      const options = {
        status: "ongoing",
        page: 1,
        per_page: 10
      };
      employerServices.getIndexServices(options).then(res => {
        this.indexProjectsList = res.data.data.data;
        this.paginationData = res.data.data;
      });
    },
    changePage(currentPage) {
      const options = {
        status: "ongoing",
        page: currentPage,
        per_page: 10
      };
      employerServices.getIndexServices(options).then(res => {
        this.indexProjectsList = res.data.data.data;
        this.page = currentPage;
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }
};
