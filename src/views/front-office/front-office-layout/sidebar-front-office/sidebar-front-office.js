import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";

export default {
  name: "sidebar-front-office",
  components: {},
  props: [],

  data: () => ({
    show: false,
    mini: false,
    toggle: false,
    selectedItem: 0,
    items: [
      { text: "navbar.home", route: "/", icon: "mdi-folder" },
      { text: "navbar.blog", route: "/", icon: "mdi-account-multiple" },
      { text: "navbar.companies", route: "/aa", icon: "mdi-star" },
      { text: "navbar.opportunities", route: "/aa", icon: "mdi-check-circle" },
      { text: "navbar.resumeBuilder", route: "/aa", icon: "mdi-upload" },
      { text: "navbar.knowYourself", route: "/aa", icon: "mdi-upload" },
      { text: "navbar.morePowerful", route: "/aa", icon: "mdi-cloud-upload" }
    ]
  }),
  computed: {
    ...mapGetters({
      drawer: types.GET_DRAWER
    })
  },
  created() {},
  mounted() {},
  methods: {}
};
