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
    selected: [2],
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
  mounted() {},
  methods: {
    logout() {
      this.$router.push({ name: "login" }).then(r => console.log(r));
    }
  }
};
