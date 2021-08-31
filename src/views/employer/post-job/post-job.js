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
          v => !!v || "Name is required",
          v => (v && v.length >= 3) || "Name must be more than 3 characters"
        ],
        price: [
          v => !!v || "Price is required",
          v => (v && v.length >= 7) || "Name must be more than 7 characters"
        ],
        duration: [v => !!v || "Duration is required"],
        description: [
          v => !!v || "Description is required",
          v =>
            (v && v.length >= 20) ||
            "Description must be more than 20 characters"
        ],
        categories: [
          v => !!v || "Description is required",
          v =>
            (v && v.length >= 1) || "Description must be more than 1 characters"
        ],
        skills: [
          v => !!v || "Description is required",
          v =>
            (v && v.length >= 1) || "Description must be more than 1 characters"
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
        console.log(body);
        projectsService.createProject(body).then(res => {
          console.log(res);
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
      formData.append("attachment", file);
      console.log(formData);
      UploadService.uploadFile(formData).then(res => {
        console.log(res);
        this.projectForm.attachmentId = res.data.data.attachment_id;
      });
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
