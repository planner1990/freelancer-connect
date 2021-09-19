import DashboardCard from "../../../components/dashboardCard/index";
import HeaderSection from "../../../components/header-section/index";
import ProjectList from "../../../components/project-list/index";
import FileInputDashboard from "../../../components/file-input-dashboard/index";
import DynamicExpansionPanel from "../../../components/dynamic-expansion-panel/index";
import FormDialog from "../../../components/form-dialog/index";
import freelancerServices from "../../../core/services/modules/freelancerServices";
import projectsService from "../../../core/services/modules/projectsService";

export default {
  name: "profile-setting",
  components: {
    DashboardCard,
    HeaderSection,
    ProjectList,
    FileInputDashboard,
    DynamicExpansionPanel,
    FormDialog
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
          },
          {
            type: "file-input",
            label: "انتخاب فایل مورد نظر",
            class: "col-md-12"
          }
        ]
      },
      addAwardDataForDialogForm: {
        titleButton: "افزودن دستاوردها",
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
      categories: {}
    };
  },
  computed: {},
  mounted() {
    this.showProfile();
    this.showCategoryById();
  },
  methods: {
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    showProfile() {
      freelancerServices.showProfile().then(res => {
        this.profileInfo = res.data.data;
      });
    },
    showCategoryById() {
      projectsService.activityTypes().then(res => {
        this.categories = res.data.data;
      });
    }
  },
  watch: {}
};
