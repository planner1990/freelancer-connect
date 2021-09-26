import { mapActions } from "vuex";
import * as types from "../../../../shared/store/types";

import customizeTheme from "../../../../components/cotumizeTheme/index";
import { AuthService } from "../../../../core/services";

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
    scrollPosition: null,
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com"
    }
  }),
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.showProfile();
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
    },
    goToCreateProject() {
      this.$router.push("/create-project");
    },
    showProfile() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        AuthService.showProfile().then(res => {
          console.log(res);
        });
      }
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  }
};
