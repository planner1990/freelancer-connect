import DashboardCard from "../../../components/dashboardCard/index";
import HeaderSection from "../../../components/header-section/index";
import projectsService from "../../../core/services/modules/projectsService";
import UploadService from "../../../core/services/modules/uploadService";
import Snackbar from "../../../components/snackbar/index";
export default {
  name: "post-job",
  components: { DashboardCard, HeaderSection, Snackbar },
  props: [],
  data() {
    return {
      titleCard: "ویرایش پروژه",
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      projectForm: {
        title: "",
        description: "",
        project_duration_id: null,
        price: null,
        skills: [],
        categories: [],
        attachmentId: null
      },
      valid: false,
      createProjectRule: {
        title: [
          v => !!v || "لطفا عنوان را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        price: [
          v => !!v || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.length >= 7) || "مبلغ وارد شده باید بیش از ۷ کاراکتر باشد"
        ],
        duration: [v => !!v || "لطفا مدت زمان را وارد کنید"],
        description: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
        ],
        categories: [
          v => !!v || "لطفا دسته بندی را مشخص کنید",
          v => (v && v.length >= 1) || "حداقل یک مورد را باید انتخاب کنید"
        ],
        skills: [
          v => !!v || "مهارت مورد نیاز را انتخاب کنید",
          v => (v && v.length >= 1) || "حداقل یک مورد را باید انتخاب کنید"
        ]
      },
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      picker: false,
      search: null,
      durationList: [],
      activitiesList: [],
      skillsList: [],
      skills: [],
      categories: []
    };
  },
  computed: {},
  mounted() {
    this.getProjectDurations();
    this.getActivitiesList();
    this.getSkillsList();
  },
  methods: {
    hideSnackbar() {
      this.showSnackbar = false;
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    onUpdate(text) {
      this.text = text;
    },
    toggle() {
      this.autoselectMenu = !this.autoselectMenu;
    },
    createProject() {
      this.showSnackbar = false;
      if (this.$refs[`form`].validate() === true) {
        const body = {
          title: this.projectForm.title,
          description: this.projectForm.description,
          project_duration_id: this.projectForm.project_duration_id,
          price: this.projectForm.price,
          skills: this.skills,
          categories: this.categories,
          attachment_id: this.projectForm.attachmentId
        };
        projectsService.createProject(body).then(res => {
          if (res) {
            this.showSnackbar = true;
            this.snackbarMessage = "پروژه شما با موفقیت ایجاد شد.";
            this.$refs.form.reset();
            this.$router.push("/employer/my-projects");
          }
        });
      } else {
        this.showSnackbar = true;
      }
    },
    getProjectDurations() {
      projectsService.projectDurations().then(res => {
        this.durationList = res.data.data;
      });
    },
    getActivitiesList() {
      projectsService.activityTypes().then(res => {
        this.activitiesList = res.data.data;
      });
    },
    getSkillsList() {
      projectsService.skills().then(res => {
        this.skillsList = res.data.data;
      });
    },
    selectCategories(list) {
      let tempData = [];
      for (let index = 0; index < list.length; index++) {
        tempData.push(list[index].id);
      }
      return (this.categories = tempData);
    },
    selectSkills(list) {
      let tempData = [];
      for (let index = 0; index < list.length; index++) {
        tempData.push(list[index].id);
      }
      return (this.skills = tempData);
    },
    handleFileInput(file) {
      let formData = new FormData();
      if (file.length >= 1) {
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        UploadService.uploadFile(formData).then(res => {
          this.projectForm.attachmentId = res.data.data.attachment_id;
        });
      }
    }
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    }
  }
};
