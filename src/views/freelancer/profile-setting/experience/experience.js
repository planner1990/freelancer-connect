import DialogDashboard from "../../../../components/dialog-dashboard/index";
import { mapGetters, mapMutations } from "vuex";
import * as types from "../../../../shared/store/types";
import { freelancerServices } from "@/core/services";
export default {
  name: "experience",
  components: { DialogDashboard },
  props: ["projectListItems", "dataForDialogForm"],
  data() {
    return {
      date: null,
      test: null,
      location: "",
      start: null,
      end: null,
      experienceList: [],
      item: {
        job_title: null
      },
      experienceForm: {
        name: "",
        companyName: "",
        experienceStart: null,
        experienceEnd: null
      }
    };
  },
  computed: {
    ...mapGetters({
      formData: types.dialogForm.FORM_LIST_GET
    }),
    ...mapMutations([types.dialogForm.FORM_MUTATE]),
    listOfFormData() {
      console.log(this.formData);
      return this.formData;
    }
  },
  mounted() {
    this.showProfile();
  },
  methods: {
    showProfile() {
      freelancerServices.showProfile().then(res => {
        this.experienceList = res.data.data.user.profile.experience;
      });
    },
    removeItem() {
      this.experienceForm = {
        job_title: this.item.job_title,
        company_title: this.experienceForm.companyName,
        start_date: this.experienceForm.experienceStart,
        end_date: this.experienceForm.experienceEnd
      };
      console.log(this.experienceForm);
      // this.$store.commit(types.dialogForm.FORM_LIST_MUTATE, {
      //   form: this.projectsForm,
      //   type: "experience"
      // });
    }
  },
  watch: {
    // changeDate(oldV, newV) {
    //   console.log(oldV, newV, ";';;;;;;;;;;;;;;;;");
    //   this.formData = this.$options.filters.upper(this.formData);
    // }
  }
};
