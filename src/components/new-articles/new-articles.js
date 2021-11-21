import { mapActions, mapGetters } from "vuex";
import * as types from "../../shared/store/types";
import projectsService from "../../core/services/modules/projectsService";

export default {
  name: "new-articles",
  components: {},
  props: ["isService"],
  data() {
    return {
      model: 0,
      // pageCount: 20,
      page: 1,
      // totalPage: 10,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      test: require("../../assets/image/connecta-logo-2.png")
    };
  },
  computed: {
    ...mapGetters({
      getBrowseServiceData: types.browseServiceData.getters.BROWSE_SERVICE_GET
    }),
    showServices() {
      let serviceListItems = [];
      if (Object.entries(this.getBrowseServiceData).length > 0) {
        this.getBrowseServiceData.data.map(item => {
          serviceListItems.push({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.min_price,
            image: item?.attachments,
            username: item.username
          });
        });
        return serviceListItems;
      }
    },
    totalPage() {
      if (Object.entries(this.getBrowseServiceData).length > 0) {
        return Math.ceil(this.getBrowseServiceData.pagination.total / 5);
      }
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      setBrowseServiceData:
        types.browseServiceData.actions.BROWSE_SERVICE_ACTION
    }),
    changePage(currentPage) {
      const options = {
        page: currentPage,
        perPage: 10
      };
      projectsService.getAllServices(options).then(res => {
        this.page = currentPage;
        this.setBrowseServiceData(res.data.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
    goToDetail(id) {
      if (this.isService === true) {
        this.$router.push(`/service-details/${id}`);
      }
    },
    goToPublicProfile() {
      this.$router.push("/public-profile");
    }
  }
};
