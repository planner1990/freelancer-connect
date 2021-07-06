// Mixins
import Proxyable from "vuetify/lib/mixins/proxyable";

export default {
  name: "cotumize-theme",
  components: {},
  props: [],
  mounted() {},
  methods: {},

  mixins: [Proxyable],

  data: () => ({
    color: "#E91E63",
    colors: ["#9C27b0", "#00CAE3", "#4CAF50", "#ff9800", "#E91E63", "#FF5252"],
    menu: false
  }),

  watch: {
    color(val) {
      this.$vuetify.theme.themes[this.isDark ? "dark" : "light"].primary = val;
    }
  }
};
