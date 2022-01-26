export default {
  name: "footer-front-office",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
    goToPage(link) {
      window.open(link, "_blank");
    }
  }
};
