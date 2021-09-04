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
          title: "مرکز پیام",
          routeName: "message-center"
        },
        {
          src: "logo",
          notification: 0,
          title: "طرح های پیشنهادی",
          routeName: "proposals"
        },
        {
          src: "bg23",
          notification: 0,
          title: "مدیریت پرداخت ها",
          routeName: "payout-freelancer"
        },
        {
          src: "bg23",
          notification: 0,
          title: "فاکتورها",
          routeName: "invoices"
        },
        {
          src: "bg23",
          notification: 0,
          title: "موارد ذخیره شده",
          routeName: "my-saved-items"
        },
        {
          src: "logo",
          notification: 0,
          title: "تنظیمات پروفایل",
          routeName: "profile-setting"
        },
        {
          src: "bg23",
          notification: 0,
          title: "تنظیمات حساب",
          routeName: "account-setting-freelancer"
        },
        {
          src: "logo",
          notification: 0,
          title: "پروژه های تکمیل شده",
          routeName: "completed-projects"
        },
        {
          src: "bg23",
          notification: 0,
          title: "پروژه های ناتمام",
          routeName: "cancelled-projects"
        },
        {
          src: "bg23",
          notification: 0,
          title: "پروژه های در حال انجام",
          routeName: "ongoing-projects"
        },
        {
          src: "a",
          notification: 0,
          title: "خدمات در حال انتظار",
          routeName: "posted-services"
        },
        {
          src: "bg23",
          notification: 0,
          title: "خدمات تکمیل شده",
          routeName: "completed-services"
        },
        {
          src: "a",
          notification: 0,
          title: "خدمات ناتمام",
          routeName: "cancelled-services"
        },
        {
          src: "bg23",
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
