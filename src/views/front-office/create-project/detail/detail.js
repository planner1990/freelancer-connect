import * as types from "../../../../shared/store/types";
import { mapGetters, mapMutations } from "vuex";
import projectsService from "../../../../core/services/modules/projectsService";
import thousandMask from "../../../../shared/mixins/thousandMask";

export default {
  name: "detail",
  components: {},
  props: [],
  mixins: [thousandMask],
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
          v => !!v || "لطفا عنوان را وارد کنید",
          v =>
            (v && v.length >= 3) || "عنوان وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        price: [
          v => !!v || "لطفا مبلغ را وارد کنید",
          v =>
            (v && v.length >= 7) ||
            "مبلغ وارد شده باید بیش از ۵۰۰,۰۰۰ ریال باشد"
        ],
        duration: [v => !!v || "لطفا مدت زمان را مشخص کنید"],
        description: [
          v => !!v || "لطفا توضیحات را وارد کنید",
          v =>
            (v && v.length >= 20) ||
            "توضیحات وارد شده باید بیش از ۲۰ کاراکتر باشد"
        ],
        categories: [v => !!v || "لطفا یک دسته را انتخاب کنید"]
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
  },
  methods: {
    thousandMaskPrice() {
      this.price = this.numberWithCommas(this.$refs?.inputRef?.value);
    },
    thousandMaskMaxPrice() {
      this.maxPrice = this.numberWithCommas(this.$refs?.inputRef2?.value);
    },
    goToActivity() {
      const detail = {
        project_duration_id: this.project_duration_id,
        price: this.price.replace(/,/g, ""),
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
    }
  }
};
