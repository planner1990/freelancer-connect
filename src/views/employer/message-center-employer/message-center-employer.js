import DashboardCard from "../../../components/dashboardCard/index";
import TableDashboard from "../../../components/table-dashboard/index";
export default {
  name: "message-center-employer",
  components: { DashboardCard, TableDashboard },
  props: [],
  data() {
    return {
      headersUserManagement: [
        {
          text: "شماره",
          align: "center",
          sortable: false,
          value: "id"
        },
        {
          text: "نام کاربری",
          align: "center",
          sortable: false,
          value: "username"
        },
        {
          text: "آخرین پیام",
          value: "lastDescription",
          sortable: false,
          align: "center"
        },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: [
        {
          id: 1,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 2,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 3,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 4,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 5,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 6,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 7,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 8,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 9,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 10,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        },
        {
          id: 11,
          username: "Akbar GH",
          lastDescription: "من درخواست ارتقا اکانت را داشتم."
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
