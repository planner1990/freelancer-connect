import projectsService from "../../../../core/services/modules/projectsService";
import * as types from "../../../../shared/store/types";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "activity",
  components: {},
  props: [],
  data() {
    return {
      signInLoading: false,
      categories: [],
      activitiesList: [],
      skillsList: [],
      skills: [],
      search: null,
      projectForm: {
        categories: null
      },
      createProjectRule: {
        categories: [v => !!v || "لطفا دسته‌بندی پروژه را مشخص کنید"],
        skills: [
          v => !!v || "مهارت مورد نیاز را انتخاب کنید",
          v => (v && v.length >= 1) || "حداقل یک مورد را باید انتخاب کنید",
          v => (v && v.length <= 5) || "تنها ۵ مورد را می توانید انتخاب کنید"
        ]
      }
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
    this.getActivitiesList();
    this.resetRegister();
    this.getSkillsList();
  },
  methods: {
    goToActivity() {
      const activity = {
        companyList: this.categories,
        skills: this.skills
      };
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        activity
      });
      this.$router.push("/detail");
    },
    resetRegister() {
      if (!this.getDataFromStore.body) {
        this.$router.push("/create-project");
      }
    },
    selectCategories(list) {
      let tempData = [];
      for (let index = 0; index < list.length; index++) {
        tempData.push(list[index].id);
      }
      return (this.categories = tempData);
    },
    getActivitiesList() {
      projectsService.activityTypes().then(res => {
        this.activitiesList = res.data.data;
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
