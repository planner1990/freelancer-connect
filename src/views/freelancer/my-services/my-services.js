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
      dialog: false,
      serviceId: null,
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
        },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
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
    },
    closeDialog() {
      this.dialog = false;
    },
    deleteService() {
      const body = {
        service_id: this.serviceId
      };
      freelancerServices.deleteService(body).then(() => {
        this.showMyServices();
        this.closeDialog();
      });
    },
    getServiceId(id) {
      this.serviceId = id;
    }
  }
};
