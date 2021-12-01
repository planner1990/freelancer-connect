import UploadService from "../../core/services/modules/uploadService";
import { ServiceEmploymentService } from "../../core/services";
import thousandMask from "@/shared/mixins/thousandMask";
import Snackbar from "@/components/snackbar/index";

export default {
  name: "table-dashboard",
  components: { Snackbar },
  props: [
    "headersUserManagement",
    "dataUserManagement",
    "showSelect",
    "name",
    "disableInput"
  ],
  mixins: [thousandMask],
  data() {
    return {
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      e2: "پیش نویس",
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
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
          v => !!v || "لطفا عنوان را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان مورد نظر حداقل باید ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v || "لطفا توضیحات خود را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات مورد نظر باید بیش از ۲۰ کاراکتر باشد"
        ],
        minPrice: [v => !!v || "لطفا مبلغ را وارد کنید"],
        duration: [v => !!v || "لطفا مدت زمان را وارد کنید"],
        // prepayment: [
        //   v => !!v || "Name is required",
        //   v => (v && v.length >= 3) || "Name must be more than 3 characters"
        // ],
        freelancerDescription: [v => !!v || "لطفا توضیحات را وارد کنید"]
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
  computed: {
    maskThousand: {
      get: function() {
        return this.numberWithCommas(this.confirmJobOfferForm.minPrice);
      },
      set: function(newValue) {
        this.confirmJobOfferForm.minPrice = newValue;
      }
    }
  },
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
      this.showSnackbar = false;
      const body = {
        job_offer_id: id,
        price: this.confirmJobOfferForm.minPrice,
        duration: this.confirmJobOfferForm.duration,
        description: this.confirmJobOfferForm.freelancerDescription,
        prepayment: this.confirmJobOfferForm.prepayment,
        attachment_id: this.confirmJobOfferForm.attachmentId
      };
      ServiceEmploymentService.estimationForFreelancer(body).then(res => {
        if (res) {
          this.snackbarMessage = "عملیات با موفقیت انجام شد.";
          this.showSnackbar = true;
        }
      });
    },
    showEstimationEmployer(id) {
      if (this.disableInput === true) {
        ServiceEmploymentService.showEstimationEmployer(id).then(res => {
          const response = res.data.data;
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
      this.showSnackbar = false;
      if (this.disableInput === true) {
        ServiceEmploymentService.rejectEstimationEmployer(id).then(res => {
          console.log(res);
          this.snackbarMessage = "عملیات با موفقیت انجام شد.";
          this.showSnackbar = true;
          this.dialog = false;
        });
      }
    },
    hiredServiceByEmployer(id) {
      if (this.confirmJobOfferForm.prepayment) {
        this.showSnackbar = false;
        this.$router.push({
          path: `/employer/posted-services/${id}/payment`
        });
        this.dialog = false;
      } else {
        this.showSnackbar = false;
        ServiceEmploymentService.employmentService(id).then(res => {
          console.log(res);
          this.snackbarMessage = "عملیات با موفقیت انجام شد.";
          this.showSnackbar = true;
          this.dialog = false;
        });
      }
    },
    confirmEstimation(id) {
      if (this.$refs[`form`].validate() === true) {
        if (this.disableInput === true) {
          this.hiredServiceByEmployer(id);
          this.dialog = false;
        } else {
          this.estimationForFreelancer(id);
          this.dialog = false;
        }
      } else {
        this.$refs[`form`].validate();
      }
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    closeModal() {
      this.dialog = false;
      this.$refs[`form`].reset();
    }
  }
};
