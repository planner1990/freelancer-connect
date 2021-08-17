import OtpService from "../../../core/services/modules/otpService";
import { mapMutations } from "vuex";
import * as types from "../../../shared/store/types";

export default {
  name: "enter-phone-number",
  components: {},
  props: [],
  data() {
    return {
      phone: null,
      signInLoading: false
    };
  },
  computed: {
    ...mapMutations([types.storeRegisterForm.REGISTER_FORM_MUTATE]),
    registrationData() {}
  },
  mounted() {},
  methods: {
    handleSendOTP() {
      const body = {
        identification: this.phone,
        type: 0
      };
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        identification: this.phone
      });
      OtpService.sendOTP(body).then(res => {
        console.log(res);
        this.$router.push("/login/enter-otp-code");
      });
    }
  }
};
