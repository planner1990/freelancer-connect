import DashboardDetails from "../../../components/dashboard-details/index";
export default {
  name: "dashboard",
  components: { DashboardDetails },
  props: [],
  data() {
    return {
      show: false,
      cards: [
        // {
        //   src: "امنیت",
        //   notification: 0,
        //   title: "ایجاد خدمات",
        //   routeName: "post-service"
        // },
        // {
        //   src: "اپلیکیشن",
        //   notification: 0,
        //   title: "صندوق پیام",
        //   routeName: "message-center"
        // },
        // {
        //   src: "بصری",
        //   notification: 0,
        //   title: "خدمات من",
        //   routeName: "my-services"
        // },
        {
          src: "پروفایل",
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
          src: "لیست درخواست ها",
          notification: 0,
          title: "پیشنهادهای ارائه شده",
          routeName: "proposals"
        },
        {
          src: "پروژه های کامل شده",
          notification: 0,
          title: "پروژه‌های کامل شده",
          routeName: "completed-projects"
        },
        {
          src: "پروژه های ناتمام",
          notification: 0,
          title: "پروژه‌های ناتمام",
          routeName: "cancelled-projects"
        },
        {
          src: "پروژه های در حال اجرا",
          notification: 0,
          title: "پروژه‌های در حال اجرا",
          routeName: "ongoing-projects"
        }
        // {
        //   src: "وبسایت",
        //   notification: 0,
        //   title: "خدمات در حال انتظار",
        //   routeName: "posted-services"
        // },
        // {
        //   src: "امنیت",
        //   notification: 0,
        //   title: "خدمات تکمیل شده",
        //   routeName: "completed-services"
        // },
        // {
        //   src: "بصری",
        //   notification: 0,
        //   title: "خدمات ناتمام",
        //   routeName: "cancelled-services"
        // },
        // {
        //   src: "داخلی",
        //   notification: 0,
        //   title: "خدمات در حال انجام",
        //   routeName: "ongoing-services-Freelancer"
        // }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
