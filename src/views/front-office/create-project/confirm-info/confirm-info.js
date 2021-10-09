import * as types from "../../../../shared/store/types";
import { mapGetters, mapMutations } from "vuex";
import projectsService from "../../../../core/services/modules/projectsService";
import Snackbar from "../../../../components/snackbar/index";

export default {
  name: "confirm-info",
  components: { Snackbar },
  props: [],
  data() {
    return {
      timeRange: "",
      signInLoading: false,
      companyTypeLists: [],
      price: "",
      minPrice: "",
      maxPrice: "",
      duration: "",
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false
    };
  },
  computed: {
    ...mapGetters({
      registrationData: types.storeRegisterForm.REGISTER_FORM_GET
    }),
    ...mapMutations([types.storeRegisterForm.REGISTER_FORM_MUTATE]),
    getDataFromStore() {
      return this.registrationData;
    }
  },
  mounted() {
    this.resetRegister();
    this.getProjectDurations();
  },
  methods: {
    createProject() {
      this.showSnackbar = false;
      const projectData = {
        title: this.getDataFromStore.body.title,
        description: this.getDataFromStore.body.description,
        project_duration_id: this.getDataFromStore.detail.project_duration_id,
        price: this.getDataFromStore.detail.price,
        categories: this.getDataFromStore.activity.companyList,
        skills: [],
        attachment_id: null
      };
      projectsService.createProject(projectData).then(res => {
        if (res) {
          this.showSnackbar = true;
          this.snackbarMessage = "پروژه شما با موفقیت ایجاد شد.";
        }
      });
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        projectData
      });
      // this.$router.push("/confirm-info");
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    resetRegister() {
      if (!this.getDataFromStore.body) {
        this.$router.push("/create-project");
      }
    },
    getProjectDurations() {
      projectsService.projectDurations().then(res => {
        this.durationList = res.data.data;
        this.durationList.map(item => {
          if (item.id === this.getDataFromStore.detail.project_duration_id) {
            return (this.duration = item.title);
          }
        });
      });
    }
  }
};