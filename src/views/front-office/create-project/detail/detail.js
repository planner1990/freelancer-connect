import * as types from "../../../../shared/store/types";
import { mapGetters, mapMutations } from "vuex";
import { projectsService } from "@/core/services";
import $thousandMask from "@/shared/mixins/thousandMask";
import $removeThousand from "@/shared/mixins/removeThousand";

export default {
  name: "detail",
  components: {},
  props: [],
  mixins: [$thousandMask, $removeThousand],
  data() {
    return {
      project_duration_id: null,
      signInLoading: false,
      durationList: [],
      price: "",
      minPrice: "",
      maxPrice: "",
      createProjectRule: {
        price: [
          v => !!v || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.length >= 7) ||
            "مبلغ وارد شده باید بیش از ۵۰۰,۰۰۰ ریال باشد"
        ],
        duration: [v => !!v || "لطفا مدت زمان را مشخص کنید"]
      }
    };
  },
  computed: {
    ...mapGetters({
      registrationData: types.storeRegisterForm.REGISTER_FORM_GET
    }),
    ...mapMutations([types.storeRegisterForm.REGISTER_FORM_MUTATE]),
    getDataFromStore() {
      const data = this.registrationData?.detail;
      this.price = data?.price;
      this.project_duration_id = data?.project_duration_id;
      return this.registrationData;
    }
  },
  mounted() {
    this.getProjectDurations();
    this.resetRegister();
    this.resetValidation();
    this.getCommission();
  },
  methods: {
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    removeString() {
      if (isNaN(this.$removeThousand(this.price)) === true) {
        this.price = "";
      } else {
        this.price = this.$removeThousand(this.price);
        this.price = this.$thousandMask(this.price);
      }
    },
    mask() {
      this.resetValidation();
      this.price = this.$removeThousand(this.price);
      this.price = this.$thousandMask(this.price);
    },

    fixNumbers(str) {
      let persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g
      ];
      let arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g
      ];
      if (typeof str === "string") {
        for (let i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str.replace(/\D/g, "");
    },
    goToActivity() {
      const detail = {
        project_duration_id: this.project_duration_id,
        price: this.fixNumbers(this.price),
        minPrice: this.price.replace(/,/g, ""),
        maxPrice: this.price.replace(/,/g, "")
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
      if (!this.getDataFromStore?.body) {
        this.$router.push("/create-project");
      }
    },
    getCommission() {
      projectsService.getCommission().then(res => {
        console.log(res);
      });
    }
  }
};
