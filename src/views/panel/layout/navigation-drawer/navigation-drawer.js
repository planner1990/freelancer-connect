import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
import freelancerServices from "../../../../core/services/modules/freelancerServices";
import profileServices from "../../../../core/services/modules/profileServices";

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
    ],
    profileInfo: {}
  }),
  computed: {
    ...mapGetters({
      imageSrc: types.avatarManagement.getters.AVATAR_MANAGEMENT_GET
    }),
    getDrawerImage() {
      return this.imageSrc;
    },
    getStatusImage() {
      return this.imageSrc?.status === "banner";
    },
    ...mapGetters({
      drawer: types.GET_DRAWER
    })
  },
  created() {
    const role = this.$route.matched[0].name;
    this.checkRole(role);
  },
  mounted() {
    this.showProfile();
  },
  methods: {
    showProfile() {
      if (this.role === 1) {
        freelancerServices.showProfile().then(res => {
          this.profileInfo = res.data.data;
        });
      } else if (this.role === 2) {
        profileServices.employerGetProfile().then(res => {
          const user = res.data.data.user;
          this.profileInfo = res.data.data;
          this.profileForm = {
            firstName: user.first_name,
            lastName: user.last_name,
            description: user.profile.description,
            categoryId: user.id,
            noOfEmployees: String(user.profile.no_of_employees)
          };
        });
      }
    },
    logout() {
      localStorage.removeItem("accessToken");
      this.$router.push("/");
    },
    checkRole(role) {
      switch (role) {
        case "freelancer":
          this.role = 1;
          this.sidebarItems = [
            {
              title: "dashboard",
              route: "/freelancer/dashboard",
              symbol: "mdi-view-dashboard-variant"
            },
            // {
            //   title: "messageCenter",
            //   route: "/freelancer/message-center",
            //   symbol: "mdi-message-bulleted"
            // },
            {
              title: "myServices",
              route: "/freelancer/my-services",
              symbol: "mdi-folder-star-multiple-outline"
            },
            {
              title: "proposals",
              route: "/freelancer/proposals",
              symbol: "mdi-human-greeting-proximity"
            },
            {
              title: "settings",
              symbol: "mdi-cog-transfer-outline",
              subCategory: [
                {
                  title: "profileSettings",
                  route: "/freelancer/profile-setting",
                  symbol: "mdi-account-cog-outline"
                }
                // {
                //   title: "accountSettings",
                //   route: "/freelancer/account-setting",
                //   symbol: "mdi-account-edit-outline"
                // }
              ]
            },
            {
              title: "financialManagement",
              symbol: "mdi-cash-multiple",
              subCategory: [
                {
                  title: "wallet",
                  route: "/freelancer/wallet",
                  symbol: "mdi-wallet-travel"
                },
                {
                  title: "transactions",
                  route: "/freelancer/transactions",
                  symbol: "mdi-cash-fast"
                },
                {
                  title: "bankCard",
                  route: "/freelancer/bank-card",
                  symbol: "mdi-credit-card-check-outline"
                }
              ]
            },
            {
              title: "manageProject",
              symbol: "mdi-projector-screen-outline",
              subCategory: [
                {
                  title: "postedProjects",
                  route: "/freelancer/posted-projects",
                  symbol: "mdi-folder-star-multiple-outline"
                },
                {
                  title: "ongoingProjects",
                  route: "/freelancer/ongoing-projects",
                  symbol: "mdi-google-circles-group"
                },
                {
                  title: "completedProjects",
                  route: "/freelancer/completed-projects",
                  symbol: "mdi-folder-star-multiple-outline"
                },
                {
                  title: "cancelledProjects",
                  route: "/freelancer/cancelled-projects",
                  symbol: "mdi-close-box-multiple"
                }
              ]
            },
            {
              title: "manageServices",
              symbol: "mdi-cog-transfer-outline",
              subCategory: [
                {
                  title: "postedServices",
                  route: "/freelancer/posted-services",
                  symbol: "mdi-account-cog-outline"
                },
                {
                  title: "ongoingServices",
                  route: "/freelancer/ongoing-services",
                  symbol: "mdi-google-circles-group"
                },
                {
                  title: "completedServices",
                  route: "/freelancer/completed-services",
                  symbol: "mdi-folder-star-multiple-outline"
                },
                {
                  title: "cancelledServices",
                  route: "/freelancer/cancelled-services",
                  symbol: "mdi-close-box-multiple"
                }
              ]
            },
            {
              title: "invoices",
              route: "/freelancer/invoices",
              symbol: "mdi-sitemap"
            }
            // {
            //   title: "packages",
            //   route: "/freelancer/packages",
            //   symbol: "mdi-package-variant-closed"
            // },
            // {
            //   title: "mySavedItems",
            //   route: "/freelancer/my-saved-items",
            //   symbol: "mdi-content-save-edit-outline"
            // }
          ];
          break;
        case "employer":
          this.role = 2;
          this.sidebarItems = [
            {
              title: "dashboard",
              route: "/employer/dashboard",
              symbol: "mdi-view-dashboard-variant"
            },
            // {
            //   title: "messageCenter",
            //   route: "/employer/message-center",
            //   symbol: "mdi-message-bulleted"
            // },
            {
              title: "myProjects",
              route: "/employer/my-projects",
              symbol: "mdi-folder-star-multiple-outline"
            },
            {
              title: "settings",
              symbol: "mdi-cog-transfer-outline",
              subCategory: [
                {
                  title: "profileSettings",
                  route: "/employer/profile-setting",
                  symbol: "mdi-account-cog-outline"
                }
                // {
                //   title: "accountSettings",
                //   route: "/employer/account-setting",
                //   symbol: "mdi-account-edit-outline"
                // }
              ]
            },
            {
              title: "financialManagement",
              symbol: "mdi-cash-multiple",
              subCategory: [
                {
                  title: "wallet",
                  route: "/employer/wallet",
                  symbol: "mdi-wallet-travel"
                },
                {
                  title: "transactions",
                  route: "/employer/transactions",
                  symbol: "mdi-cash-fast"
                },
                {
                  title: "bankCard",
                  route: "/employer/bank-card",
                  symbol: "mdi-credit-card-check-outline"
                }
              ]
            },
            {
              title: "manageProject",
              symbol: "mdi-projector-screen-outline",
              subCategory: [
                {
                  title: "pendingProjects",
                  route: "/employer/pending-projects",
                  symbol: "mdi-folder-star-multiple-outline"
                },
                {
                  title: "ongoingProjects",
                  route: "/employer/ongoing-projects",
                  symbol: "mdi-google-circles-group"
                },
                {
                  title: "completedProjects",
                  route: "/employer/completed-projects",
                  symbol: "mdi-folder-star-multiple-outline"
                },
                {
                  title: "cancelledProjects",
                  route: "/employer/cancelled-projects",
                  symbol: "mdi-close-box-multiple"
                }
              ]
            },
            {
              title: "manageServices",
              symbol: "mdi-cog-transfer-outline",
              subCategory: [
                {
                  title: "postedServices",
                  route: "/employer/posted-services",
                  symbol: "mdi-account-cog-outline"
                },
                {
                  title: "ongoingServices",
                  route: "/employer/ongoing-services",
                  symbol: "mdi-google-circles-group"
                },
                {
                  title: "completedServices",
                  route: "/employer/completed-services",
                  symbol: "mdi-folder-star-multiple-outline"
                },
                {
                  title: "cancelledServices",
                  route: "/employer/cancelled-services",
                  symbol: "mdi-close-box-multiple"
                }
              ]
            },
            // {
            //   title: "payout",
            //   route: "/employer/payout",
            //   symbol: "mdi-credit-card-marker-outline"
            // },
            {
              title: "invoices",
              route: "/employer/invoices",
              symbol: "mdi-sitemap"
            }
            // {
            //   title: "mySavedItems",
            //   route: "/employer/my-saved-items",
            //   symbol: "mdi-content-save-edit-outline"
            // }
          ];
          break;
        default:
          this.role = null;
          this.sidebarItems = [
            {
              title: "dashboard",
              route: "/panel/dashboard",
              symbol: "mdi-view-dashboard-variant"
            },
            // {
            //   title: "messageCenter",
            //   route: "/panel/message-center-panel",
            //   symbol: "mdi-message-bulleted"
            // },
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
    },
    goTo(item) {
      this.$router.push(item);
    }
  }
};
