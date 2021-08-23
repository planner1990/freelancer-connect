import { mapActions } from "vuex";
import * as types from "../../../../shared/store/types";

import customizeTheme from "../../../../components/cotumizeTheme/index";

export default {
  name: "navbar",
  components: { customizeTheme },

  props: [],
  data: () => ({
    showSidebar: null,
    selectedItem: 0,
    items: [
      { text: "navbar.home", route: "/" },
      { text: "navbar.blog", route: "/" },
      { text: "navbar.browseServices", route: "/browse-services" },
      { text: "navbar.browseProjects", route: "/browse-projects" }
    ],
    scrollPosition: null
  }),
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    ...mapActions({
      drawerAction: types.ACTION_DRAWER_FRONT
    }),
    drawer() {
      this.drawerAction();
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
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
