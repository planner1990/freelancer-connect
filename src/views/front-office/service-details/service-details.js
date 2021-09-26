import ServiceMainInfo from "./service-main-info/index";
import ServiceSideInfo from "./service-side-info/index";
import projectsService from "../../../core/services/modules/projectsService";
import { AuthService } from "../../../core/services";
export default {
  name: "service-details",
  components: { ServiceMainInfo, ServiceSideInfo },
  props: [],
  data() {
    return {
      serviceDetailsById: {},
      role: ""
    };
  },
  computed: {},
  async mounted() {
    await this.detectRoleUser();
    await this.getServiceListById();
  },
  methods: {
    getServiceListById() {
      const id = this.$route.params.id;
      projectsService.getServiceById(id).then(res => {
        this.serviceDetailsById = res.data.data;
      });
    },
    detectRoleUser() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        AuthService.getAssignedRole().then(res => {
          this.role = res.data.data.role;
        });
      }
    }
  }
};
