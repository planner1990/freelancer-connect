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
          title: "فشن فریلنسینگ",
          image: "تبلیغات.jpg",
          date: "۱۴۰۰/۰۶/۲۸",
          time: "۱۲:۳۰"
        },
        {
          category: "وب سایت و شبکه های مجازی",
          title: "کپی‌ رایتینگ پر تقاضا ترین حرفه 2020",
          image: "بصری.jpg",
          date: "۱۴۰۰/۰۷/۱۱",
          time: "۱۰:۳۳"
        },
        {
          category: "دیجیتال مارکتینگ",
          title: "نهان برند نمایی",
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
