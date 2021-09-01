import UploadService from "../../core/services/modules/uploadService";
import projectsService from "../../core/services/modules/projectsService";

export default {
  name: "table-dashboard",
  components: {},
  props: ["headersUserManagement", "dataUserManagement", "showSelect", "name"],
  data() {
    return {
      e2: "پیش نویس",
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialog: false,
      valid: false,
      confirmJobOfferForm: {
        title: "",
        description: "",
        attachmentId: [],
        minPrice: "",
        duration: "",
        prepayment: "",
        freelancerDescription: ""
      },
      confirmJobOfferRule: {
        title: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        description: [
          v => !!v || "Description is required",
          v =>
            (v && v.length >= 20) ||
            "Description must be more than 20 characters"
        ],
        minPrice: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        time: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        prepayment: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        freelancerDescription: [
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ]
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    editItem(item) {
      this.editedIndex = this.dataUserManagement.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.dataUserManagement.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    confirmChangeServiceStatus() {
      console.log("confirmChangeServiceStatus");
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
    sendJobOfferToFreelancer() {
      const body = {
        service_id: this.serviceDetailsById.id,
        title: this.jobOfferForm.title,
        description: this.jobOfferForm.description,
        attachment_id: this.jobOfferForm.attachmentId
      };
      projectsService
        .sendJobOffer(body)
        .then(res => {
          console.log(res);
          this.$refs.form.reset();
          this.dialog = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
