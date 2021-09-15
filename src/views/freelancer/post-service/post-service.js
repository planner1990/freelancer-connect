import DashboardCard from "../../../components/dashboardCard/index";
import HeaderSection from "../../../components/header-section/index";
import projectsService from "../../../core/services/modules/projectsService";
import Snackbar from "../../../components/snackbar/index";
import UploadService from "../../../core/services/modules/uploadService";
export default {
  name: "post-service",
  components: { DashboardCard, HeaderSection, Snackbar },
  props: [],
  data() {
    return {
      titleCard: "ویرایش پروژه",
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
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        price: [
          v => !!v || "Price is required",
          v => (v && v.length >= 3) || "Name must be more than 7 characters"
        ],
        description: [
          v => !!v || "Description is required",
          v =>
            (v && v.length >= 20) ||
            "Description must be more than 20 characters"
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
    hideSnackbar() {
      this.showSnackbar = false;
    },
    createService() {
      if (this.$refs[`form`].validate() === true) {
        const body = {
          min_price: this.serviceForm.price,
          title: this.serviceForm.title,
          description: this.serviceForm.description,
          attachment_id: this.serviceForm.attachmentId
        };
        projectsService.createService(body).then(res => {
          console.log(res);
          this.reset();
          this.showSnackbar = true;
          this.snackbarMessage = "سرویس شما با موفقیت ایجاد شد.";
        });
      } else {
        this.snackbarMessage = "لطفا کلیه موارد مشخص شده را کامل نمایید.";
        this.showSnackbar = true;
      }
    },
    handleFileInput(file) {
      let formData = new FormData();
      console.log(file);
      if (file) {
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        UploadService.uploadFile(formData).then(res => {
          this.serviceForm.attachmentId = res.data.data.attachment_id;
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
