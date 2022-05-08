import { freelancerServices } from "@/core/services";

export default {
  name: "withdrawal-request-history",
  components: {},
  props: [],
  data() {
    return {
      dialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      detailList: {},
      headersUserManagement: [
        // {
        //   text: "نوع تراکنش",
        //   align: "center",
        //   sortable: false,
        //   value: "type"
        // },
        {
          text: "وضعیت",
          align: "center",
          sortable: false,
          value: "status"
        },
        {
          text: "مبلغ(ریال)",
          value: "amount",
          sortable: false,
          align: "center"
        },
        {
          text: "زمان",
          value: "created_at",
          sortable: false,
          align: "center"
        },
        {
          text: "شناسه پرداخت",
          value: "payment_code",
          sortable: false,
          align: "center"
        },
        {
          text: "واریزکننده/دریافت کننده",
          value: "depositor_recipient",
          sortable: false,
          align: "center"
        },
        {
          text: "بابت",
          value: "concern",
          sortable: false,
          align: "center"
        },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: []
    };
  },
  computed: {},
  mounted() {
    this.transactionIndex();
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/freelancer/wallet" });
    },
    transactionIndex() {
      const option = {
        type: "1"
      };
      freelancerServices.transactionIndex(option).then(res => {
        this.dataUserManagement = res.data.data;
      });
    },
    showDetail(id) {
      freelancerServices.showTransactionDetail(id).then(res => {
        this.detailList = res?.data.data;
      });
    }
  }
};
