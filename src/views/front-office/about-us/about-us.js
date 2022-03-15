export default {
  name: "about-us",
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
    goToPage(link) {
      window.open(link, "_blank");
    }
  }
};
