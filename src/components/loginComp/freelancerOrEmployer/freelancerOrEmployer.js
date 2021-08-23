import { mapGetters, mapMutations } from "vuex";
import * as types from "../../../shared/store/types";

export default {
  name: "freelancer-or-employer",
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
    goToNextStep(role) {
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        role: role
      });
      this.$router.push("/login/personality");
    },
    backToPrevStep(step) {
      this.$router.push("/login/enter-otp-code");
      this.step = step;
    },
    resetRegister() {
      if (!this.getDataFromStore.identification) {
        this.$router.push("/login");
      }
    }
  }
};
