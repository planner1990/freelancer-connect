export default {
  name: "landing",
  components: {},
  props: [],
  data() {
    return {
      slides: ["landing-web-1.png", "landing-web-2.png"],
      sliderFlag: 0
    };
  },
  computed: {},
  mounted() {},
  methods: {
    changeSlider(event) {
      this.sliderFlag = event;
    },
    goTo(path) {
      this.$router.push({ path: path });
    }
  }
};
