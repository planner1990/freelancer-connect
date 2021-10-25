import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
import freelancerServices from "../../../core/services/modules/freelancerServices";
import transitionPage from "../../../components/transitionPage/index";
export default {
  name: "ongoing-services",
  components: { DashboardCard, TableDashboard, transitionPage },
  props: [],
  data() {
    return {
      valid: true,
      name: "",
      pageCount: 5,
      page: 1,
      showSelect: true,
      indexProjectsList: [],
      totalPage: null,
      paginationData: null
    };
  },
  computed: {},
  mounted() {
    this.getOngoingProjects();
  },
  methods: {
    redirectToProjectDetail(id, estimationId) {
      this.$router.push({
        path: `ongoing-services/${id}/progress-section`,
        query: { estimationId }
      });
    },
    getOngoingProjects() {
      // const options = {
      //   status: "ongoing",
      //   page: 1,
      //   perPage: 5
      // };
      freelancerServices.getFilteredServices("ongoing").then(res => {
        this.indexProjectsList = res.data.data;
        this.paginationData = res.data.data?.pagination;
      });
    },
    changePage(currentPage) {
      const options = {
        status: "ongoing",
        page: currentPage,
        perPage: 5
      };
      freelancerServices.getFilteredServices(options).then(res => {
        this.indexProjectsList = res.data.data;
        this.page = currentPage;
      });
    }
  }
};
