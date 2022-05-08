export default {
  name: "contact-us",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
