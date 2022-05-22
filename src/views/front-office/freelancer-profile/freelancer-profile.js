export default {
  name: "freelancer-profile",
  components: {},
  props: [],
  data() {
    return {
      rating: 3,
      scrollHeight: 0
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  methods: {
    handleScroll() {
      return (this.scrollHeight = window.pageYOffset);
    }
  },
  destroyed() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
