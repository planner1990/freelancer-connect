import {
  freelancerServices
  // ticketService,
  // UploadService
} from "../../../../../core/services";
import Snackbar from "../../../../../components/snackbar/index";
import Vue from "vue";

export default {
  name: "conversation-with-freelancer",
  components: { Snackbar },
  props: [],
  data() {
    return {
      youMessage: "",
      messages: [],
      authenticated: "",
      completedAt: null,
      subject: "",
      dialog: false,
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false
    };
  },
  computed: {},
  mounted() {
    this.getChatList();
  },
  methods: {
    goBack() {
      window.history.back();
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
          attachment_id: null
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
    submitMilestone() {
      const body = {
        type: "proposal",
        id: this.$route.query.proposalId,
        attachment_id: null
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
    toggleFile() {
      const file = document.getElementById("avatar");
      file.click();
    },
    // getFileInput(event) {
    //   this.test = event;
    //   // this.youMessage = event[0].name;
    //   let formData = new FormData();
    //   if (event) {
    //     for (let i = 0; i <= event.length - 1; i++) {
    //       formData.append(`attachment[` + i + `]`, event[i]);
    //     }
    //     UploadService.uploadFile(formData)
    //       .then(res => {
    //         this.attachmentIdForChat = res.data.data.attachment_id;
    //       })
    //       .catch(() => {
    //         this.attachmentIdForChat = null;
    //       });
    //   }
    // },
    // storeTicket(body) {
    //   ticketService.storeTickets(body).then(res => {
    //     console.log(res);
    //   });
    // },
    // closeTicket() {
    //   const body = {
    //     thread_code: this.$route.query.threadCode
    //   };
    //   ticketService
    //     .fullFillTickets(body)
    //     .then(() => {
    //       this.dialog = false;
    //       this.showSnackbar = true;
    //       this.snackbarMessage = "تیکت شما با بسته شد.";
    //       this.getChatList();
    //     })
    //     .catch(() => {
    //       this.dialog = false;
    //     });
    // },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  }
};
