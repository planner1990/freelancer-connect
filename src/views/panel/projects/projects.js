import DashboardCard from "../../../components/dashboardCard/index";
import DialogDashboard from "../../../components/dialog-dashboard/index";
export default {
  name: "projects",
  components: { DashboardCard, DialogDashboard },
  props: [],
  data() {
    return {
      dialog: false,
      titleCard: "پروژه ها",
      componentData: {
        buttonTitle: "حذف پروژه",
        header: "آیا می خواهید پروژه را حذف کنید؟",
        rejectTitle: "خیر",
        confirmTitle: "بله"
      }
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
