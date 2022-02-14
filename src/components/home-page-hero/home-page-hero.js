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
      this.$router.push({
        path: `/search`,
        query: { value: this.searchParams }
      });
    }
  }
};
