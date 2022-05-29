import { mapActions, mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
import customizeTheme from "@/components/cotumizeTheme/index";
import {
  AuthService,
  profileServices,
  freelancerServices
} from "@/core/services";

export default {
  name: "navbar",
  components: { customizeTheme },

  props: [],
  data: () => ({
    showSidebar: false,
    baseURL: "https://connecta.ir",
    selectedItem: 0,
    items: [
      { text: "navbar.home", route: "/" },
      { text: "navbar.browseProjects", route: "/browse-projects" }
    ],
    scrollPosition: null,
    user: {},
    role: "",
    profileImage: "",
    routeName: "",
    models: {
      base: false,
      conditional: false
    }
  }),
  computed: {
    ...mapGetters({
      drawerFront: types.GET_DRAWER_FRONT
    }),
    getDataDrawerFront() {
      return this.drawerFront;
    }
  },
  watch: {
    $route(to) {
      this.routeName = to.name;
      if (to.name === "home") {
        this.items = [
          { text: "navbar.browseProjects", route: "/browse-projects" }
        ];
      } else {
        this.items = [
          { text: "navbar.home", route: "/" },
          { text: "navbar.browseProjects", route: "/browse-projects" }
        ];
      }
    }
  },
  mounted() {
    this.getInnerWidth();
    window.addEventListener("scroll", this.updateScroll);
    this.getAssignedRole();
    this.getCurrentRoute();
  },
  methods: {
    ...mapActions({
      drawerAction: types.ACTION_DRAWER_FRONT
    }),
    drawer() {
      this.drawerAction();
    },
    getCurrentRoute() {
      this.routeName = this.$route.name;
      if (this.routeName === "home") {
        this.items = [
          { text: "navbar.browseProjects", route: "/browse-projects" }
        ];
      } else {
        this.items = [
          { text: "navbar.home", route: "/" },
          { text: "navbar.browseProjects", route: "/browse-projects" }
        ];
      }
    },
    // onClickOutside(e) {
    //   e.preventDefault();
    // },
    // closeConditional(e) {
    //   e.preventDefault();
    //   if (this.getDataDrawerFront === true) {
    //     this.drawerAction();
    //   }
    // },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    myEventHandler(e) {
      this.showSidebar = e.target.innerWidth <= 968;
    },
    getInnerWidth() {
      this.showSidebar = window.innerWidth <= 968;
    },
    goToCreateProject() {
      this.$router.push("/create-project");
    },
    getAssignedRole() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        AuthService.getAssignedRole().then(res => {
          this.role = res.data.data.role;
          this.showProfile(this.role);
        });
      }
    },
    showProfile(role) {
      if (role === "employer") {
        profileServices.employerGetProfile().then(res => {
          this.user = res.data.data.user;
          this.profileImage = this.user.profile.avatar;
        });
      } else if (role === "freelancer") {
        freelancerServices.showProfile().then(res => {
          this.user = res.data.data.user;
          this.profileImage = this.user.profile.avatar;
        });
      }
    },
    goToDashboard(role) {
      if (role === "employer") {
        this.$router.push("/employer/profile-setting");
      } else if (role === "freelancer") {
        this.$router.push("/freelancer/profile-setting");
      }
    },
    logout() {
      localStorage.removeItem("accessToken");
      this.role = "";
      this.user = {};
      this.$router.push("/");
    },
    goToHome() {
      this.$router.push("/");
    }
  },
  created() {
    this.getInnerWidth();
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
    window.addEventListener("scroll", this.updateScroll);
  }
};
