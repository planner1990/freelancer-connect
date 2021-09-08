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
    this.showProposalById();
  },
  methods: {
    proposalAction(status) {
      const body = {
        proposal_id: this.proposalId,
        status: status
      };
      employerServices.proposalAction(body).then(res => {
        console.log(res);
        this.dialog = false;
      });
    },
    showProposalById() {
      employerServices.showProposalById(this.proposalId).then(res => {
        this.proposalForm = res.data.data;
      });
    }
  }
};
