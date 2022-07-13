import { ticketService, UploadService } from "../../../../core/services";
import Snackbar from "../../../../components/snackbar/index";
import Vue from "vue";

export default {
  name: "chat-room",
  components: { Snackbar },
  props: [],
  data() {
    return {
      youMessage: [],
      messages: [],
      authenticated: "",
      completedAt: null,
      subject: "",
      dialog: false,
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      listOfFileInput: [],
      isShow: false,
      fileInput: [],
      attachmentIdForChat: []
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
      const threadCode = this.$route.query.threadCode;
      ticketService
        .indexTicketsByThreadCode(threadCode)
        .then(res => {
          this.messages = res.data.data.data.tickets;
          this.subject = res.data.data.data.tickets[0];
          this.authenticated = res.data.data.data.authenticated;
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
        this.messages.push({ text: this.youMessage, role: "freelancer" });
        const body = {
          text: this.youMessage,
          subject: this.subject.subject,
          project_id: this.$route.query.projectId,
          thread_code: this.$route.query.threadCode,
          type: null,
          attachment_id: this.attachmentIdForChat
        };
        this.storeTicket(body);
        this.youMessage = "";
      }
      Vue.nextTick(() => {
        let messageDisplay = this.$refs.chatArea;
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      });
    },
    toggleFile() {
      const file = document.getElementById("avatar");
      file.click();
    },
    getFileInput(event) {
      this.isShow = event.length >= 1;
      this.listOfFileInput = event;
      let formData = new FormData();
      if (event) {
        for (let i = 0; i <= event.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, event[i]);
        }
        UploadService.uploadFile(formData)
          .then(res => {
            this.attachmentIdForChat = res.data.data.attachment_id;
          })
          .catch(() => {
            this.attachmentIdForChat = null;
          });
      }
    },
    storeTicket(body) {
      ticketService
        .storeTickets(body)
        .then(() => {
          this.isShow = false;
        })
        .catch(() => {
          this.isShow = false;
        });
    },
    closeTicket() {
      const body = {
        thread_code: this.$route.query.threadCode
      };
      ticketService
        .fullFillTickets(body)
        .then(() => {
          this.dialog = false;
          this.showSnackbar = true;
          this.snackbarMessage = "تیکت شما با بسته شد.";
          this.getChatList();
        })
        .catch(() => {
          this.dialog = false;
        });
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  }
};
