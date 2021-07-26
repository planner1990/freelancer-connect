import DialogDashboard from "../../components/dialog-dashboard/index";
export default {
  name: "project-list",
  components: { DialogDashboard },
  props: ["simpleDialogData", "projectListItems"],
  data() {
    return {
      dialog: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    redirectToEditJob() {
      this.$router.push({ name: "edit-project" }).catch(() => {});
    }
  },
  watch: {}
};
