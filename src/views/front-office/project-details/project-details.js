import SideFilter from "../../../components/side-filter/index";
import MainInfo from "./main-info/index";
import SideInfo from "./side-info/index";
import projectsService from "../../../core/services/modules/projectsService";
import { AuthService } from "../../../core/services";
import UploadService from "../../../core/services/modules/uploadService";
import * as types from "../../../shared/store/types";
export default {
  name: "project-details",
  components: { SideFilter, MainInfo, SideInfo },
  props: [],
  data() {
    return {
      projectDetailsById: {},
      role: "",
      dialog: false,
      valid: false,
      durationList: [],
      proposalForm: {
        project_duration_id: "",
        price: "",
        minPrice: "",
        description: "",
        attachmentId: []
      },
      proposalRule: {
        duration: [v => !!v || "لطفا مدت زمان را مشخص کنید"],
        price: [
          v => !!v || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.length >= 3) || "مبلغ وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        minPrice: [
          v => !!v || "حداقل مبلغ را وارد کنید",
          v =>
            (v && v.length >= 3) || "حداقل وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
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
      const body = {
        project_id: this.projectDetailsById.id,
        project_duration_id: this.proposalForm.project_duration_id,
        amount: this.proposalForm.price,
        prepayment: this.proposalForm.minPrice,
        content: this.proposalForm.description,
        attachment_id: this.proposalForm.attachmentId
      };
      projectsService
        .submitProposal(body)
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
    },
    getProjectDurations() {
      projectsService.projectDurations().then(res => {
        this.durationList = res.data.data;
      });
    }
  }
};
