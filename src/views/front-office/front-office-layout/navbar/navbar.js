import { mapActions } from "vuex";
import * as types from "../../../../shared/store/types";

import customizeTheme from "../../../../components/cotumizeTheme/index";
import { AuthService } from "@/core/services";
import profileServices from "../../../../core/services/modules/profileServices";
import freelancerServices from "../../../../core/services/modules/freelancerServices";

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
    user: {},
    role: "",
    profileImage: ""
  }),
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.getAssignedRole();
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
      this.$router.push("/home");
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
    window.addEventListener("scroll", this.updateScroll);
  }
};
