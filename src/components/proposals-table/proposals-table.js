import { freelancerServices } from "@/core/services";

export default {
  name: "proposals-table",
  components: {},
  props: ["headerProposalTable", "dataProposalTable"],
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      ProposalId: null,
      dialog: false,
      valid: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    deleteItem(item) {
      console.log(item);
      // this.editedIndex = this.dataUserManagement.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
      freelancerServices
        .deleteProposalRequest(item)
        .then(() => {
          this.dialog = false;
        })
        .catch(() => {
          this.dialog = false;
        });
    },
    setIdForDeleteRequest(id) {
      this.ProposalId = id;
    },
    confirmChangeServiceStatus() {
      console.log("confirmChangeServiceStatus");
    }
  }
};
