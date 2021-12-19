export default {
  name: "skeleton-page",
  components: {},
  props: [],
  data() {
    return {
      overlay: true
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    }
  }
};
