import SideFilter from "@/components/side-filter/index";
import MainInfo from "./main-info/index";
import SideInfo from "./side-info/index";
import {
  UploadService,
  AuthService,
  projectsService,
  ScrollTopService
} from "@/core/services";
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
          v => !!v.trim() || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.replace(/,/g, "") >= 50000000) ||
            "مبلغ وارد شده باید بیش از ۵۰.۰۰۰.۰۰۰ ریال باشد"
        ],
        // minPrice: [
        //   v => !!v || "حداقل مبلغ را وارد کنید",
        //   v =>
        //     (v && v.length >= 3) || "حداقل وارد شده باید بیش از ۳ کاراکتر باشد"
        // ],
        description: [
          v => !!v.trim() || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
        ]
      },
      breakDown: "",
      breakDownValue: 3,
      ticksLabels: ["1", "2", "3", "4", "5"],
      commissionRate: "",
      mainCommission: 0
    };
  },
  computed: {},
  async mounted() {
    await this.detectRoleUser();
    await this.getProjectListById();
    this.getProjectDurations();
    ScrollTopService.$scrollTop();
    this.getCommission();
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
      if (this.$refs.form.validate() === true) {
        this.showSnackbar = false;
        const body = {
          project_id: this.projectDetailsById.id,
          project_duration_id: this.proposalForm.project_duration_id,
          amount: this.proposalForm.price.replace(/,/g, ""),
          prepayment: this.proposalForm.prepayment?.replace(/,/g, ""),
          content: this.proposalForm.description,
          attachment_id: this.proposalForm.attachmentId,
          breakdown_manual_installments: this.breakDownValue
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
            // this.snackbarMessage = "امکان ارسال پروپوزال وجود ندارد.";
            this.snackbarMessage = error?.response.data.errors.err;
            this.snackbarMessage = error?.response.data.message;
            this.$refs.form.reset();
            this.dialog = false;
          });
      }
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
    },
    getCommission() {
      projectsService.getCommission().then(res => {
        console.log(res);
        this.commissionRate = res.data?.data["percentage"];
      });
    },
    setSlider(e) {
      switch (e) {
        case 0:
          this.breakDownValue = 1;
          break;
        case 25:
          this.breakDownValue = 2;
          break;
        case 50:
          this.breakDownValue = 3;
          break;
        case 75:
          this.breakDownValue = 4;
          break;
        case 100:
          this.breakDownValue = 5;
          break;
        default:
          this.breakDownValue = 3;
      }
    },
    setSliderFromAPI(e) {
      switch (e) {
        case 1:
          this.breakDown = 0;
          break;
        case 2:
          this.breakDown = 25;
          break;
        case 3:
          this.breakDown = 50;
          break;
        case 4:
          this.breakDown = 75;
          break;
        case 5:
          this.breakDown = 75;
          break;
        default:
          this.breakDown = 50;
      }
    },
    getInstallments() {
      const price = this.proposalForm.price.replace(/,/g, "");
      projectsService.getInstallments(price).then(res => {
        this.setSliderFromAPI(res.data.data["installments_number"]);
      });
    },
    calculateCommission() {
      const price = this.proposalForm.price.replace(/,/g, "");
      this.mainCommission = (this.commissionRate / 100) * price;
    }
  }
};
