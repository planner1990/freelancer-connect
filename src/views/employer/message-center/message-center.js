import DashboardCard from "../../../components/dashboardCard/index";
import { employerServices } from "../../../core/services";
export default {
  name: "message-center",
  components: { DashboardCard },
  props: [],
  data() {
    return {
      messagesList: [],
      pageCount: 20,
      page: 1,
      totalPage: 10,
      paginationData: null
    };
  },
  computed: {},
  mounted() {
    this.showMessages();
  },
  methods: {
    showMessages() {
      const params = {
        page: 1,
        perPage: 15
      };
      employerServices.showMessageEmployer(params).then(res => {
        this.messagesList = res.data?.data.data;
        this.paginationData = res.data.data;
      });
    },
    changePage(currentPage) {
      const options = {
        page: currentPage,
        perPage: 15
      };
      employerServices.showMessageEmployer(options).then(res => {
        this.messagesList = res.data?.data.data;
        this.page = currentPage;
      });
    }
  }
};
