export default {
  name: "timer",
  components: {},
  props: [],
  data() {
    return {
      timerInterval: null,
      timer: 119
    };
  },
  computed: {},
  mounted() {
    this.timerInterval = setInterval(this.handleTimer, 1000);
  },
  methods: {
    handleTimer() {
      if (this.timer >= 0) {
        this.timer--;
        if (this.timer === 0) {
          this.stopTimer();
        }
      }
    },
    stopTimer() {
      this.$emit("stopTimer", 0);
    }
  },
  destroyed() {
    clearInterval(this.timerInterval);
  }
};
