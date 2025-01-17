import DashboardCard from "../../../../components/dashboardCard/index";
import ProjectList from "../../../../components/project-list/index";
import DialogDashboard from "../../../../components/dialog-dashboard/index";
import employerServices from "../../../../core/services/modules/employerServices";
import transitionPage from "../../../../components/transitionPage/index";
export default {
  name: "pending-projects-employer",
  components: { DashboardCard, ProjectList, DialogDashboard, transitionPage },
  props: [],
  mixins: [],
  data() {
    return {
      dialog: false,
      pageCount: 5,
      page: 1,
      showSelect: true,
      indexProjectsList: [],
      paginationData: null,
      totalData: null,
      status: "pending",
      // nameRules: [
      //   v => !!v || "Name is required",
      //   v => (v && v.length <= 50) || "Name must be less than 10 characters"
      // ],
      projectListItems: [
        {
          id: 1,
          name: "name",
          title: "ssssss",
          amount: "در انتظار تایید کارفرما",
          time: "29/2/1400",
          expirationStatus: "منقضی شده"
        }
      ]
    };
  },
  computed: {
    totalPage() {
      return 3;
    }
  },
  mounted() {
    this.getOngoingProject();
  },
  methods: {
    getOngoingProject() {
      const options = {
        status: this.status,
        page: 1,
        perPage: 5
      };
      employerServices.getIndexProjects(options).then(res => {
        this.indexProjectsList = res.data.data?.projects;
        this.paginationData = res.data.data?.pagination;
      });
    },
    changePage(currentPage) {
      const options = {
        status: this.status,
        page: currentPage,
        perPage: 5
      };
      employerServices.getIndexProjects(options).then(res => {
        this.indexProjectsList = res.data.data?.projects;
        this.page = currentPage;
      });
    },
    redirectToProjectDetail(id) {
      this.$router.push({ path: `pending-projects/${id}/project-detail` });
    }
  }
};
