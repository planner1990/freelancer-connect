import UploadService from "../../../../core/services/modules/uploadService";
import projectsService from "../../../../core/services/modules/projectsService";
import { mapMutations } from "vuex";
import * as types from "../../../../shared/store/types";
export default {
  name: "service-side-info",
  components: {},
  props: ["serviceDetailsById", "role"],
  data() {
    return {
      value: [0, 1000],
      dialog: false,
      valid: false,
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
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        description: [
          v => !!v || "Description is required",
          v =>
            (v && v.length >= 20) ||
            "Description must be more than 20 characters"
        ]
      }
    };
  },
  computed: {
    ...mapMutations([
      types.HandleEmployerToLogin.mutations.HANDLE_EMPLOYER_TO_LOGIN_MUTATE
    ])
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
      const body = {
        service_id: this.serviceDetailsById.id,
        title: this.jobOfferForm.title,
        description: this.jobOfferForm.description,
        attachment_id: this.jobOfferForm.attachmentId
      };
      projectsService
        .sendJobOffer(body)
        .then(res => {
          console.log(res);
          this.$refs.form.reset();
          this.dialog = false;
        })
        .catch(error => {
          console.log(error);
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
    }
  }
};
