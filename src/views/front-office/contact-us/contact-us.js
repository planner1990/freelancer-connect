import { profileServices } from "../../../core/services";
import Snackbar from "../../../components/snackbar";

export default {
  name: "contact-us",
  components: { Snackbar },
  props: [],
  data() {
    return {
      messageBody: {
        full_name: null,
        email: null,
        phone: "",
        message: ""
      },
      messageRule: {
        full_name: [
          v => !!v || "لطفا نام و نام خانوادگی خود را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        email: [
          v => !!v || "لطفا ایمیل خود را وارد کنید",
          v => /.+@.+\..+/.test(v) || "ایمیل وارد شده معتبر نیست"
        ],
        message: [
          v => !!v || "لطفا پیام خود را وارد کنید",
          v =>
            (v && v.length >= 15) ||
            "توضیحات وارد شده باید بیش از ۱۵ کاراکتر باشد"
        ]
      },
      valid: false,
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false
    };
  },
  computed: {},
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path });
    },
    validate() {
      this.$refs.newForm.validate();
    },
    reset() {
      this.$refs.newForm.reset();
    },
    resetValidation() {
      this.$refs.newForm.resetValidation();
    },
    sendMessageContactUs() {
      this.showSnackbar = true;
      if (this.$refs.newForm.validate() === true) {
        const body = {
          full_name: this.messageBody.full_name,
          email: this.messageBody.email,
          phone: this.messageBody.phone,
          message: this.messageBody.message
        };
        profileServices
          .sendMessageContactUs(body)
          .then(() => {
            this.showSnackbar = true;
            this.snackbarMessage = "پیام شما با موفقیت ارسال شد.";
            this.reset();
          })
          .catch(() => {
            this.showSnackbar = true;
            this.snackbarMessage = "ارسال پیام با مشکل مواجه شد.";
          });
      } else {
        this.validate();
      }
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  }
};
