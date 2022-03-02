import { mapActions, mapGetters } from "vuex";
import * as types from "../../shared/store/types";
import { projectsService } from "@/core/services";

export default {
  name: "employer-projects",
  components: {},
  props: [],
  data() {
    return {
      length: 3,
      page: 1
    };
  },
  computed: {
    ...mapGetters({
      getBrowseProjectData: types.BrowseProjectData.getters.BROWSE_PROJECT_GET
    }),
    showServices() {
      let serviceListItems = [];
      if (Object.entries(this.getBrowseProjectData).length > 0) {
        this.getBrowseProjectData.data.map(item => {
          serviceListItems.push({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.min_price,
            image: item["attachments"],
            username: item.username,
            skills: item.skills,
            createAt: item.created_at
          });
        });
        return serviceListItems;
      }
    },
    totalPage() {
      if (Object.entries(this.getBrowseProjectData).length > 0) {
        return Math.ceil(this.getBrowseProjectData.pagination.total / 5);
      }
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      setBrowseProjectData:
        types.BrowseProjectData.actions.BROWSE_PROJECT_ACTION
    }),
    changePage(currentPage) {
      const options = {
        page: currentPage,
        perPage: 10
      };
      projectsService.getAllProjects(options).then(res => {
        this.page = currentPage;
        this.setBrowseProjectData(res.data.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
    goToDetail(id) {
      this.$router.push(`/project-details/${id}`);
    },
    goToSearchPage(skill) {
      this.$router.push({
        path: `/search`,
        query: { value: skill }
      });
    }
  }
};
