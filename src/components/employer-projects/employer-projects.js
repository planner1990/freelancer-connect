export default {
  name: "employer-projects",
  components: {},
  props: [],
  data() {
    return {
      length: 10,
      page: 1
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changePage(currentPage) {
      this.page = currentPage;
    }
  }
};
