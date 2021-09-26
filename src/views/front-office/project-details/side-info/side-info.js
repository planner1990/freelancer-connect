export default {
  name: "side-info",
  components: {},
  props: ["projectDetailsById"],
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
      ],
      selectReport: "",
      items: [
        {
          text: "اشتراک با اینستاگرام",
          icon: "mdi-instagram",
          color: "#af4261"
        },
        { text: "اشتراک با توییتر", icon: "mdi-twitter", color: "#55acee" },
        { text: "اشتراک با لینکدین", icon: "mdi-linkedin", color: "#0a66c2" },
        { text: "اشتراک با پینترست", icon: "mdi-pinterest", color: "#dd4b39" }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    setSlider(e) {
      // console.log(e);
      this.min = e[0];
      this.max = e[1];
    }
  }
};
