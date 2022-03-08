import axios from "axios";
export default {
  name: "new-blog",
  components: {},
  props: ["isService"],
  data() {
    return {
      model: 0,
      posts: [],
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
  methods: {},
  created() {
    axios
      .get(`https://connecta.ir/blog/index.php?rest_route=/wp/v2/posts`)
      .then(response => {
        this.posts = response?.data.slice(0, 3);
      })
      .catch(e => {
        console.log(e.response);
      });
  }
};
