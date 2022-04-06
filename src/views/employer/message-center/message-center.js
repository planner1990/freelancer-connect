import DashboardCard from "../../../components/dashboardCard/index";
import { employerServices } from "../../../core/services";
export default {
  name: "message-center",
  components: { DashboardCard },
  props: [],
  data() {
    return {
      messagesList: []
    };
  },
  computed: {},
  mounted() {
    this.showMessages();
  },
  methods: {
    showMessages() {
      const params = {
        page: 1
      };
      employerServices.showMessageEmployer(params).then(res => {
        this.messagesList = res.data?.data.data;
      });
    }
  }
};
