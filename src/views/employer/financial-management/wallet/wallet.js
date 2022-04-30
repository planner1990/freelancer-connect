import DashboardCard from "@/components/dashboardCard/index";
import { freelancerServices, employerServices } from "@/core/services";
import $thousandMask from "@/shared/mixins/thousandMask";
import $removeThousand from "@/shared/mixins/removeThousand";
import Snackbar from "@/components/snackbar/index";
export default {
  name: "wallet",
  components: { DashboardCard, Snackbar },
  props: [],
  mixins: [$thousandMask, $removeThousand],
  data() {
    return {
      valid: true,
      dialog: false,
      dialog2: false,
      creditInfo: null,
      price: null,
      amountWallet: null,
      accountId: "",
      gatewaysList: [],
      gateway: null,
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      walletRule: {
        duration: [v => !!v || "لطفا مدت زمان را مشخص کنید"],
        price: [
          v => !!v || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.length >= 3) ||
            "مبلغ وارد شده باید بیش از ۵۰۰,۰۰۰ ریال باشد"
        ]
      },
      items: []
    };
  },
  computed: {},
  mounted() {
    this.showCredit();
    this.indexAccount();
    this.getGatewayList();
  },
  methods: {
    mask() {
      this.price = this.$removeThousand(this.price);
      this.price = this.$thousandMask(this.price);
    },
    maskPrice() {
      this.amountWallet = this.$removeThousand(this.amountWallet);
      this.amountWallet = this.$thousandMask(this.amountWallet);
    },
    showCredit() {
      freelancerServices.showCredit().then(res => {
        this.creditInfo = res?.data.data;
      });
    },
    indexAccount() {
      freelancerServices.indexAccount().then(res => {
        this.items = res.data.data;
      });
    },
    withdraw() {
      this.showSnackbar = false;
      const body = {
        amount: this.price.replace(/,/g, ""),
        account_id: this.accountId
      };
      freelancerServices.transactionWithdraw(body).then(() => {
        this.showSnackbar = true;
        this.snackbarMessage = "عملیات شما با موفقیت انجام شد.";
        this.price = "";
        this.accountId = "";
        this.dialog = false;
      });
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    increaseWallet() {
      const body = {
        amount: this.amountWallet.replace(/,/g, ""),
        gateway_id: this.gateway
      };
      freelancerServices.payCredit(body).then(res => {
        window.open(res.data.data.url, "_parent");
        this.showSnackbar = true;
        this.snackbarMessage = "درخواست شما ارسال شد.";
        this.amountWallet = null;
        this.gateway = null;
        this.dialog2 = false;
      });
    },
    getGatewayList() {
      employerServices.gateways().then(res => {
        this.gatewaysList = res.data.data;
      });
    }
  }
};
