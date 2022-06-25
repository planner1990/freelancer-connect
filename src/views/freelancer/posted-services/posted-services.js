import DashboardCard from "@/components/dashboardCard/index";
import TableDashboard from "@/components/table-dashboard/index";
import {
  freelancerServices,
  UploadService,
  ServiceEmploymentService
} from "@/core/services";
import Snackbar from "@/components/snackbar/index";
import $thousandMask from "@/shared/mixins/thousandMask";
import $removeThousand from "@/shared/mixins/removeThousand";
export default {
  name: "posted-services",
  components: { DashboardCard, TableDashboard, Snackbar },
  mixins: [$thousandMask, $removeThousand],
  props: [],
  data() {
    return {
      showSelect: true,
      valid: true,
      name: "",
      page: 1,
      pageCount: 10,
      itemsPerPage: 10,
      paginationData: null,
      nameRules: [
        v => !!v.trim() || "لطفا نام خود را وارد کنید",
        v => (v && v.length <= 30) || "نام وارد شده باید بیش از ۳۰ کاراکتر باشد"
      ],
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      dialog: false,
      showJobOfferFreelancer: {
        title: "",
        description: ""
      },
      confirmJobOfferForm: {
        title: "",
        description: "",
        attachmentId: [],
        minPrice: "",
        duration: null,
        prepayment: "",
        freelancerDescription: "",
        estimationId: null,
        id: null
      },
      confirmJobOfferRule: {
        title: [
          v => !!v.trim() || "لطفا عنوان را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان مورد نظر حداقل باید ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v.trim() || "لطفا توضیحات خود را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات مورد نظر باید بیش از ۲۰ کاراکتر باشد"
        ],
        minPrice: [v => !!v.trim() || "لطفا مبلغ را وارد کنید"],
        duration: [v => !!v || "لطفا مدت زمان را وارد کنید"],
        // prepayment: [
        //   v => !!v || "Name is required",
        //   v => (v && v.length >= 3) || "Name must be more than 3 characters"
        // ],
        freelancerDescription: [v => !!v.trim() || "لطفا توضیحات را وارد کنید"]
      },
      headersUserManagement: [
        {
          text: "عنوان خدمت",
          align: "center",
          sortable: false,
          value: "service_title"
        },
        {
          text: "عنوان درخواستی",
          align: "center",
          sortable: false,
          value: "title"
        },
        {
          text: "توضیحات",
          value: "description",
          sortable: false,
          align: "center"
        },
        {
          text: "تاریخ ثبت شده",
          value: "updated_at",
          sortable: false,
          align: "center"
        },
        { text: "عملیات", value: "actions", sortable: false, align: "center" }
      ],
      dataUserManagement: []
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
  mounted() {
    this.getJobOfferOngoingFreelancer();
  },
  methods: {
    mask() {
      this.confirmJobOfferForm.minPrice = this.$removeThousand(
        this.confirmJobOfferForm.minPrice
      );
      this.confirmJobOfferForm.minPrice = this.$thousandMask(
        this.confirmJobOfferForm.minPrice
      );
    },
    maskPrepayment() {
      this.confirmJobOfferForm.prepayment = this.$removeThousand(
        this.confirmJobOfferForm.prepayment
      );
      this.confirmJobOfferForm.prepayment = this.$thousandMask(
        this.confirmJobOfferForm.prepayment
      );
    },
    getJobOfferOngoingFreelancer() {
      const options = {
        status: "pending",
        page: 1,
        perPage: 10
      };
      freelancerServices.indexJobOffers(options).then(res => {
        this.dataUserManagement = res.data.data.data;
        this.paginationData = res.data.data;
      });
    },
    changePage(currentPage) {
      const options = {
        status: "pending",
        page: currentPage,
        perPage: 10
      };
      freelancerServices.indexJobOffers(options).then(res => {
        this.dataUserManagement = res.data.data.data;
        this.page = currentPage;
      });
    },
    closeModal() {
      this.dialog = false;
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
    rejectEstimation(id) {
      this.showSnackbar = false;
      const body = {
        job_offer_id: id
      };
      freelancerServices.rejectJobOffer(body).then(() => {
        this.snackbarMessage = "عملیات با موفقیت انجام شد.";
        this.showSnackbar = true;
        this.dialog = false;
      });
    },
    confirmEstimation() {
      if (this.$refs[`form`].validate() === true) {
        this.estimationForFreelancer(this.confirmJobOfferForm.id);
        this.dialog = false;
      } else {
        this.$refs[`form`].validate();
      }
    },
    estimationForFreelancer(id) {
      this.showSnackbar = false;
      const body = {
        job_offer_id: id,
        price: this.confirmJobOfferForm.minPrice.replace(/,/g, ""),
        duration: this.confirmJobOfferForm.duration,
        description: this.confirmJobOfferForm.freelancerDescription,
        prepayment: this.confirmJobOfferForm.prepayment.replace(/,/g, ""),
        attachment_id: this.confirmJobOfferForm.attachmentId
      };
      ServiceEmploymentService.estimationForFreelancer(body)
        .then(res => {
          if (res) {
            this.snackbarMessage = "عملیات با موفقیت انجام شد.";
            this.showSnackbar = true;
          }
        })
        .catch(err => {
          this.showSnackbar = true;
          this.snackbarMessage = err?.response.data.errors.err;
          this.confirmJobOfferForm = {
            minPrice: "",
            duration: null,
            prepayment: "",
            freelancerDescription: ""
          };
          this.$refs.form.resetValidation();
          this.dialog = false;
        });
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    showEstimationEmployer(estimation_id, id) {
      this.confirmJobOfferForm.id = id;
      freelancerServices.showJobOffer(id).then(res => {
        this.showJobOfferFreelancer = res?.data.data;
      });
    }
  }
};
