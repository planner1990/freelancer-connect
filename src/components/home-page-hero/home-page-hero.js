export default {
  name: "home-page-hero",
  components: {},
  props: [],
  data() {
    return {
      items: ["فریلنسر", "کارفرما"],
      searchParams: ""
    };
  },
  computed: {},
  mounted() {},
  methods: {
    goToSearchPage() {
      if (this.searchParams.length >= 3) {
        this.$router.push({
          path: `/search`,
          query: { value: this.searchParams }
        });
      }
    }
  }
};
