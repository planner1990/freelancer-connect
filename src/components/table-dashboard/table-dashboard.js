import UploadService from "../../core/services/modules/uploadService";
import { ServiceEmploymentService } from "../../core/services";

export default {
  name: "table-dashboard",
  components: {},
  props: [
    "headersUserManagement",
    "dataUserManagement",
    "showSelect",
    "name",
    "disableInput"
  ],
  data() {
    return {
      e2: "پیش نویس",
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialog: false,
      valid: false,
      total_price: null,
      confirmJobOfferForm: {
        title: "",
        description: "",
        attachmentId: [],
        minPrice: null,
        duration: null,
        prepayment: null,
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
        duration: [
          v => !!v || "Name is required",
          v => (v && v.length >= 1) || "Name must be more than 3 characters"
        ],
        // prepayment: [
        //   v => !!v || "Name is required",
        //   v => (v && v.length >= 3) || "Name must be more than 3 characters"
        // ],
        freelancerDescription: [
          v => !!v || "Name is required",
          v => (v && v.length >= `3`) || "Name must be more than 3 characters"
        ]
      },
      files: [
        {
          color: "blue",
          icon: "mdi-clipboard-text",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary"
        },
        {
          color: "amber",
          icon: "mdi-gesture-tap-button",
          subtitle: "Jan 10, 2014",
          title: "Kitchen remodel"
        },
        {
          color: "red",
          icon: "mdi-clipboard-text",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary"
        }
      ]
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
          this.confirmJobOfferForm.attachmentId = res.data.data.attachment_id;
        });
      }
    },
    estimationForFreelancer(id) {
      const body = {
        job_offer_id: id,
        price: this.confirmJobOfferForm.minPrice,
        duration: this.confirmJobOfferForm.duration,
        description: this.confirmJobOfferForm.freelancerDescription,
        prepayment: this.confirmJobOfferForm.prepayment,
        attachment_id: this.confirmJobOfferForm.attachmentId
      };
      ServiceEmploymentService.estimationForFreelancer(body).then();
    },
    showEstimationEmployer(id) {
      if (this.disableInput === true) {
        ServiceEmploymentService.showEstimationEmployer(id).then(res => {
          const response = res.data.data[0];
          this.total_price = response.total_price;
          this.confirmJobOfferForm = {
            title: response.description,
            description: response.description,
            attachmentId: response["attachments"],
            minPrice: response.price,
            duration: response.duration,
            prepayment: response.prepayment,
            freelancerDescription: response.description
          };
        });
      }
    },
    rejectEstimation(id) {
      if (this.disableInput === true) {
        ServiceEmploymentService.rejectEstimationEmployer(id).then(res => {
          console.log(res);
          this.dialog = false;
        });
      }
    },
    hiredServiceByEmployer(id) {
      ServiceEmploymentService.employmentService(id).then(res => {
        console.log(res);
        this.dialog = false;
      });
    },
    confirmEstimation(id) {
      if (this.disableInput === true) {
        this.hiredServiceByEmployer(id);
        this.dialog = false;
      } else {
        this.estimationForFreelancer(id);
        this.dialog = false;
      }
    }
  }
};
