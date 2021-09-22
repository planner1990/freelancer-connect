import DashboardCard from "../../../../../components/dashboardCard/index";
import ProjectList from "../../../../../components/project-list/index";
import DialogDashboard from "../../../../../components/dialog-dashboard/index";
import employerServices from "../../../../../core/services/modules/employerServices";
import headerSection from "../../../../../components/header-section/index";
import ProposalDetailDialog from "../proposal-detail-dialog/index";
export default {
  name: "project-detail",
  components: {
    DashboardCard,
    ProjectList,
    DialogDashboard,
    headerSection,
    ProposalDetailDialog
  },
  props: [],
  mixins: [],
  data() {
    return {
      pageCount: 5,
      page: 1,
      showSelect: true,
      indexProjectsList: [],
      totalData: null,
      status: "pending",
      projectDetails: {},
      proposalsList: [],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters"
      ],
      projectListItems: [
        {
          id: 1,
          name: "name",
          title: "ssssss",
          amount: "در انتظار تایید کارفرما",
          time: "29/2/1400",
          expirationStatus: "منقضی شده",
          status: "statusssssss"
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
    this.showDetailProject();
    this.getProposalsPerProject();
  },
  methods: {
    showDetailProject() {
      const id = this.$route.params.id;
      employerServices.projectShowById(id).then(res => {
        this.projectDetails = res.data.data;
      });
    },
    getProposalsPerProject() {
      const body = {
        project_id: this.$route.params.id
      };
      employerServices.getProposalsPerProject(body).then(res => {
        this.proposalsList = res.data.data;
      });
    },
    getOngoingProject() {
      const options = {
        status: this.status,
        page: 1,
        perPage: 5
      };
      employerServices.getIndexProjects(options).then(res => {
        this.indexProjectsList = res.data.data.projects;
      });
    },
    changePage(currentPage) {
      const options = {
        status: this.status,
        page: currentPage,
        perPage: 5
      };
      employerServices.getIndexProjects(options).then(res => {
        this.page = currentPage;
        console.log(res);
      });
    },
    redirectToEditJob() {
      this.$router.push({ name: "edit-project" }).catch(() => {});
    }
  }
};
