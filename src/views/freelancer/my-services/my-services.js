import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import freelancerServices from "@/core/services/modules/freelancerServices";
export default {
  name: "my-services",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      selected: [],
      valid: true,
      name: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      headersUserManagement: [
        {
          text: "نام خدمات",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "تاریخ ایجاد",
          value: "createAt",
          sortable: false,
          align: "center"
        },
        {
          text: "توضیحات",
          value: "description",
          sortable: false,
          align: "center"
        },
        { text: "وضعیت", value: "status", sortable: false, align: "center" },
        {
          text: "پیشنهادات دریافت شده",
          value: "numOfJobOffer",
          sortable: false,
          align: "center"
        }
      ],
      dataUserManagement: []
    };
  },
  computed: {},
  mounted() {
    this.showMyServices();
  },
  methods: {
    showMyServices() {
      freelancerServices.myServices().then(res => {
        this.dataUserManagement = res.data.data;
      });
    }
  }
};
