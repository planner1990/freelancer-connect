import {
  ticketService,
  UploadService,
  freelancerServices
} from "../../../../core/services";

export default {
  name: "create-ticket",
  components: {},
  props: [],
  data() {
    return {
      items: [],
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
      },
      rules: [
        files =>
          !files ||
          !files.some(file => file.size > 4e6) ||
          "حجم فایل مورد نظر نباید بیش از ۴ مگابایت باشد."
      ]
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
      console.log(file);
      let formData = new FormData();
      if (file.length === 0) {
        this.fileName = [];
      }
      if (file && file.length !== 0) {
        this.fileName.push(file);
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        Array.from(formData.entries(), ([key, prop]) => ({
          [key]: {
            ContentLength:
              typeof prop === "string"
                ? prop.length
                : (this.fileSize = prop.size)
          }
        }));
        if (this.fileSize <= 4000000) {
          UploadService.uploadFile(formData).then(res => {
            this.attachmentId = res.data.data.attachment_id;
          });
        }
      }
    },
    sum(input, key) {
      let total;
      for (let i = 0; i < key; i++) {
        total += Number(input);
      }
      return console.log(total);
    },
    getOngoingProjects() {
      const options = {
        status: "ongoing",
        page: 1,
        perPage: 5
      };
      freelancerServices.getFilteredProjects(options).then(res => {
        this.items = res.data.data?.projects;
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
    }
  }
};
