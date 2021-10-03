import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
import freelancerServices from "../../../core/services/modules/freelancerServices";
export default {
  name: "posted-services",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 30) || "Name must be less than 30 characters"
      ],
      headersUserManagement: [
        {
          text: "عنوان درخواستی",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "توضیحات",
          value: "description",
          sortable: false,
          align: "center"
        },
        { text: "صف", value: "updated_at", sortable: false, align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: []
    };
  },
  computed: {},
  mounted() {
    this.getJobOfferOngoingFreelancer();
  },
  methods: {
    getJobOfferOngoingFreelancer() {
      freelancerServices.indexJobOffers("pending").then(res => {
        this.dataUserManagement = res.data.data;
      });
    }
  }
};
