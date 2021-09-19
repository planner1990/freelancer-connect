import employerServices from "../../../../../core/services/modules/employerServices";

export default {
  name: "proposal-detail-dialog",
  components: {},
  props: ["proposalId"],
  data() {
    return {
      valid: false,
      dialog: false,
      proposalForm: {}
    };
  },
  computed: {},
  mounted() {
    this.showEstimation();
  },
  methods: {
    showEstimation() {
      const serviceId = this.$route.query.serviceId;
      employerServices.showEstimation(serviceId).then(res => {
        this.proposalForm = res.data.data;
        this.dialog = false;
      });
    },
    rejectServiceEstimation() {
      const serviceId = this.$route.query.serviceId;
      employerServices.rejectServiceEstimation(serviceId).then(res => {
        this.proposalForm = res.data.data;
        this.dialog = false;
      });
    },
    confirmServiceEmployment() {
      const serviceId = this.$route.query.serviceId;
      employerServices.confirmServiceEmployment(serviceId).then(res => {
        this.proposalForm = res.data.data;
        this.dialog = false;
      });
    }
  }
};
