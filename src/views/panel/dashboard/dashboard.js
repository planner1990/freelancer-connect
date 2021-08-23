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
          src: "bg23",
          notification: 0,
          title: "سفارشات",
          routeName: "orders"
        },
        {
          src: "logo",
          notification: 0,
          title: "پروژه ها",
          routeName: "projects"
        },
        {
          src: "bg23",
          notification: 0,
          title: "مدیریت کاربران",
          routeName: "manage-users"
        },
        {
          src: "bg23",
          notification: 0,
          title: "تنظیمات حساب",
          routeName: "account-setting"
        },
        {
          src: "bg23",
          notification: 0,
          title: "مهارت ها",
          routeName: "skills"
        },
        {
          src: "logo",
          notification: 0,
          title: "دسته بندی شغلی",
          routeName: "job-categories"
        },
        {
          src: "bg23",
          notification: 0,
          title: "دپارتمان ها",
          routeName: "departments"
        },
        {
          src: "logo",
          notification: 0,
          title: "زبان ها",
          routeName: "languages"
        },
        {
          src: "bg23",
          notification: 0,
          title: "خدمات",
          routeName: "services"
        },
        {
          src: "bg23",
          notification: 0,
          title: "گزینه بررسی",
          routeName: "review-option"
        },
        {
          src: "a",
          notification: 0,
          title: "پرداخت ها",
          routeName: "payout"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
