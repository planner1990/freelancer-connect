import { freelancerServices, UploadService } from "../../../../core/services";
import Vue from "vue";

export default {
  name: "chat-room",
  components: {},
  props: [],
  data() {
    return {
      youMessage: "",
      messages: [],
      authenticated: "",
      completedAt: null
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
      // const proposalId = this.$route.query.proposalId;
      freelancerServices
        .getChatList("12")
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
        this.messages.push({ text: this.youMessage, role: "freelancer" });
        const body = {
          type: "proposal",
          // id: this.$route.query.proposalId,
          id: "12",
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
    toggleFile() {
      const file = document.getElementById("avatar");
      file.click();
    },
    getFileInput(event) {
      this.test = event;
      // this.youMessage = event[0].name;
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
    storeChat(body) {
      freelancerServices.storeChat(body).then(() => {
        this.attachmentIdForChat = null;
      });
    }
  }
};
