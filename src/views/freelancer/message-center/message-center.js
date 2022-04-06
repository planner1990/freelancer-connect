import DashboardCard from "../../../components/dashboardCard/index";
import { freelancerServices } from "../../../core/services";
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
      freelancerServices.showMessage(params).then(res => {
        this.messagesList = res.data?.data.data;
      });
    }
  }
};
