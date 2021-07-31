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
      { text: "navbar.companies", route: "/aa" },
      { text: "navbar.opportunities", route: "/aa" },
      { text: "navbar.resumeBuilder", route: "/aa" },
      { text: "navbar.knowYourself", route: "/aa" },
      { text: "navbar.morePowerful", route: "/aa" }
    ],
    scrollPosition: null
  }),
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    ...mapActions({
      drawerAction: types.ACTION_DRAWER
    }),
    drawer() {
      this.drawerAction();
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    myEventHandler(e) {
      console.log(e.target.innerWidth);
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
