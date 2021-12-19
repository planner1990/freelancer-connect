import DashboardCard from "@/components/dashboardCard/index";
import { freelancerServices } from "@/core/services";
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
      creditInfo: "",
      price: null,
      accountId: "",
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
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      option: {
        textStyle: {
          fontFamily: 'IRANSans, "Helvetica Neue", Arial, sans-serif'
        },
        title: {
          text: "موجودی کل",
          left: "center"
        },
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["قابل برداشت", "غیر قابل برداشت"]
        },
        series: [
          {
            name: "موجودی کل",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "60%"],
            data: [
              { value: null, name: "قابل برداشت" },
              { value: null, name: "غیر قابل برداشت" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  computed: {},
  mounted() {
    this.showCredit();
    this.indexAccount();
  },
  methods: {
    mask() {
      this.price = this.$removeThousand(this.price);
      this.price = this.$thousandMask(this.price);
    },
    showCredit() {
      freelancerServices.showCredit().then(res => {
        this.creditInfo = res?.data.data;
        const valueFirst = (this.option.series[0].data[0].value = this.creditInfo[
          "withdrawable_amount"
        ]);
        const valueSecond = (this.option.series[0].data[1].value = this.creditInfo[
          "non_withdrawable_amount"
        ]);
        if (valueFirst === 0 && valueSecond === 0) {
          this.option.series[0].data[0].value = "";
          this.option.series[0].data[1].value = "";
        }
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
        amount: this.price,
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
    }
  }
};
