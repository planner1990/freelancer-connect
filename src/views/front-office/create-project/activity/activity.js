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
      search: null,
      projectForm: {
        categories: []
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
  },
  methods: {
    goToActivity() {
      const activity = {
        companyList: this.categories
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
