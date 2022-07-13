import DashboardCard from "../../../../components/dashboardCard/index";
import ProjectList from "../../../../components/project-list/index";
import DialogDashboard from "../../../../components/dialog-dashboard/index";
import headerSection from "../../../../components/header-section/index";
import Snackbar from "../../../../components/snackbar/index";
import Vue from "vue";
import {
  employerServices,
  freelancerServices,
  UploadService,
  ticketService
} from "@/core/services";
export default {
  name: "progress-section",
  components: {
    DashboardCard,
    ProjectList,
    DialogDashboard,
    headerSection,
    Snackbar
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
      status: "pending",
      projectDetails: {},
      proposalForm: {},
      mileStones: [],
      unlock: 0,
      completedAt: null,
      nameRules: [
        v => !!v.trim() || "لطفا نام خود را وارد کنید",
        v => (v && v.length <= 50) || "نام وارد شده باید بیش از ۵۰ کاراکتر باشد"
      ],
      projectListItems: [
        {
          id: 1,
          name: "name",
          title: "ssssss",
          amount: "در انتظار تایید کارفرما",
          time: "29/2/1400",
          expirationStatus: "منقضی شده",
          status: "statusssssss"
        }
      ],
      youMessage: "",
      messages: [],
      authenticated: "",
      jobOfferForm: {
        linkName: "",
        attachmentId: null
      },
      jobOfferRule: {
        linkName: [
          v => !!v.trim() || "لطفا آدرس لینک را وارد کنید",
          v =>
            (v && v.length >= 3) ||
            "آدرس لینک وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v.trim() || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
        ]
      },
      dialog: false,
      dialogDownloadFile: false,
      valid: false,
      dialog2: false,
      rejDesc: "",
      loading: false,
      subject: "",
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      listOfFileInput: [],
      isShow: false,
      fileInput: [],
      attachmentIdForChat: ""
    };
  },
  computed: {
    totalPage() {
      return 3;
    }
  },
  mounted() {
    this.showDetailProject();
    this.getProposalsById();
    this.getChatList();
    this.getIndexMilestone();
  },
  methods: {
    showDetailProject() {
      const id = this.$route.params.id;
      employerServices.projectShowByIdForFreelancerSide(id).then(res => {
        this.projectDetails = res.data.data;
      });
    },
    getProposalsById() {
      freelancerServices
        .getPendingProposalById(this.$route.query.proposalId)
        .then(res => {
          this.proposalForm = res.data.data["freelancer"];
          this.attachments = res.data.data.attachments;
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
        this.messages.push({ text: this.youMessage, role: "freelancer" });
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
      freelancerServices
        .storeChat(body)
        .then(() => {
          this.isShow = false;
          this.attachmentIdForChat = null;
        })
        .catch(() => {
          this.isShow = false;
        });
    },
    submitMilestone(index) {
      if (index === this.unlock) {
        const body = {
          type: "proposal",
          id: this.$route.query.proposalId,
          attachment_id: this.jobOfferForm.attachmentId,
          description: this.jobOfferForm.linkName
        };
        freelancerServices
          .submitMilestone(body)
          .then(() => {
            this.dialog = false;
            this.unlock += 1;
            this.getIndexMilestone();
          })
          .catch(error => {
            console.log(error);
          });
      }
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
          res.data.data.milestones.forEach((item, index) => {
            if (item["confirmation"] === 1) {
              this.unlock = index + 1;
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    toggleFile() {
      const file = document.getElementById("avatar");
      file.click();
    },
    getFileInput(event) {
      this.loading = false;
      this.isShow = event.length >= 1;
      this.listOfFileInput = event;
      let formData = new FormData();
      if (event && event.length >= 1) {
        this.loading = true;
        for (let i = 0; i <= event.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, event[i]);
        }
        UploadService.uploadFile(formData)
          .then(res => {
            this.attachmentIdForChat = res.data.data.attachment_id;
            this.loading = false;
          })
          .catch(() => {
            this.attachmentIdForChat = null;
            this.loading = false;
          });
      } else {
        this.attachmentIdForChat = "";
      }
    },
    cancelProject() {
      const body = {
        text: this.rejDesc,
        subject: null,
        project_id: this.projectDetails.id,
        thread_code: null,
        type: 0,
        attachment_id: null
      };
      ticketService.storeTickets(body).then(res => {
        console.log(res);
        this.dialog2 = false;
      });
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  }
};
