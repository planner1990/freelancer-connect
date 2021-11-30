import DashboardDetails from "../../../components/dashboard-details/index";
export default {
  name: "dashboard",
  components: { DashboardDetails },
  props: [],
  data() {
    return {
      show: false,
      cards: [
        {
          src: "امنیت",
          notification: 0,
          title: "ایجاد خدمات",
          routeName: "post-service"
        },
        // {
        //   src: "اپلیکیشن",
        //   notification: 0,
        //   title: "صندوق پیام",
        //   routeName: "message-center"
        // },
        {
          src: "بصری",
          notification: 0,
          title: "خدمات من",
          routeName: "my-services"
        },
        {
          src: "تبلیغات",
          notification: 0,
          title: "پروفایل",
          routeName: "profile-setting"
        },
        // {
        //   src: "داخلی",
        //   notification: 0,
        //   title: "موارد ذخیره شده",
        //   routeName: "my-saved-items"
        // },
        {
          src: "وبسایت",
          notification: 0,
          title: "لیست درخواست‌ها",
          routeName: "proposals"
        },
        {
          src: "امنیت",
          notification: 0,
          title: "پروژه‌های اجرا شده",
          routeName: "completed-projects"
        },
        {
          src: "اپلیکیشن",
          notification: 0,
          title: "پروژه‌های ناموفق",
          routeName: "cancelled-projects"
        },
        {
          src: "بصری",
          notification: 0,
          title: "پروژه‌های در حال اجرا",
          routeName: "ongoing-projects"
        },
        {
          src: "وبسایت",
          notification: 0,
          title: "خدمات در حال انتظار",
          routeName: "posted-services"
        },
        {
          src: "امنیت",
          notification: 0,
          title: "خدمات تکمیل شده",
          routeName: "completed-services"
        },
        {
          src: "بصری",
          notification: 0,
          title: "خدمات ناتمام",
          routeName: "cancelled-services"
        },
        {
          src: "داخلی",
          notification: 0,
          title: "خدمات در حال انجام",
          routeName: "ongoing-services"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
