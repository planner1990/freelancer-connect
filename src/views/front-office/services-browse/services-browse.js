import HomePageHero from "../../../components/home-page-hero/index";
import NewArticles from "../../../components/new-articles/index";
import SideFilter from "../../../components/side-filter/index";
import projectsService from "../../../core/services/modules/projectsService";
import { mapActions } from "vuex";
import * as types from "../../../shared/store/types";
export default {
  name: "services-browse",
  components: { HomePageHero, NewArticles, SideFilter },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.getAllServicesList();
  },
  methods: {
    ...mapActions({
      setBrowseServiceData:
        types.browseServiceData.actions.BROWSE_SERVICE_ACTION
    }),
    getAllServicesList() {
      projectsService.getAllServices().then(res => {
        this.setBrowseServiceData(res.data.data);
      });
    }
  }
};
