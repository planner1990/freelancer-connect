import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
import freelancerServices from "../../../core/services/modules/freelancerServices";
import transitionPage from "../../../components/transitionPage/index";
export default {
  name: "ongoing-projects",
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
    redirectToProjectDetail(id, proposalId) {
      this.$router.push({
        path: `ongoing-projects/${id}/progress-section`,
        query: { proposalId }
      });
    },
    getOngoingProjects() {
      const options = {
        status: "ongoing",
        page: 1,
        perPage: 5
      };
      freelancerServices.getFilteredProjects(options).then(res => {
        this.indexProjectsList = res.data.data.projects;
        this.paginationData = res.data.data.pagination;
      });
    },
    changePage(currentPage) {
      const options = {
        status: "ongoing",
        page: currentPage,
        perPage: 5
      };
      freelancerServices.getFilteredProjects(options).then(res => {
        this.indexProjectsList = res.data.data.projects;
        this.page = currentPage;
      });
    }
  }
};
