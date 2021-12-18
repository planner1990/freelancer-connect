import { mapMutations } from "vuex";
import * as types from "../../shared/store/types";

export default {
  name: "form-dialog",
  components: {},
  props: ["dataForDialogForm"],
  data() {
    return {
      experienceForm: {
        name: "",
        companyName: "",
        experienceStart: null,
        experienceEnd: null
      },
      educationForm: {
        educationLevel: "",
        educationLocation: "",
        educationStart: null,
        educationEnd: null
      },
      projectsForm: {
        title: "",
        url: ""
      },
      projectRule: {
        name: [v => !!v || "لطفا عنوان را وارد کنید"],
        url: [
          v => !!v || "لطفا آدرس پروژه را وارد کنید",
          v =>
            /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/.test(v) ||
            "طبق مثال وارد نمایید: http(s)://test.com"
        ]
      },
      awardForm: {
        title: "",
        achieved_date: null,
        attachment_id: ""
      },
      experienceFormRule: {
        name: [v => !!v || "لطفا عنوان را وارد کنید"],
        companyName: [v => !!v || "لطفا نام شرکت را وارد کنید"],
        experienceStart: [v => !!v || "لطفا تاریخ شروع فعالیت را وارد کنید"],
        experienceEnd: [v => !!v || "لطفا پایان فعالیت را وارد کنید"]
      },
      educationFormRule: {
        name: [v => !!v || "لطفا عنوان را وارد کنید"],
        educationLocation: [
          v => !!v || "لطفا نام دانشگاه یا موسسه را وارد کنید"
        ],
        educationStart: [v => !!v || "لطفا تاریخ شروع تحصیل را وارد کنید"],
        educationEnd: [v => !!v || "لطفا پایان تحصیل را وارد کنید"]
      },
      awardFormRule: {
        name: [v => !!v || "لطفا عنوان را وارد کنید"],
        achieved_date: [v => !!v || "لطفا تاریخ شروع فعالیت را وارد کنید"]
      },
      date: null,
      expStart: false,
      expEnd: false,
      start: false,
      educationStart: false,
      end: false,
      educationEnd: false,
      dialog: false,
      valid: true,
      files: []
    };
  },
  computed: {
    ...mapMutations([types.dialogForm.FORM_MUTATE])
  },
  mounted() {},
  methods: {
    getAllowedDates(val) {
      return val > this.experienceForm.experienceStart;
    },
    getAllowedDatesEducation(val) {
      return val > this.educationForm.educationStart;
    },
    validate() {
      this.$refs.newForm.reset();
      this.dialog = false;
    },
    resetValidation() {
      this.$refs.newForm.resetValidation();
    },
    resetForm() {
      this.$refs.newForm.reset();
    },
    handleDataForm(type) {
      if (this.$refs.newForm.validate() === true) {
        switch (type) {
          case "experience":
            this.experienceForm = {
              job_title: this.experienceForm.name,
              company_title: this.experienceForm.companyName,
              start_date: this.experienceForm.experienceStart,
              end_date: this.experienceForm.experienceEnd
            };
            this.$store.commit(types.dialogForm.FORM_LIST_MUTATE, {
              form: this.experienceForm,
              type: type
            });
            break;
          case "education":
            this.educationForm = {
              degree_title: this.educationForm.educationLevel,
              institute_title: this.educationForm.educationLocation,
              start_date: this.educationForm.educationStart,
              end_date: this.educationForm.educationEnd
            };
            this.$store.commit(types.dialogForm.FORM_LIST_MUTATE, {
              form: this.educationForm,
              type: type
            });
            break;
          case "projects":
            this.projectsForm = {
              title: this.projectsForm.title,
              url: this.projectsForm.url
            };
            this.$store.commit(types.dialogForm.FORM_LIST_MUTATE, {
              form: this.projectsForm,
              type: type
            });
            break;
          case "award":
            this.awardForm = {
              title: this.awardForm.title,
              achieved_date: this.awardForm.achieved_date
            };
            this.$store.commit(types.dialogForm.FORM_LIST_MUTATE, {
              form: this.awardForm,
              type: type
            });
            break;
        }
        this.resetValidation();
        this.resetForm();
        this.dialog = false;
        this.educationForm = {};
        this.experienceForm = {};
        this.awardForm = {};
        this.projectsForm = {};
        this.experienceForm = {
          experienceStart: null,
          experienceEnd: null
        };
        this.educationForm = {
          educationStart: null,
          educationEnd: null
        };
        this.awardForm = {
          achieved_date: null
        };
      }
    }
  }
};
