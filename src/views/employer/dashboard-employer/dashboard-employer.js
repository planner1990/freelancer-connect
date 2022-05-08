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
          src: "ایجاد پروژه",
          notification: 0,
          title: "ایجاد پروژه",
          routeName: "post-job"
        },
        {
          src: "تاریخچه پروژه ها",
          notification: 0,
          title: "تاریخچه‌ پروژه‌ها",
          routeName: "my-projects"
        },
        {
          src: "پروفایل",
          notification: 0,
          title: "پروفایل",
          routeName: "profile-setting-employer"
        },
        {
          src: "پروژه های کامل شده",
          notification: 0,
          title: "پروژه‌های کامل شده",
          routeName: "completed-projects-employer"
        },
        {
          src: "پروژه های در حال اجرا",
          notification: 0,
          title: "پروژه های در حال اجرا",
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
          src: "پرداخت",
          notification: 0,
          title: "پرداخت",
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
