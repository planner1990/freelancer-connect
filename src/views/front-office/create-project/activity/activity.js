import projectsService from "../../../../core/services/modules/projectsService";
import * as types from "../../../../shared/store/types";

export default {
  name: "activity",
  components: {},
  props: [],
  data() {
    return {
      title: "",
      signInLoading: false,
      companyTypeLists: [],
      companyList: ""
    };
  },
  computed: {},
  mounted() {
    this.getCompanyTypes();
  },
  methods: {
    getCompanyTypes() {
      projectsService.activityTypes().then(res => {
        this.companyTypeLists = res.data.data;
      });
    },
    goToActivity() {
      const body = {
        companyList: this.companyList
      };
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        body
      });
      this.$router.push("/detail");
    }
  }
};
