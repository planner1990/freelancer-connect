export default {
  name: "side-filter",
  components: {},
  props: [],
  data() {
    return {
      value: [0, 1000],
      min: 0,
      max: 1000,
      checkboxLabel: [
        "موبایل",
        "دیجیتال مارکتینگ",
        "کپی رایتینگ",
        "ویدیو",
        "انیمیشن",
        "طراحی وب",
        "یو آی",
        "یو ایکس",
        "وب",
        "گرافیک",
        "بک اند",
        "فرانت اند",
        "پی اچ پی",
        "لاراول",
        "ویو جی اس",
        "جاوا"
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    setSlider(e) {
      this.min = e[0];
      this.max = e[1];
    }
  }
};
