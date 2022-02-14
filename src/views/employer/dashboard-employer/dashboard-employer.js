import DashboardDetails from "../../../components/dashboard-details/index";
export default {
  name: "dashboard-employer",
  components: { DashboardDetails },
  props: [],
  data() {
    return {
      show: false,
      cards: [
        {
          src: "امنیت",
          notification: 0,
          title: "ایجاد پروژه",
          routeName: "post-job"
        },
        {
          src: "اپلیکیشن",
          notification: 0,
          title: "پروژه‌های من",
          routeName: "my-projects"
        },
        {
          src: "بصری",
          notification: 0,
          title: "پروفایل",
          routeName: "profile-setting-employer"
        },
        {
          src: "تبلیغات",
          notification: 0,
          title: "پروژه‌های کامل شده",
          routeName: "completed-projects-employer"
        },
        {
          src: "داخلی",
          notification: 0,
          title: "پروژه‌های در حال اجرا",
          routeName: "ongoing-projects-employer"
        },
        // {
        //   src: "وبسایت",
        //   notification: 0,
        //   title: "خدمات در حال انجام",
        //   routeName: "ongoing-services-employer"
        // },
        // {
        //   src: "امنیت",
        //   notification: 0,
        //   title: "خدمات تکمیل شده",
        //   routeName: "completed-services-employer"
        // },
        {
          src: "اپلیکیشن",
          notification: 0,
          title: "تراکنش‌ها",
          routeName: "employer-transactions"
        }
        // {
        //   src: "بصری",
        //   notification: 0,
        //   title: "موارد ذخیره شده",
        //   routeName: "my-saved-items-employer"
        // },
        // {
        //   src: "مارکتینگ",
        //   notification: 0,
        //   title: "خدمات کامل شده",
        //   routeName: "completed-services-employer"
        // }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
