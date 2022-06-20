import DialogDashboard from "../../../../components/dialog-dashboard/index";
import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
import { freelancerServices } from "@/core/services";
import Snackbar from "../../../../components/snackbar";
export default {
  name: "education",
  components: { DialogDashboard, Snackbar },
  props: ["projectListItems", "dataForDialogForm"],
  data() {
    return {
      date: null,
      location: "",
      start: null,
      end: null,
      experienceForm: {
        name: "",
        companyName: "",
        experienceStart: null,
        experienceEnd: null
      },
      item: {
        degree_title: null
      },
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      experienceList: [],
      educationList: []
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
        this.experienceList = res.data.data?.user.profile.experience;
        this.educationList = res.data.data.user.profile?.education;
      });
    },
    editItem() {
      this.showSnackbar = false;
      this.experienceForm = {
        degree_title: this.item.degree_title,
        institute_title: this.experienceForm.companyName,
        start_date: this.experienceForm.experienceStart,
        end_date: this.experienceForm.experienceEnd
      };
      const body = {
        experience: this.experienceList,
        education: this.educationList
      };
      freelancerServices
        .updateExperienceEducation(body)
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
