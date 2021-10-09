import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import transitionPage from "../../../../components/transitionPage/index";
import employerServices from "../../../../core/services/modules/employerServices";
export default {
  name: "ongoing-projects-employer",
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
      totalPage: null
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
      employerServices.getIndexProjects(options).then(res => {
        this.indexProjectsList = res.data.data.projects;
      });
    }
  }
};
