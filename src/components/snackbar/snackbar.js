export default {
  name: "snackbar",
  components: {},
  props: ["snackbarMessage", "showSnackbar"],
  data() {
    return {
      timeout: 2000
    };
  },
  computed: {},
  mounted() {},
  methods: {
    hiddenSnackbar() {
      this.$emit("hideSnackbar", false);
    }
  }
};
