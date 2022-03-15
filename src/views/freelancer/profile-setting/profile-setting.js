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
import Snackbar from "../../../components/snackbar/index";
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
    Award,
    Snackbar
  },
  props: [],
  data() {
    return {
      valid: true,
      name: "",
      companyName: "",
      nameRules: [
        v => !!v || "لطفا نام خود را وارد کنید",
        v => (v && v.length <= 10) || "نام وارد شده باید بیش از ۱۰ کاراکتر باشد"
      ],
      email: "",
      emailRules: [
        v => !!v || "لطفا ایمیل خود را وارد کنید",
        v => /.+@.+\..+/.test(v) || "ایمیل وارد شده معتبر نیست"
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
      titleCard: "پروژه‌ها",
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
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
          }
          // { type: "text-area", label: "توضیحات", class: "col-md-12" }
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
          }
          // { type: "text-area", label: "توضیحات", class: "col-md-12" }
        ]
      },
      addProjectsDataForDialogForm: {
        titleButton: "افزودن نمونه کار",
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
      attachments: [],
      experienceList: [],
      educationList: [],
      skillsList: [],
      enableButton: false
    };
  },
  computed: {
    ...mapGetters({
      formData: types.dialogForm.FORM_LIST_GET
    }),
    listOfFormData() {
      return this.formData;
    },

    isCompany() {
      return this.profileInfo?.user?.is_company === 1;
    }
  },
  mounted() {
    this.showProfile();
    this.showCategoryById();
    this.getSkillsList();
  },
  methods: {
    ...mapActions({
      avatarProfile: types.avatarManagement.actions.AVATAR_MANAGEMENT_ACTION
    }),
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    showProfile() {
      freelancerServices.showProfile().then(res => {
        this.profileInfo = res.data.data;
        this.experienceList = res.data.data.user.profile?.experience;
        this.educationList = res.data.data.user.profile?.education;
        if (this.profileInfo.user.company) {
          this.companyName = this.profileInfo.user?.company?.name;
        }
        this.avatarProfile(this.profileInfo);
      });
    },
    showCategoryById() {
      projectsService.activityTypes().then(res => {
        this.categories = res.data.data;
      });
    },
    updateProfile() {
      this.showSnackbar = false;
      const body = {
        first_name: this.profileInfo?.user["first_name"],
        last_name: this.profileInfo?.user["last_name"],
        gender: this.profileForm.gender,
        attachments: this.attachments,
        category_id: this.profileInfo?.user["category_id"]
      };
      freelancerServices.updateProfile(body).then(res => {
        if (res) {
          this.showSnackbar = true;
          this.snackbarMessage = "پروفایل شما با موفقیت به روز رسانی شد.";
        }
      });
    },
    getFileId(value) {
      this.attachments.push(value);
      this.enableButton = true;
    },
    updateExperienceEducation() {
      this.showSnackbar = false;
      this.listOfFormData.map(item => {
        if (item.type === "experience") {
          this.experienceList.push(item.form);
        } else if (item.type === "education") {
          this.educationList.push(item.form);
        }
      });
      const body = {
        experience: this.experienceList,
        education: this.educationList
      };
      freelancerServices.updateExperienceEducation(body).then(res => {
        if (res) {
          this.showSnackbar = true;
          this.snackbarMessage = "پروفایل شما با موفقیت به روز رسانی شد.";
        }
      });
    },
    updateProjectsAward() {
      this.showSnackbar = false;
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
      freelancerServices.updateProjectsAward(body).then(res => {
        if (res) {
          this.showSnackbar = true;
          this.snackbarMessage = "پروفایل شما با موفقیت به روز رسانی شد.";
        }
      });
    },
    selectSkills(list) {
      let tempData = [];
      for (let index = 0; index < list.length; index++) {
        if (list[index].title) {
          tempData.push(list[index].title);
        } else {
          tempData.push(list[index]);
        }
      }
      return (this.skills = tempData);
    },
    getSkillsList() {
      projectsService.skills().then(res => {
        this.skillsList = res.data.data;
      });
    },
    enableUpdateProfileButton() {
      this.enableButton = true;
    }
  },
  watch: {}
};
