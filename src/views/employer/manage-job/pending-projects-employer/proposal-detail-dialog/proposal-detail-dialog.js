import employerServices from "../../../../../core/services/modules/employerServices";

export default {
  name: "proposal-detail-dialog",
  components: {},
  props: ["proposalId"],
  data() {
    return {
      valid: false,
      dialog: false,
      proposalForm: {
        project_duration_id: "",
        price: "",
        minPrice: "",
        description: "",
        attachmentId: [],
        durationList: []
      },
      proposalRule: {
        duration: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        price: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        minPrice: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        description: [
          v => !!v || "Description is required",
          v => (v && v.length >= 20) || "Description must be more than 20 "
        ]
      }
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
