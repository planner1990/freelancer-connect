import SideFilter from "@/components/side-filter/index";
import MainInfo from "./main-info/index";
import SideInfo from "./side-info/index";
import { UploadService, AuthService, projectsService } from "@/core/services";
import * as types from "@/shared/store/types";
import Snackbar from "@/components/snackbar/index";
import $thousandMask from "@/shared/mixins/thousandMask";
import $removeThousand from "@/shared/mixins/removeThousand";
export default {
  name: "project-details",
  components: { SideFilter, MainInfo, SideInfo, Snackbar },
  props: [],
  mixins: [$thousandMask, $removeThousand],
  data() {
    return {
      projectDetailsById: {},
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      role: "",
      dialog: false,
      valid: false,
      row: "2",
      durationList: [],
      proposalForm: {
        project_duration_id: "",
        price: "",
        prepayment: "",
        description: "",
        attachmentId: []
      },
      proposalRule: {
        duration: [v => !!v || "لطفا مدت زمان را مشخص کنید"],
        price: [
          v => !!v || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.length >= 3) ||
            "مبلغ وارد شده باید بیش از ۵۰۰,۰۰۰ ریال باشد"
        ],
        // minPrice: [
        //   v => !!v || "حداقل مبلغ را وارد کنید",
        //   v =>
        //     (v && v.length >= 3) || "حداقل وارد شده باید بیش از ۳ کاراکتر باشد"
        // ],
        description: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
        ]
      }
    };
  },
  computed: {},
  async mounted() {
    await this.detectRoleUser();
    await this.getProjectListById();
    this.getProjectDurations();
  },
  methods: {
    mask() {
      this.proposalForm.price = this.$removeThousand(this.proposalForm.price);
      this.proposalForm.price = this.$thousandMask(this.proposalForm.price);
      this.proposalForm.prepayment = this.$removeThousand(
        this.proposalForm.prepayment
      );
      this.proposalForm.prepayment = this.$thousandMask(
        this.proposalForm.prepayment
      );
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    getProjectListById() {
      const id = this.$route.params.id;
      projectsService.getProjectById(id).then(res => {
        this.projectDetailsById = res.data.data;
      });
    },
    detectRoleUser() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        AuthService.getAssignedRole().then(res => {
          this.role = res.data.data.role;
        });
      }
    },
    handleFileInput(file) {
      let formData = new FormData();
      if (file.length >= 1) {
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        UploadService.uploadFile(formData).then(res => {
          this.proposalForm.attachmentId = res.data.data.attachment_id;
        });
      }
    },
    sendJobOfferToFreelancer() {
      this.showSnackbar = false;
      const body = {
        project_id: this.projectDetailsById.id,
        project_duration_id: this.proposalForm.project_duration_id,
        amount: this.proposalForm.price.replace(/,/g, ""),
        prepayment: this.proposalForm.prepayment.replace(/,/g, ""),
        content: this.proposalForm.description,
        attachment_id: this.proposalForm.attachmentId
      };
      projectsService
        .submitProposal(body)
        .then(res => {
          this.$refs.form.reset();
          this.dialog = false;
          this.snackbarMessage = res.data?.message;
          this.showSnackbar = true;
          setTimeout(() => {
            this.$router.push("/browse-projects");
          }, 2000);
        })
        .catch(error => {
          this.showSnackbar = true;
          this.snackbarMessage = error?.response.data.errors.err;
          this.snackbarMessage = error?.response.data.errors.prepayment;
          this.$refs.form.reset();
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
    getProjectDurations() {
      projectsService.projectDurations().then(res => {
        this.durationList = res.data.data;
      });
    }
  }
};
