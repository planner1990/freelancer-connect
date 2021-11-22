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
        v => !!v || "لطفا نام خود را وارد کنید",
        v => (v && v.length <= 30) || "نام وارد شده باید بیش از ۳۰ کاراکتر باشد"
      ],
      headersUserManagement: [
        {
          text: "عنوان خدمت",
          align: "center",
          sortable: false,
          value: "service_title"
        },
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
        {
          text: "تاریخ ثبت شده",
          value: "updated_at",
          sortable: false,
          align: "center"
        },
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
