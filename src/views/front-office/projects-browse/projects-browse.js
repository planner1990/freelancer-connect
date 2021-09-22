import HomePageHero from "../../../components/home-page-hero/index";
import NewArticles from "../../../components/new-articles/index";
import SideFilter from "../../../components/side-filter/index";
import EmployerProjects from "../../../components/employer-projects/index";
import projectsService from "../../../core/services/modules/projectsService";
import { mapActions } from "vuex";
import * as types from "../../../shared/store/types";
export default {
  name: "projects-browse",
  components: { HomePageHero, NewArticles, SideFilter, EmployerProjects },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.getAllProjectList();
  },
  methods: {
    ...mapActions({
      setBrowseProjectData:
        types.BrowseProjectData.actions.BROWSE_PROJECT_ACTION
    }),
    getAllProjectList() {
      projectsService.getAllProjects().then(res => {
        this.setBrowseProjectData(res.data.data);
      });
    }
  }
};
