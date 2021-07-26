import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
export default {
  name: "invoices",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      showSelect: true,
      headersUserManagement: [
        {
          text: "آیدی فاکتور",
          align: "center",
          sortable: false,
          value: "name"
        },
        { text: "زمان", value: "issueDate", sortable: false, align: "center" },
        { text: "مبلغ", value: "amount", sortable: false, align: "center" },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: [
        {
          name: "Frozen Yogurt۱",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۲",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۳",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۴",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۵",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۶",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۷",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۸",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۹",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        },
        {
          name: "Frozen Yogurt۱۰",
          issueDate: "۲۳ اردیبهشت",
          amount: "۲۰۰ هزار تومان"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
