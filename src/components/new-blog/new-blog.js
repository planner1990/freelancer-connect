export default {
  name: "new-blog",
  components: {},
  props: ["isService"],
  data() {
    return {
      model: 0,
      lastArticles: [
        {
          category: "امنیت و شبکه",
          title: "آیا صفحات مهم و ضروری در وب سایت را می شناسید؟",
          image: "تبلیغات.jpg",
          date: "۱۴۰۰/۰۶/۲۸",
          time: "۱۲:۳۰"
        },
        {
          category: "وب سایت و شبکه های مجازی",
          title:
            "یک دیجیتال مارکتر چه می کند، وظایف مدیر دیجیتال مارکتینگ چیست ؟",
          image: "بصری.jpg",
          date: "۱۴۰۰/۰۷/۱۱",
          time: "۱۰:۳۳"
        },
        {
          category: "دیجیتال مارکتینگ",
          title: "انواع ابزارهای دیجیتال مارکتینگ",
          image: "داخلی.jpg",
          date: "۱۴۰۰/۰۶/۳۰",
          time: "۱۶:۴۰"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
