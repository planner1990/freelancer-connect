import DashboardCard from "../../../../components/dashboardCard/index";
import TableDashboard from "../../../../components/table-dashboard/index";
import ServiceEmploymentService from "../../../../core/services/modules/serviceEmploymentService";
export default {
  name: "posted-services-employer",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "لطفا نام را وارد کنید",
        v => (v && v.length <= 50) || "نام وارد شده باید بیش از ۵۰ کاراکتر باشد"
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
    this.showJobOfferOngoingEmployer();
  },
  methods: {
    showJobOfferOngoingEmployer() {
      ServiceEmploymentService.showJobOfferEmployer("pending").then(res => {
        this.dataUserManagement = res.data.data;
      });
    }
  }
};
