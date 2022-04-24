import DashboardCard from "@/components/dashboardCard/index";
import ProjectList from "@/components/project-list/index";
import DialogDashboard from "@/components/dialog-dashboard/index";
import Vue from "vue";
import {
  employerServices,
  freelancerServices,
  UploadService
} from "@/core/services";
import headerSection from "@/components/header-section/index";
export default {
  name: "progress-section",
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
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 10 characters"
      ],
      youMessage: "",
      messages: [],
      authenticated: "",
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
      valid: false,
      attachmentIdForChat: null
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
      employerServices.projectShowById(id).then(res => {
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
          type: "proposal",
          id: this.$route.query.proposalId,
          text: this.youMessage,
          attachment_id: this.attachmentIdForChat
        };
        this.storeChat(body);
        this.youMessage = "";
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
        .then(() => {
          this.dialog = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getChatList() {
      const proposalId = this.$route.query.proposalId;
      freelancerServices
        .getChatList(proposalId)
        .then(res => {
          this.messages = res.data.data.messages;
          this.authenticated = res.data.data.authenticated;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getIndexMilestone() {
      const proposalId = this.$route.query.proposalId;
      employerServices
        .indexMilestone(proposalId)
        .then(res => {
          this.mileStones = res.data.data?.milestones;
          this.completedAt = res.data.data?.completed_at;
        })
        .catch(error => {
          console.log(error);
        });
    },

    goToPaymentPage(id) {
      // const body = {
      //   id
      // };
      // employerServices.mileStonePayFake(body).then();
      this.$router.push({
        path: `/employer/ongoing-projects/${id}/payment`
      });
      this.dialog = false;
    },

    mileStoneAction(id, status) {
      const body = {
        milestone_id: id,
        confirmation: status
      };
      employerServices.mileStoneAction(body).then(() => {
        this.getIndexMilestone();
        this.dialog = false;
      });
    },
    toggleFile() {
      const file = document.getElementById("avatar");
      file.click();
    },
    getFileInput(file) {
      this.youMessage = file[0].name;
      let formData = new FormData();
      console.log(file);
      if (file) {
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        console.log(formData);
        UploadService.uploadFile(formData)
          .then(res => {
            this.attachmentIdForChat = res.data.data.attachment_id;
          })
          .catch(() => {
            this.attachmentIdForChat = null;
          });
      }
    }
  }
};
