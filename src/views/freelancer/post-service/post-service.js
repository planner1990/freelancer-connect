import DashboardCard from "@/components/dashboardCard/index";
import HeaderSection from "@/components/header-section/index";
import projectsService from "@/core/services/modules/projectsService";
import Snackbar from "@/components/snackbar/index";
import { UploadService } from "@/core/services";
import thousandMask from "@/shared/mixins/thousandMask";
export default {
  name: "post-service",
  components: { DashboardCard, HeaderSection, Snackbar },
  props: [],
  mixins: [thousandMask],
  data() {
    return {
      titleCard: "ایجاد خدمت",
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      valid: false,
      serviceForm: {
        title: "",
        description: "",
        price: null,
        attachmentId: ""
      },
      createServiceRule: {
        title: [
          v => !!v || "لطفا عنوان را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        price: [
          v => !!v || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.length >= 3) ||
            "مبلغ وارد شده باید بیش از ۵۰۰,۰۰۰ ریال باشد"
          // v => /^[789]\d{9}$/.test(v) || "ایمیل وارد شده معتبر نیست"
        ],
        description: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
        ]
      },
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    };
  },
  computed: {},
  mounted() {},
  methods: {
    thousandMaskPrice() {
      this.serviceForm.price = this.numberWithCommas(
        this.$refs?.inputRef?.value
      );
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    createService() {
      this.showSnackbar = false;
      if (this.$refs[`form`].validate() === true) {
        const body = {
          min_price: this.serviceForm.price.replace(/,/g, ""),
          title: this.serviceForm.title,
          description: this.serviceForm.description,
          attachment_id: this.serviceForm.attachmentId
        };
        projectsService.createService(body).then(res => {
          console.log(res);
          this.reset();
          this.showSnackbar = true;
          this.snackbarMessage = "سرویس شما با موفقیت ایجاد شد.";
          this.$router.push("/freelancer/my-services");
        });
      } else {
        this.snackbarMessage = "لطفا کلیه موارد مشخص شده را کامل نمایید.";
        this.showSnackbar = true;
      }
    },
    handleFileInput(file) {
      this.showSnackbar = false;
      let formData = new FormData();
      if (file.length >= 1) {
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        UploadService.uploadFile(formData)
          .then(res => {
            this.serviceForm.attachmentId = res.data.data.attachment_id;
          })
          .catch(err => {
            console.log(err);
            this.showSnackbar = true;
            this.snackbarMessage = "حجم فایل بارگزاری شده بیش از حد مجاز است.";
          });
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    onUpdate(text) {
      this.text = text;
    }
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    }
  }
};
