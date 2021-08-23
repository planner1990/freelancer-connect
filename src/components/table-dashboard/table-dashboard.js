export default {
  name: "table-dashboard",
  components: {},
  props: ["headersUserManagement", "dataUserManagement", "showSelect", "name"],
  data() {
    return {
      page: 1,
      e2: "پیش نویس",
      pageCount: 0,
      itemsPerPage: 8
    };
  },
  computed: {},
  mounted() {},
  methods: {
    editItem(item) {
      this.editedIndex = this.dataUserManagement.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

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
