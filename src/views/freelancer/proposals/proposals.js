import ProjectList from "../../../components/project-list/index";
import DashboardCard from "../../../components/dashboardCard/index";
import ProposalsTable from "../../../components/proposals-table/index";
import freelancerServices from "../../../core/services/modules/freelancerServices";
export default {
  name: "proposals",
  components: { ProjectList, DashboardCard, ProposalsTable },
  props: [],
  data() {
    return {
      dialog: false,
      simpleDialogData: {
        buttonTitle: "حذف پروژه",
        header: "آیا می خواهید پروژه را حذف کنید؟",
        rejectTitle: "خیر",
        confirmTitle: "بله"
      },
      headerProposalTable: [
        {
          text: "نام پروژه",
          align: "center",
          sortable: false,
          value: "content"
        },
        {
          text: "توضیحات",
          align: "center",
          sortable: false,
          value: "content"
        },
        {
          text: "تاریخ انتشار",
          value: "updated_at",
          sortable: false,
          align: "center"
        },
        { text: "وضعیت", value: "status", sortable: false, align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataProposalTable: []
    };
  },
  computed: {},
  mounted() {
    this.getAllFreelancerProposals();
  },
  methods: {
    redirectToEditJob() {
      this.$router.push({ name: "edit-project" }).catch(() => {});
    },
    getAllFreelancerProposals() {
      freelancerServices.getAllProposals().then(res => {
        this.dataProposalTable = res.data.data;
      });
    }
  },
  watch: {}
};
