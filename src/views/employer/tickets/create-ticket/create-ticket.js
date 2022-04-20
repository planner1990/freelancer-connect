import {
  employerServices,
  ticketService,
  UploadService
} from "../../../../core/services";
import Snackbar from "../../../../components/snackbar/index";

export default {
  name: "create-ticket",
  components: { Snackbar },
  props: [],
  data() {
    return {
      items: [],
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      valid: false,
      files: [],
      fileName: [],
      attachmentId: [],
      ticketForm: {
        subject: "",
        projectId: "",
        text: ""
      },
      ticketRule: {
        subject: [
          v => !!v || "لطفا موضوع تیکت را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        projectId: [v => !!v || "لطفا یکی پروژه را انتخاب کنید"],
        text: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 15) ||
            "توضیحات وارد شده باید بیش از ۱۵ کاراکتر باشد"
        ]
      }
    };
  },
  computed: {},
  mounted() {
    this.getOngoingProjects();
  },
  methods: {
    goBack() {
      window.history.back();
    },
    handleFileInput(file) {
      let formData = new FormData();
      if (file.length === 0) {
        this.fileName = [];
      }
      if (file) {
        this.fileName.push(file);
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        UploadService.uploadFile(formData).then(res => {
          this.attachmentId = res.data.data.attachment_id;
        });
      }
    },
    getOngoingProjects() {
      const options = {
        status: "ongoing",
        page: 1,
        perPage: 5
      };
      employerServices.getIndexProjects(options).then(res => {
        this.items = res.data.data?.projects;
        this.paginationData = res.data.data?.pagination;
      });
    },
    storeTicket() {
      const body = {
        text: this.ticketForm.text,
        subject: this.ticketForm.subject,
        project_id: this.ticketForm.projectId,
        thread_code: null,
        type: null,
        attachment_id: this.attachmentId
      };
      ticketService.storeTickets(body).then(() => {
        this.showSnackbar = true;
        this.snackbarMessage = "تیکت شما با موفقیت ایجاد شد.";
        window.history.back();
      });
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    handleAttachment(e) {
      console.log(e);
      this.fileName.push(e);
      if (e.length === 0) {
        this.fileName = [];
      }
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  }
};
