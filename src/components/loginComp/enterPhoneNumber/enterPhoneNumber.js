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
      signInLoading: false,
      phoneRules: [
        v => !!v || "Name is required",
        v => (v && v.length === 11) || "Phone must be 11 characters"
      ]
    };
  },
  computed: {
    ...mapMutations([types.storeRegisterForm.REGISTER_FORM_MUTATE])
  },
  mounted() {},
  methods: {
    handleSendOTP() {
      if (this.phone && this.phone.length === 11) {
        const body = {
          identification: this.phone,
          type: 0
        };
        this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
          identification: this.phone
        });
        OtpService.sendOTP(body).then(res => {
          if (res.data.status === "OK") {
            this.$router.push("/login/enter-otp-code");
          }
        });
      }
    }
  }
};
