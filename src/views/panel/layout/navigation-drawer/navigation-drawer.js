import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";

export default {
  name: "navigation-drawer",
  components: {},
  props: [],

  data: () => ({
    show: false,
    mini: false,
    toggle: false,
    logoutLoading: false,
    role: null,
    selected: [2],
    sidebarItems: [],
    admins: [
      ["Management", "mdi-account-group"],
      ["Settings", "mdi-cog"]
    ],
    cruds: [
      ["Create", "mdi-shape-square-plus"],
      ["Read", "mdi-book-open-blank-variant"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"]
    ]
  }),
  computed: {
    ...mapGetters({
      drawer: types.GET_DRAWER
    })
  },
  created() {
    const role = this.$route.matched[0].name;
    this.checkRole(role);
  },
  mounted() {},
  methods: {
    logout() {
      this.$router.push({ name: "login" }).then(r => console.log(r));
    },
    checkRole(role) {
      switch (role) {
        case "freelancer":
          this.role = 1;
          break;
        case "employer":
          this.role = 2;
          break;
        default:
          this.role = null;
          this.sidebarItems = [
            {
              title: "dashboard",
              route: "/panel/dashboard",
              symbol: "mdi-view-dashboard-variant"
            },
            {
              title: "orders",
              route: "/panel/orders",
              symbol: "mdi-order-bool-descending"
            },
            {
              title: "projects",
              route: "/panel/projects",
              symbol: "mdi-briefcase"
            },
            {
              title: "services",
              route: "/panel/services",
              symbol: "mdi-toolbox-outline"
            },
            {
              title: "serviceOrder",
              route: "/panel/service-orders",
              symbol: "mdi-border-all"
            },
            {
              title: "reviewOptions",
              route: "/panel/review-option",
              symbol: "mdi-file-find"
            },
            {
              title: "manageUsers",
              route: "/panel/manage-users",
              symbol: "mdi-account-group"
            },
            {
              title: "payments",
              route: "/panel/payout",
              symbol: "mdi-credit-card-marker-outline"
            },
            {
              title: "settings",
              symbol: "mdi-cog-transfer-outline",
              subCategory: [
                {
                  title: "accountSettings",
                  route: "/panel/account-setting",
                  symbol: "mdi-account-cog-outline"
                }
              ]
            },
            {
              title: "masterData",
              symbol: "mdi-database",
              subCategory: [
                {
                  title: "skills",
                  route: "/panel/skills",
                  symbol: "mdi-youtube-studio"
                },
                {
                  title: "jobCategory",
                  route: "/panel/job-categories",
                  symbol: "mdi-account-box-multiple-outline"
                },
                {
                  title: "departments",
                  route: "/panel/departments",
                  symbol: "mdi-vector-intersection"
                },
                {
                  title: "languages",
                  route: "/panel/languages",
                  symbol: "mdi-web"
                },
                {
                  title: "locations",
                  route: "/panel/locations",
                  symbol: "mdi-map-marker-radius"
                },
                {
                  title: "badges",
                  route: "/panel/badges",
                  symbol: "mdi-shield-star"
                },
                {
                  title: "deliveryTime",
                  route: "/panel/delivery-time",
                  symbol: "mdi-truck-delivery"
                },
                {
                  title: "responseTime",
                  route: "/panel/response-time",
                  symbol: "mdi-responsive"
                }
              ]
            }
          ];
      }
    }
  }
};
