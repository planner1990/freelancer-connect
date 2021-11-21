import DashboardCard from "@/components/dashboardCard/index";
import transitionPage from "@/components/transitionPage/index";
import HeaderSection from "@/components/header-section/index";
import { employerServices } from "@/core/services";
export default {
  name: "payment",
  components: { DashboardCard, transitionPage, HeaderSection },
  props: [],
  data() {
    return {
      paymentInfo: {},
      gatewaysList: [],
      banksInfo: [
        {
          title: "بانک سامان",
          src: "269_30b90ec9bfd64ff123f45f0168991e09.png"
        },
        {
          title: "بانک اقتصاد نوین",
          src: "a.png"
        },
        {
          title: "بانک پارسیان",
          src: "431840_209.jpg"
        }
      ]
    };
  },
  computed: {},
  mounted() {
    this.inquiryPayment();
    this.getGatewayList();
  },
  methods: {
    inquiryPayment() {
      const option = {
        id: this.$route.params.id,
        type: "proposal"
      };
      employerServices.inquiryPayment(option).then(res => {
        this.paymentInfo = res.data.data;
      });
    },

    getGatewayList() {
      employerServices.gateways().then(res => {
        this.gatewaysList = res.data.data;
      });
    },
    paymentInvoice() {
      const body = {
        type: "proposal",
        id: this.$route.params.id,
        gateway_id: "2"
      };
      employerServices.paymentInvoice(body).then(res => {
        console.log(res);
      });
    },
    goBack() {
      this.$router.back();
    }
  }
};
