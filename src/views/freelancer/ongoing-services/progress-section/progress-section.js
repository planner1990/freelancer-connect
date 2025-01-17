import DashboardCard from "../../../../components/dashboardCard/index";
import ProjectList from "../../../../components/project-list/index";
import DialogDashboard from "../../../../components/dialog-dashboard/index";
import employerServices from "../../../../core/services/modules/employerServices";
import headerSection from "../../../../components/header-section/index";
import freelancerServices from "../../../../core/services/modules/freelancerServices";
import Vue from "vue";
import UploadService from "../../../../core/services/modules/uploadService";
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
      status: "pending",
      projectDetails: {},
      proposalForm: {},
      mileStones: [],
      unlock: 0,
      completedAt: null,
      nameRules: [
        v => !!v || "لطفا نام خود را وارد کنید",
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
      jobOfferForm: {
        linkName: "",
        attachmentId: []
      },
      jobOfferRule: {
        linkName: [
          v => !!v || "لطفا آدرس لینک را وارد کنید",
          v =>
            (v && v.length >= 3) ||
            "آدرس لینک وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
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
    // this.getProposalsById();
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
    // getProposalsById() {
    //   freelancerServices
    //     .getPendingProposalById(this.$route.params.id)
    //     .then(res => {
    //       this.proposalForm = res.data.data["freelancer"];
    //       this.attachments = res.data.data.attachments;
    //     });
    // },
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
      freelancerServices.storeChat(body).then(res => {
        console.log(res);
      });
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
    submitMilestone(index) {
      if (index === this.unlock) {
        const body = {
          type: "estimation",
          id: this.$route.query.estimationId,
          attachment_id: this.jobOfferForm.attachmentId
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
      const estimationId = this.$route.query.estimationId;
      freelancerServices
        .getChatListForService(estimationId)
        .then(res => {
          console.log(res);
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
        .then(response => {
          this.mileStones = response.data.data?.milestones;
          this.completedAt = response.data.data?.completed_at;
          response.data.data.milestones.forEach((item, index) => {
            if (item.status === 2) {
              this.unlock = index + 1;
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
