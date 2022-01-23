import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import { freelancerServices } from "@/core/services";
import $thousandMask from "@/shared/mixins/thousandMask";
import $removeThousand from "@/shared/mixins/removeThousand";
export default {
  name: "transactions",
  components: { DashboardCard, TableDashboard },
  props: [],
  mixins: [$thousandMask, $removeThousand],
  data() {
    return {
      items: [
        { title: "برداشت", value: 1 },
        { title: "واریز", value: 0 }
      ],
      categories: [],
      expStart: null,
      usersDate: null,
      detailList: "",
      loading: false,
      filterForm: {
        typeOfTransaction: null,
        created_at: null,
        price: null,
        generic: null
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
          value: "type"
        },
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
    mask() {
      this.filterForm.price = this.$removeThousand(this.filterForm.price);
      this.filterForm.price = this.$thousandMask(this.filterForm.price);
    },
    transactionIndex() {
      freelancerServices.transactionIndex().then(res => {
        this.dataUserManagement = res.data.data;
      });
    },
    showDetail(id) {
      freelancerServices.showTransactionDetail(id).then(res => {
        this.detailList = res?.data.data;
      });
    },
    filterAction() {
      this.loading = true;
      const options = {
        generic: this.filterForm.generic,
        type: this.filterForm.typeOfTransaction,
        price: this.filterForm.price
          ? this.filterForm.price.replace(/,/g, "")
          : null,
        created_at: this.filterForm.created_at
      };
      freelancerServices
        .transactionIndex(options)
        .then(res => {
          this.dataUserManagement = res.data.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
