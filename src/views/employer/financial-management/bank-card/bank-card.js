import DashboardCard from "@/components/dashboardCard/index";
import { freelancerServices } from "@/core/services";
export default {
  name: "bank-card",
  components: { DashboardCard },
  props: [],
  data() {
    return {
      dialog: false,
      valid: false,
      title: "",
      bankName: "",
      sheba: "",
      cardId: "",
      items: [],
      accountInfo: [],
      formRule: {
        title: [
          v => !!v.trim() || "لطفا نام خود را وارد کنید",
          v => (v && v.length >= 3) || "این آیتم بیشتر از 3 کاراکتر نباشد"
        ],
        bankName: [
          v => !!v.trim() || "لطفا نام خود را وارد کنید",
          v => (v && v.length >= 2) || "این آیتم بیشتر از 2 کاراکتر نباشد"
        ],
        sheba: [
          v => !!v.trim() || "لطفا شماره شبا خود را وارد کنید",
          v => (v && v.length === 24) || "این آیتم باید ۲۴ کاراکتر باشد"
        ],
        cardId: [
          v => !!v.trim() || "لطفا شماره کارت خود را وارد کنید",
          v => (v && v.length === 16) || "این آیتم باید ۱۶ کاراکتر باشد"
        ]
      }
    };
  },
  computed: {},
  mounted() {
    this.indexAccount();
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    resetForm() {
      this.$refs.form.reset();
    },
    addToBankCard() {
      if (this.$refs.form.validate() === true) {
        // this.accountInfo.push({
        //   title: this.title,
        //   sheba: this.sheba,
        //   cardId: this.cardId
        // });
        this.accountStore();
        this.dialog = false;
        this.resetForm();
      } else {
        this.validate();
      }
    },
    accountStore() {
      const body = {
        name: this.title,
        bank_name: this.bankName,
        card_number: this.cardId,
        iban: this.sheba
      };
      freelancerServices.accountStore(body).then(res => {
        console.log(res);
        this.indexAccount();
      });
    },
    indexAccount() {
      freelancerServices.indexAccount().then(res => {
        this.accountInfo = res.data.data;
      });
    },
    closeDialog() {
      this.resetForm();
      this.dialog = false;
    }
  }
};
