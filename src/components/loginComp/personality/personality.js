import * as types from "../../../shared/store/types";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "personality",
  components: {},
  props: [],
  data() {
    return {
      signInLoading: false
    };
  },
  computed: {
    ...mapMutations([types.storeRegisterForm.REGISTER_FORM_MUTATE]),
    ...mapGetters({
      registrationData: types.storeRegisterForm.REGISTER_FORM_GET
    }),
    getDataFromStore() {
      return this.registrationData;
    }
  },
  mounted() {
    this.resetRegister();
  },
  methods: {
    goToNextStep(personality) {
      this.$router.push("/login/complete-register");
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        is_company: personality
      });
    },
    backToPrevStep() {
      this.$router.push("/login/freelancer-or-employer");
    },
    resetRegister() {
      if (!this.getDataFromStore.identification) {
        this.$router.push("/login");
      }
    }
  }
};
