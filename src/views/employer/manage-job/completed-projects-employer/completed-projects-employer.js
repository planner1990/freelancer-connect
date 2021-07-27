import DashboardCard from "../../../../components/dashboardCard/index";
import TableDashboard from "../../../../components/table-dashboard/index";
export default {
  name: "completed-projects-employer",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters"
      ],
      headersUserManagement: [
        {
          text: "نام سرویس",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "وضعیت سرویس",
          value: "serviceStatus",
          sortable: false,
          align: "center"
        },
        { text: "صف", value: "queue", sortable: false, align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: [
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        },
        {
          title: {
            title: "من در حال توسعه اپلیکیشن اندروید و IOS هستم",
            src: "https://picsum.photos/id/11/500/300",
            price: "200 هزار تومان"
          },
          serviceStatus: ["پیش نویس", "منتشر شده"],
          queue: "۰ نفر در صف"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
