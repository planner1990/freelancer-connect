import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import { freelancerServices } from "@/core/services";
export default {
  name: "completed-services",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      valid: true,
      name: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      totalPage: 10,
      paginationData: null,
      indexProjectsList: [],
      headersUserManagement: [
        {
          text: "نام پروژه",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "توضیحات",
          align: "center",
          sortable: false,
          value: "description"
        },
        {
          text: "عنوان خدمت",
          value: "service_title",
          sortable: false,
          align: "center"
        },
        {
          text: "تاریخ",
          value: "created_at",
          sortable: false,
          align: "center"
        }
      ],
      dataUserManagement: []
    };
  },
  computed: {},
  mounted() {
    this.getOngoingProjects();
  },
  methods: {
    getOngoingProjects() {
      const options = {
        status: "completed",
        page: 1,
        perPage: 5
      };
      freelancerServices.getFilteredServices(options).then(res => {
        this.indexProjectsList = res.data.data.data;
        this.paginationData = res.data.data;
      });
    },
    changePage(currentPage) {
      const options = {
        status: "completed",
        page: currentPage,
        perPage: 5
      };
      freelancerServices.getFilteredServices(options).then(res => {
        this.indexProjectsList = res.data.data;
        this.page = currentPage;
      });
    }
  }
};
