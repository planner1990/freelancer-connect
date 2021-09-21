import DashboardCard from "../../../components/dashboardCard/index";
import HeaderSection from "../../../components/header-section/index";
import ProjectList from "../../../components/project-list/index";
import FileInputDashboard from "../../../components/file-input-dashboard/index";
import DynamicExpansionPanel from "../../../components/dynamic-expansion-panel/index";
import FormDialog from "../../../components/form-dialog/index";
import freelancerServices from "../../../core/services/modules/freelancerServices";
import projectsService from "../../../core/services/modules/projectsService";
import Experience from "./experience/index";
import Education from "./education/index";
import Projects from "./projects/index";
import Award from "./award/index";
import { mapActions, mapGetters } from "vuex";
import * as types from "../../../shared/store/types";

export default {
  name: "profile-setting",
  components: {
    DashboardCard,
    HeaderSection,
    ProjectList,
    FileInputDashboard,
    DynamicExpansionPanel,
    FormDialog,
    Experience,
    Education,
    Projects,
    Award
  },
  props: [],
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: "",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      picker: false,
      model: ["گوگل آنالتیکس"],
      search: null,
      content: "<h3 style='text-align: right'>توضیحات در مورد پروژه...</h3>",
      files: [],
      dialog: false,
      isMobile: true,
      titleCard: "پروژه ها",
      simpleDialogData: {
        buttonTitle: "حذف پروژه",
        header: "آیا می خواهید پروژه را حذف کنید؟",
        rejectTitle: "خیر",
        confirmTitle: "بله"
      },
      addExperienceDataForDialogForm: {
        titleButton: "افزودن تجربیات",
        type: "experience",
        formField: [
          { type: "text-field", label: "عنوان", class: "col-lg-6 col-md-12" },
          {
            type: "text-field",
            label: "نام شرکت",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "date-picker-from",
            label: "از تاریخ",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "date-picker-to",
            label: "تا تاریخ",
            class: "col-lg-6 col-md-12"
          },
          { type: "text-area", label: "توضیحات", class: "col-md-12" }
        ]
      },
      addEducationDataForDialogForm: {
        titleButton: "افزودن تحصیلات",
        type: "education",
        formField: [
          {
            type: "text-field",
            label: "عنوان مدرک تحصیلی",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "text-field",
            label: "نام دانشگاه یا موسسه",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "date-picker-from",
            label: "از تاریخ",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "date-picker-to",
            label: "تا تاریخ",
            class: "col-lg-6 col-md-12"
          },
          { type: "text-area", label: "توضیحات", class: "col-md-12" }
        ]
      },
      addProjectsDataForDialogForm: {
        titleButton: "افزودن پروژه ها",
        type: "projects",
        formField: [
          {
            type: "text-field",
            label: "عنوان پروژه",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "text-field",
            label: "وارد نمودن URL",
            class: "col-lg-6 col-md-12"
          }
        ]
      },
      addAwardDataForDialogForm: {
        titleButton: "افزودن دستاوردها",
        type: "award",
        formField: [
          {
            type: "text-field",
            label: "عنوان دستاورد",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "date-picker-to",
            label: "تاریخ کسب دستاورد",
            class: "col-lg-6 col-md-12"
          },
          {
            type: "file-input",
            label: "انتخاب فایل مورد نظر",
            class: "col-md-12"
          }
        ]
      },
      profileInfo: {},
      categories: {},
      profileForm: {
        first_name: "",
        last_name: "",
        gender: ""
      },
      attachments: []
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
    this.showCategoryById();
  },
  methods: {
    ...mapActions({
      avatarProfile: types.avatarManagement.actions.AVATAR_MANAGEMENT_ACTION
    }),
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    showProfile() {
      freelancerServices.showProfile().then(res => {
        this.profileInfo = res.data.data;
        this.avatarProfile(this.profileInfo);
      });
    },
    showCategoryById() {
      projectsService.activityTypes().then(res => {
        this.categories = res.data.data;
      });
    },
    updateProfile() {
      const body = {
        first_name: this.profileInfo.user["first_name"],
        last_name: this.profileInfo.user["last_name"],
        gender: this.profileForm.gender,
        attachments: this.attachments
      };
      freelancerServices.updateProfile(body).then(res => {
        console.log(res);
      });
    },
    getFileId(value) {
      this.attachments.push(value);
    },
    updateExperienceEducation() {
      let experience = [];
      let education = [];
      this.listOfFormData.map(item => {
        if (item.type === "experience") {
          experience.push(item.form);
        } else if (item.type === "education") {
          education.push(item.form);
        }
      });
      const body = {
        experience: experience,
        education: education
      };
      console.log(body);
      freelancerServices.updateExperienceEducation(body).then(res => {
        console.log(res);
      });
    },
    updateProjectsAward() {
      let projects = [];
      let award = [];
      this.listOfFormData.map(item => {
        if (item.type === "projects") {
          projects.push(item.form);
        } else if (item.type === "award") {
          award.push(item.form);
        }
      });
      const body = {
        award: award,
        project: projects
      };
      console.log(body);
      freelancerServices.updateProjectsAward(body).then(res => {
        console.log(res);
      });
    }
  },
  watch: {}
};
