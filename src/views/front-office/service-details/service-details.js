import ServiceMainInfo from "./service-main-info/index";
import ServiceSideInfo from "./service-side-info/index";
import projectsService from "../../../core/services/modules/projectsService";
export default {
  name: "service-details",
  components: { ServiceMainInfo, ServiceSideInfo },
  props: [],
  data() {
    return {
      serviceDetailsById: {}
    };
  },
  computed: {},
  mounted() {
    this.getServiceListById();
  },
  methods: {
    getServiceListById() {
      const id = this.$route.params.id;
      projectsService.getServiceById(id).then(res => {
        console.log(res);
        this.serviceDetailsById = res.data.data;
      });
    }
  }
};
