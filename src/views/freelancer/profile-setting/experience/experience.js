import DialogDashboard from "../../../../components/dialog-dashboard/index";
import { mapGetters, mapMutations } from "vuex";
import * as types from "../../../../shared/store/types";
import Snackbar from "../../../../components/snackbar/index";
import { freelancerServices } from "@/core/services";
export default {
  name: "experience",
  components: { DialogDashboard, Snackbar },
  props: ["projectListItems", "dataForDialogForm"],
  data() {
    return {
      date: null,
      test: null,
      location: "",
      start: null,
      end: null,
      experienceList: [],
      educationList: [],
      item: {
        job_title: null
      },
      experienceForm: {
        name: "",
        companyName: "",
        experienceStart: null,
        experienceEnd: null
      },
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false
    };
  },
  computed: {
    ...mapGetters({
      formData: types.dialogForm.FORM_LIST_GET
    }),
    ...mapMutations([types.dialogForm.FORM_MUTATE]),
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
    removeItem() {
      this.showSnackbar = false;
      this.experienceForm = {
        job_title: this.item.job_title,
        company_title: this.experienceForm.companyName,
        start_date: this.experienceForm.experienceStart,
        end_date: this.experienceForm.experienceEnd
      };
      const body = {
        experience: this.experienceList,
        education: this.educationList
      };
      // this.$store.commit(types.dialogForm.FORM_LIST_MUTATE, {
      //   form: this.experienceList,
      //   type: "experience"
      // });
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
  watch: {
    // changeDate(oldV, newV) {
    //   console.log(oldV, newV, ";';;;;;;;;;;;;;;;;");
    //   this.formData = this.$options.filters.upper(this.formData);
    // }
  }
};
