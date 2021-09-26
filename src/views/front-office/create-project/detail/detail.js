import * as types from "../../../../shared/store/types";
import { mapGetters, mapMutations } from "vuex";
import projectsService from "../../../../core/services/modules/projectsService";

export default {
  name: "detail",
  components: {},
  props: [],
  data() {
    return {
      project_duration_id: null,
      signInLoading: false,
      durationList: [],
      price: "",
      minPrice: "",
      maxPrice: "",
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
    this.getProjectDurations();
    this.resetRegister();
  },
  methods: {
    goToActivity() {
      const detail = {
        project_duration_id: this.project_duration_id,
        price: this.price,
        minPrice: this.price,
        maxPrice: this.price
      };
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        detail
      });
      this.$router.push("/confirm-info");
    },
    getProjectDurations() {
      projectsService.projectDurations().then(res => {
        this.durationList = res.data.data;
      });
    },
    resetRegister() {
      if (!this.getDataFromStore.body) {
        this.$router.push("/create-project");
      }
    }
  }
};
