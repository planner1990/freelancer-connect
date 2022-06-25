import { UploadService, projectsService } from "@/core/services";
import { mapMutations } from "vuex";
import * as types from "../../../../shared/store/types";
import Snackbar from "@/components/snackbar/index";
export default {
  name: "service-side-info",
  components: { Snackbar },
  props: ["serviceDetailsById", "role"],
  data() {
    return {
      value: [0, 1000],
      dialog: false,
      valid: false,
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      min: 0,
      max: 1000,
      checkboxLabel: [
        "موبایل",
        "دیجیتال مارکتینگ",
        "کپی رایتینگ",
        "ویدیو",
        "انیمیشن",
        "طراحی وب",
        "یو آی",
        "یو ایکس",
        "وب",
        "گرافیک",
        "بک اند",
        "فرانت اند",
        "پی اچ پی",
        "لاراول",
        "ویو جی اس",
        "جاوا"
      ],
      selectReport: "",
      items: [
        {
          text: "اشتراک با اینستاگرام",
          icon: "mdi-instagram",
          color: "#af4261"
        },
        { text: "اشتراک با توییتر", icon: "mdi-twitter", color: "#55acee" },
        { text: "اشتراک با لینکدین", icon: "mdi-linkedin", color: "#0a66c2" },
        { text: "اشتراک با پینترست", icon: "mdi-pinterest", color: "#dd4b39" }
      ],
      jobOfferForm: {
        title: "",
        description: "",
        attachmentId: []
      },
      jobOfferRule: {
        title: [
          v => !!v.trim() || "لطفا عنوان را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v.trim() || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
        ]
      }
    };
  },
  computed: {
    ...mapMutations([
      types.HandleEmployerToLogin.mutations.HANDLE_EMPLOYER_TO_LOGIN_MUTATE
    ]),
    validationForm() {
      return (this.valid = !!(
        this.jobOfferForm.title.length >= 3 &&
        this.jobOfferForm.description.length >= 20
      ));
    }
  },
  mounted() {},
  methods: {
    handleFileInput(file) {
      let formData = new FormData();
      if (file) {
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        UploadService.uploadFile(formData).then(res => {
          this.jobOfferForm.attachmentId = res.data.data.attachment_id;
        });
      }
    },
    sendJobOfferToFreelancer() {
      this.showSnackbar = false;
      const body = {
        service_id: this.serviceDetailsById.id,
        title: this.jobOfferForm.title,
        description: this.jobOfferForm.description,
        attachment_id: this.jobOfferForm.attachmentId
      };
      projectsService
        .sendJobOffer(body)
        .then(() => {
          this.showSnackbar = true;
          this.snackbarMessage = "درخواست شما با موفقیت ارسال شد.";
          // this.snackbarMessage = res.data?.message;
          this.dialog = false;
          setTimeout(() => {
            this.$router.push("/browse-services");
          }, 2000);
          // this.$refs.form.reset();
        })
        .catch(error => {
          this.showSnackbar = true;
          this.snackbarMessage = error?.response.data.errors.err
            ? error?.response.data.errors.err
            : error?.response.data.message;
          this.dialog = false;
        });
    },
    goToLogin() {
      this.$store.commit(
        types.HandleEmployerToLogin.mutations.HANDLE_EMPLOYER_TO_LOGIN_MUTATE,
        {
          currentURL: this.$route.fullPath,
          serviceId: this.$route.params.id
        }
      );
      this.$router.push("/login");
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  }
};
