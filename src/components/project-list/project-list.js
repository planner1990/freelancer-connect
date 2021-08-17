import DialogDashboard from "../../components/dialog-dashboard/index";
import { mapActions, mapGetters } from "vuex";
import * as types from "../../shared/store/types";
import thousandMask from "../../shared/mixins/thousandMask";
import projectsService from "../../core/services/modules/projectsService";
export default {
  name: "project-list",
  components: { DialogDashboard },
  props: ["simpleDialogData", "status"],
  data() {
    return {
      dialog: false,
      pageCount: 5,
      page: 1
    };
  },
  computed: {
    ...mapGetters({
      getPaginationData: types.paginationData.getters.PAGINATION_GET
    }),
    showProjects() {
      let projectListItems = [];
      if (Object.entries(this.getPaginationData).length > 0) {
        this.getPaginationData.projects.map(item => {
          projectListItems.push({
            id: item.id,
            title: item.title,
            name: item.description,
            amount: thousandMask.methods.numberWithCommas(
              Math.round(item.price)
            ),
            time: item["project_duration"].description,
            expirationStatus: item.status
          });
        });
        return projectListItems;
      }
    },
    totalPage() {
      if (Object.entries(this.getPaginationData).length > 0) {
        return Math.ceil(this.getPaginationData.pagination.total / 5);
      }
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      setPaginationData: types.paginationData.actions.PAGINATION_ACTION
    }),
    redirectToEditJob() {
      this.$router.push({ name: "edit-project" }).catch(() => {});
    },
    changePage(currentPage) {
      const options = {
        status: this.status,
        page: currentPage,
        perPage: 5
      };
      projectsService.employerProjectStatus(options).then(res => {
        this.page = currentPage;
        this.setPaginationData(res.data.data);
      });
    }
  },
  watch: {}
};
