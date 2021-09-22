export default {
  name: "proposals-table",
  components: {},
  props: ["headerProposalTable", "dataProposalTable"],
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialog: false,
      valid: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    deleteItem(item) {
      this.editedIndex = this.dataUserManagement.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    confirmChangeServiceStatus() {
      console.log("confirmChangeServiceStatus");
    }
  }
};
