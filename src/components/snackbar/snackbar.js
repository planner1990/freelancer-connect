export default {
  name: "snackbar",
  components: {},
  props: ["snackbarMessage", "showSnackbar"],
  data() {
    return {
      timeout: 2000
    };
  },
  // created() {
  //   this.$store.subscribe((mutation, state) => {
  //     // if (mutation.type === "snackbar/SHOW_MESSAGE") {
  //     //   this.text = state.snackbar.text;
  //     //   this.color = state.snackbar.color;
  //     //   this.timeout = state.snackbar.timeout;
  //     //   this.show = true;
  //     // }
  //     console.log(mutation, state);
  //   });
  // },
  computed: {},
  mounted() {},
  methods: {
    hiddenSnackbar() {
      this.$emit("hideSnackbar", false);
    }
  }
};
