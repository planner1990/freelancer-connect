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
      { text: "navbar.home", route: "/" },
      { text: "navbar.blog", route: "/" },
      { text: "navbar.browseServices", route: "/browse-service" },
      { text: "navbar.browseProjects", route: "/browse-projects" }
    ]
  }),
  computed: {
    ...mapGetters({
      drawerFront: types.GET_DRAWER_FRONT
    })
  },
  created() {},
  mounted() {},
  methods: {}
};
