import { profileServices } from "../../core/services";

export default {
  name: "best-freelancer",
  components: {},
  props: [],
  data() {
    return {
      bestFreelancerList: [
        {
          name: "محمد حسینی",
          title: "امنیت وب و شبکه",
          img: "امنیت.jpg",
          price: "۱.۰۰۰.۰۰۰",
          location: "تهران"
        },
        {
          name: "سروش نظریان",
          title: "تبلیغات و ارائه خدمات دیجیتال مارکتینگ",
          img: "تبلیغات.jpg",
          price: "۲۵۰.۰۰۰",
          location: "تهران"
        },
        {
          name: "سینا کاظمین",
          title: "طراحی اپلیکیشن و اجرا",
          img: "اپلیکیشن.jpg",
          price: "۲.۰۰۰.۰۰۰",
          location: "کرج"
        },
        {
          name: "احمد محمدی",
          title: "ایجاد وب اپلیکیشن",
          img: "وبسایت.jpg",
          price: "۵۰۰.۰۰۰",
          location: "مشهد"
        }
      ],
      bestFreelancerImg: [
        {
          img: "امنیت.jpg"
        },
        {
          img: "تبلیغات.jpg"
        },
        {
          img: "اپلیکیشن.jpg"
        },
        {
          img: "وبسایت.jpg"
        }
      ]
    };
  },
  computed: {},
  mounted() {
    this.getBestFreelancers();
  },
  methods: {
    getBestFreelancers() {
      const options = {
        is_selected: true,
        role: "freelancer"
      };
      profileServices.bestFreelancers(options).then(res => {
        this.bestFreelancerList = res.data.data.data.slice(0, 4);
        this.bestFreelancerList.push(this.bestFreelancerImg);
      });
    }
  }
};
