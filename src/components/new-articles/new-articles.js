export default {
  name: "new-articles",
  components: {},
  props: ["isService"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    goToDetail() {
      if (this.isService === true) {
        this.$router.push("/service-details");
      }
    }
  }
};
