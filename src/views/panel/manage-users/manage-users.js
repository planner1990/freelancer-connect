import TableDashboard from "../../../components/table-dashboard/index";
import DashboardCard from "../../../components/dashboardCard/index";
export default {
  name: "manage-users",
  components: { TableDashboard, DashboardCard },
  props: [],
  data() {
    return {
      headersUserManagement: [
        {
          text: "نام کاربری",
          align: "center",
          sortable: false,
          value: "username"
        },
        { text: "ایمیل", value: "email", sortable: false, align: "center" },
        { text: "نقش", value: "role", sortable: false, align: "center" },
        {
          text: "وضعیت تایید",
          value: "verificationStatus",
          sortable: false,
          align: "center"
        },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: [
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "فریلنسر",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "کارفرما",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "کارفرما",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "فریلنسر",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "فریلنسر",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "کارفرما",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "فریلنسر",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "فریلنسر",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "کارفرما",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "فریلنسر",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "کارفرما",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "کارفرما",
          verificationStatus: "تایید شده"
        },
        {
          username: "Frozen Yogurt",
          email: "test@ernyka.com",
          role: "فریلنسر",
          verificationStatus: "تایید شده"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
