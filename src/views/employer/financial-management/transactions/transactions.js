import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
export default {
  name: "transactions",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      categories: [],
      expStart: null,
      usersDate: null,
      filterForm: {
        typeOfTransaction: null,
        created_at: null,
        price: null
      },
      dialog: false,
      name: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      headersUserManagement: [
        {
          text: "نوع تراکنش",
          align: "center",
          sortable: false,
          value: "typeOfTransaction"
        },
        {
          text: "مبلغ",
          value: "price",
          sortable: false,
          align: "center"
        },
        {
          text: "زمان",
          value: "date",
          sortable: false,
          align: "center"
        },
        {
          text: "شناسه پرداخت",
          value: "payId",
          sortable: false,
          align: "center"
        },
        {
          text: "واریزکننده/دریافت کننده",
          value: "payerDepositor",
          sortable: false,
          align: "center"
        },
        {
          text: "پروژه ها",
          value: "project",
          sortable: false,
          align: "center"
        },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: [
        {
          typeOfTransaction: "واریز",
          price: "500/000 ریال",
          date: "1400/06/12",
          payId: "50259874526651",
          payerDepositor: "محمد کاظمین",
          project: "طراحی وب: بخش ۱"
        },
        {
          typeOfTransaction: "واریز",
          price: "500/000 ریال",
          date: "1400/06/12",
          payId: "50259874526651",
          payerDepositor: "محمد کاظمین",
          project: "طراحی وب: بخش ۲"
        },
        {
          typeOfTransaction: "واریز",
          price: "500/000 ریال",
          date: "1400/06/12",
          payId: "50259874526651",
          payerDepositor: "محمد کاظمین",
          project: "طراحی وب: بخش ۳"
        },
        {
          typeOfTransaction: "واریز",
          price: "500/000 ریال",
          date: "1400/06/12",
          payId: "50259874526651",
          payerDepositor: "محمد کاظمین",
          project: "طراحی وب: بخش ۴"
        },
        {
          typeOfTransaction: "واریز",
          price: "500/000 ریال",
          date: "1400/06/12",
          payId: "50259874526651",
          payerDepositor: "محمد کاظمین",
          project: "طراحی وب: بخش ۵"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
