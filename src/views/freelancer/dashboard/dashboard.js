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
        {
          src: "اپلیکیشن",
          notification: 0,
          title: "صندوق پیام",
          routeName: "message-center"
        },
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
        {
          src: "داخلی",
          notification: 0,
          title: "موارد ذخیره شده",
          routeName: "my-saved-items"
        },
        {
          src: "مارکتینگ",
          notification: 0,
          title: "تنظیمات پروفایل",
          routeName: "profile-setting"
        },
        {
          src: "وبسایت",
          notification: 0,
          title: "پروژه ارسال شده",
          routeName: "posted-projects"
        },
        {
          src: "امنیت",
          notification: 0,
          title: "پروژه های تکمیل شده",
          routeName: "completed-projects"
        },
        {
          src: "اپلیکیشن",
          notification: 0,
          title: "پروژه های ناتمام",
          routeName: "cancelled-projects"
        },
        {
          src: "بصری",
          notification: 0,
          title: "پروژه های در حال انجام",
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
