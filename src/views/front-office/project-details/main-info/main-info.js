export default {
  name: "main-info",
  components: {},
  props: ["projectDetailsById"],
  data() {
    return {
      length: 10,
      page: 1,
      files: [
        {
          color: "blue",
          icon: "mdi-clipboard-text",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary"
        },
        {
          color: "amber",
          icon: "mdi-gesture-tap-button",
          subtitle: "Jan 10, 2014",
          title: "Kitchen remodel"
        },
        {
          color: "red",
          icon: "mdi-clipboard-text",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    goToSearchPage(skill) {
      this.$router.push({
        path: `/search`,
        query: { value: skill }
      });
    }
  }
};
