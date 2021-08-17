import DashboardCard from "../../../../components/dashboardCard/index";
import projectsService from "../../../../core/services/modules/projectsService";
import ProjectList from "../../../../components/project-list/index";
import { mapActions } from "vuex";
import * as types from "../../../../shared/store/types";
export default {
  name: "pending-projects-employer",
  components: { DashboardCard, ProjectList },
  props: [],
  mixins: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      page: 1,
      totalData: null,
      status: "pending",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters"
      ],
      simpleDialogData: {
        buttonTitle: "حذف پروژه",
        header: "آیا می خواهید پروژه را حذف کنید؟",
        rejectTitle: "خیر",
        confirmTitle: "بله"
      },
      projectListItems: []
    };
  },
  computed: {},
  mounted() {
    this.getOngoingProject();
  },
  methods: {
    ...mapActions({
      setPaginationData: types.paginationData.actions.PAGINATION_ACTION
    }),
    getOngoingProject() {
      const options = {
        status: this.status,
        page: 1,
        perPage: 5
      };
      projectsService.employerProjectStatus(options).then(res => {
        this.setPaginationData(res.data.data);
      });
    }
  }
};
