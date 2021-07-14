
export default {
  name: "table-dashboard",
  components: {},
  props: ["headersUserManagement", "dataUserManagement"],
  data() {
    return {
      page: 1,
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
    }
  }
};
