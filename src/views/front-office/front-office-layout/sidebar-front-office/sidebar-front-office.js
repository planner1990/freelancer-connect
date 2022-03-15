import { mapActions, mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
import {
  AuthService,
  profileServices,
  freelancerServices
} from "@/core/services";

export default {
  name: "sidebar-front-office",
  components: {},
  props: [],

  data: () => ({
    baseURL: "https://connecta.ir",
    show: false,
    mini: false,
    toggle: false,
    user: {},
    role: "",
    profileImage: "",
    selectedItem: 0,
    items: [
      {
        text: "navbar.browseProjects",
        route: "/browse-projects",
        icon: "mdi-book-open-variant"
      }
    ]
  }),
  computed: {
    ...mapGetters({
      drawerFront: types.GET_DRAWER_FRONT
    }),
    drawerState: {
      get() {
        if (this.$vuetify.breakpoint.smAndDown) {
          return this.drawerFront;
        } else {
          return true;
        }
      },
      set(val) {
        this.drawerAction(val);
      }
    }
  },
  watch: {
    $route(to) {
      if (to.name === "home") {
        this.items = [
          // {
          //   text: "navbar.browseServices",
          //   route: "/browse-services",
          //   icon: "mdi-order-bool-ascending-variant"
          // },
          {
            text: "navbar.browseProjects",
            route: "/browse-projects",
            icon: "mdi-book-open-variant"
          }
        ];
      } else {
        this.items = [
          { text: "navbar.home", route: "/", icon: "mdi-home" },
          // {
          //   text: "navbar.browseServices",
          //   route: "/browse-services",
          //   icon: "mdi-order-bool-ascending-variant"
          // },
          {
            text: "navbar.browseProjects",
            route: "/browse-projects",
            icon: "mdi-book-open-variant"
          }
        ];
      }
    }
  },
  created() {},
  mounted() {
    this.getAssignedRole();
  },
  methods: {
    ...mapActions({
      drawerAction: types.ACTION_DRAWER_FRONT
    }),
    onClickOutside() {
      if (this.drawerFront === false) {
        this.drawerAction();
      }
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
    }
  }
};
