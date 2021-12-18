import { mapActions } from "vuex";
import * as types from "../../../../shared/store/types";

import customizeTheme from "../../../../components/cotumizeTheme/index";

export default {
  name: "app-bar",
  components: { customizeTheme },

  props: [],
  data: () => ({
    items: [
      { text: "navbar.home", route: "/" },
      { text: "navbar.browseServices", route: "/browse-services" },
      { text: "navbar.browseProjects", route: "/browse-projects" }
    ],
    showSidebar: null,
    selectedItem: 0
  }),
  computed: {},
  mounted() {},
  methods: {
    ...mapActions({
      drawerAction: types.ACTION_DRAWER
    }),
    drawer() {
      this.drawerAction();
    },
    myEventHandler(e) {
      this.showSidebar = e.target.innerWidth <= 968;
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  }
};
