export default {
  name: "dashboard-details",
  components: {},
  props: ["cards"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    goToRoute(routeName) {
      this.$router.push({ name: `${routeName}` });
    }
  }
};
