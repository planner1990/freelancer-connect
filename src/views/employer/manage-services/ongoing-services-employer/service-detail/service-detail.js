import DashboardCard from "../../../../../components/dashboardCard/index";
import ProjectList from "../../../../../components/project-list/index";
import DialogDashboard from "../../../../../components/dialog-dashboard/index";
import employerServices from "../../../../../core/services/modules/employerServices";
import headerSection from "../../../../../components/header-section/index";
import freelancerServices from "../../../../../core/services/modules/freelancerServices";
import Vue from "vue";
import UploadService from "../../../../../core/services/modules/uploadService";
export default {
  name: "service-detail",
  components: {
    DashboardCard,
    ProjectList,
    DialogDashboard,
    headerSection
  },
  props: [],
  mixins: [],
  data() {
    return {
      pageCount: 5,
      page: 1,
      showSelect: true,
      attachments: [],
      totalData: null,
      status: "ongoing",
      projectDetails: {},
      proposalForm: {},
      mileStones: [],
      completedAt: null,
      // nameRules: [
      //   v => !!v || "Name is required",
      //   v => (v && v.length <= 50) || "Name must be less than 10 characters"
      // ],
      youMessage: "",
      messages: [],
      jobOfferForm: {
        linkName: "",
        attachmentId: []
      },
      jobOfferRule: {
        linkName: [
          v => !!v || "لطفا لینک را وارد کنید",
          v => (v && v.length >= 3) || "لینک باید حداقل ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v => (v && v.length >= 20) || "توضیحات حداقل باید ۲۰ کاراکتر باشد"
        ]
      },
      dialog: false,
      valid: false
    };
  },
  computed: {
    totalPage() {
      return 3;
    }
  },
  mounted() {
    this.showDetailProject();
    this.getChatList();
    this.getIndexMilestone();
  },
  methods: {
    showDetailProject() {
      const id = this.$route.params.id;
      employerServices.serviceShowById(id).then(res => {
        this.projectDetails = res.data.data;
      });
    },
    changePage(currentPage) {
      const options = {
        status: this.status,
        page: currentPage,
        perPage: 5
      };
      console.log(options);
    },
    sendMessage(direction) {
      if (!this.youMessage) {
        return;
      }
      if (direction === "out") {
        this.messages.push({ text: this.youMessage, role: "employer" });
        const body = {
          type: "estimation",
          id: this.$route.query.estimationId,
          text: this.youMessage
        };
        this.storeChat(body);
        this.youMessage = "";
      } else {
        alert("خطایی رخ داده است.");
      }
      Vue.nextTick(() => {
        let messageDisplay = this.$refs.chatArea;
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      });
    },
    storeChat(body) {
      freelancerServices.storeChat(body).then();
    },
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
    submitMilestone() {
      const body = {
        type: "proposal",
        id: this.$route.query.proposalId,
        attachment_id: this.jobOfferForm.attachmentId
      };
      freelancerServices
        .submitMilestone(body)
        .then(res => {
          this.dialog = false;
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getChatList() {
      const estimationId = this.$route.query.estimationId;
      freelancerServices
        .getChatListForService(estimationId)
        .then(res => {
          this.messages = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getIndexMilestone() {
      const estimationId = this.$route.query.estimationId;
      employerServices
        .indexMilestoneForServices(estimationId)
        .then(res => {
          this.mileStones = res.data.data?.milestones;
          this.completedAt = res.data.data?.completed_at;
        })
        .catch(error => {
          console.log(error);
        });
    },

    fakePayment(mileStoneId) {
      const body = {
        milestone_id: mileStoneId
      };
      employerServices.fakePaymentEmployer(body).then(res => {
        console.log(res);
        this.getIndexMilestone();
        this.dialog = false;
      });
    },

    mileStoneAction(id, status) {
      const body = {
        milestone_id: id,
        status: status
      };
      employerServices.mileStoneAction(body).then(res => {
        console.log(res);
        this.getIndexMilestone();
        this.dialog = false;
      });
    }
  }
};
