import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import freelancerServices from "@/core/services/modules/freelancerServices";
import transitionPage from "@/components/transitionPage/index";
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
      nameRules: [
        v => !!v || "لطفا نام خود را وارد کنید",
        v => (v && v.length <= 50) || "نام وارد شده باید بیش از ۵۰ کاراکتر باشد"
      ]
    };
  },
  computed: {},
  mounted() {
    this.getOngoingServices();
  },
  methods: {
    redirectToProjectDetail(id, serviceId) {
      this.$router.push({
        path: `ongoing-services/${id}/progress-section`,
        query: { serviceId }
      });
    },
    getOngoingServices() {
      // const options = {
      //   status: this.status,
      //   page: 1,
      //   perPage: 5
      // };
      freelancerServices.indexJobOffers("ongoing").then(res => {
        this.indexProjectsList = res.data.data;
      });
    }
  }
};
