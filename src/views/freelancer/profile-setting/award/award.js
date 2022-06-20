import DialogDashboard from "../../../../components/dialog-dashboard/index";
import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
import { freelancerServices } from "@/core/services";
import Snackbar from "../../../../components/snackbar";
export default {
  name: "award",
  components: { DialogDashboard, Snackbar },
  props: ["projectListItems", "dataForDialogForm"],
  data() {
    return {
      date: null,
      location: "",
      start: null,
      end: null,
      awardList: [],
      projectList: [],
      experienceForm: {
        name: "",
        companyName: ""
      },
      item: {
        title: null
      },
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false
    };
  },
  computed: {
    ...mapGetters({
      formData: types.dialogForm.FORM_LIST_GET
    }),

    listOfFormData() {
      return this.formData;
    }
  },
  mounted() {
    this.showProfile();
  },
  methods: {
    showProfile() {
      freelancerServices.showProfile().then(res => {
        this.projectList = res.data.data.user.profile["project"];
        this.awardList = res.data.data.user.profile["awards"];
      });
    },
    editItem() {
      this.showSnackbar = false;
      this.experienceForm = {
        title: this.item.title,
        achieved_date: this.item.title
      };
      const body = {
        award: this.awardList,
        project: this.projectList
      };
      freelancerServices
        .updateProjectsAward(body)
        .then(res => {
          if (res) {
            this.showSnackbar = true;
            this.snackbarMessage = "پروفایل شما با موفقیت به روز رسانی شد.";
          }
        })
        .catch(() => {
          this.showSnackbar = true;
          this.snackbarMessage = "به روزرسانی با مشکلی مواجه شده است.";
        });
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  },
  watch: {}
};
