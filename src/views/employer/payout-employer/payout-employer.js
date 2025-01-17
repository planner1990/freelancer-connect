import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
export default {
  name: "payout-employer",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "لطفا نام را وارد کنید",
        v => (v && v.length <= 50) || "نام وارد شده باید بیش از ۵۰ کاراکتر باشد"
      ],
      headersUserManagement: [
        {
          text: "نام کاربری",
          align: "center",
          sortable: false,
          value: "username"
        },
        { text: "مبلغ", value: "amount", sortable: false, align: "center" },
        {
          text: "شیوه پرداخت",
          value: "paymentMethod",
          sortable: false,
          align: "center"
        },
        {
          text: "زمان پرداخت",
          value: "processingDate",
          sortable: false,
          align: "center"
        },
        {
          text: "وضعیت",
          value: "serviceStatus",
          sortable: false,
          align: "center"
        }
      ],
      dataUserManagement: [
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        },
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        },
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        },
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        },
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        },
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        },
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        },
        {
          username: "Esmal Khodadad",
          amount: 200.0,
          paymentMethod: "درگاه بانک ملت",
          processingDate: "۱۴۰۰/۰۵/۲۲",
          serviceStatus: ["موفقیت آمیز", "ناموفق"]
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
