import axios from "axios";
export default {
  name: "new-blog",
  components: {},
  props: ["isService"],
  data() {
    return {
      model: 0,
      posts: [],
      summaries: "",
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
  methods: {
    jsonMethod(message) {
      return (this.summaries = message.slice(0, 150) + "...");
    },
    goToArticlePage(url) {
      window.open(url.rendered, "_target");
    }
  },
  created() {
    axios
      .get(
        `https://connecta.ir/blog/?rest_route=/wp/v2/posts&_embed&per_page=4`
      )
      .then(response => {
        this.posts = response?.data.slice(0, 3);
      })
      .catch(e => {
        console.log(e.response);
      });
  }
};
