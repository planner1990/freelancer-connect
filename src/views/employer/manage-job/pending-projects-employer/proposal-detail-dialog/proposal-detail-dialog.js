import { employerServices } from "@/core/services";

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
        durationList: [],
        prepayment: null
      },
      proposalRule: {
        duration: [v => !!v || "مدت زمان را مشخص کنید"],
        price: [
          v => !!v || "لطفا مبلغ را تعیین کنید",
          v =>
            (v && v.length >= 3) || "مبلغ مورد نظر باید بیش از ۳ کاراکتر باشد"
        ],
        minPrice: [
          v => !!v || "لطفا حداقل مبلغ را مشخص کنید",
          v =>
            (v && v.length >= 3) || "مبلغ مورد نظر باید بیش از ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات مورد نظر باید بیش از ۲۰ کاراکتر باشد"
        ]
      }
    };
  },
  computed: {},
  mounted() {
    this.showProposalById();
  },
  methods: {
    proposalAction() {
      // const body = {
      //   proposal_id: this.proposalId,
      //   status: status
      // };
      employerServices.confirmProposalByEmployer(this.proposalId).then(() => {
        this.dialog = false;
      });
    },
    inquiryPayment() {
      this.$router.push({
        path: `/employer/pending-projects/${this.proposalId}/payment`
      });
      this.dialog = false;
    },
    rejectProposal(status) {
      const body = {
        proposal_id: this.proposalId,
        status: status
      };
      employerServices.proposalAction(body).then(() => {
        this.dialog = false;
      });
    },
    showProposalById() {
      employerServices.showProposalById(this.proposalId).then(res => {
        this.proposalForm = res.data.data;
      });
    },
    hireFreelancerByPrepayment() {
      if (
        this.proposalForm?.prepayment !== null &&
        Math.round(this.proposalForm?.prepayment) !== 0
      ) {
        this.inquiryPayment();
      } else {
        this.proposalAction();
      }
    }
  }
};
