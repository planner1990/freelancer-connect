import * as types from "../../../../shared/store/types";

export default {
  name: "confirm-info",
  components: {},
  props: [],
  data() {
    return {
      timeRange: "",
      signInLoading: false,
      companyTypeLists: [],
      price: "",
      minPrice: "",
      maxPrice: ""
    };
  },
  computed: {},
  mounted() {},
  methods: {
    goToActivity() {
      const body = {
        timeRange: this.timeRange,
        price: this.price,
        minPrice: this.price,
        maxPrice: this.price
      };
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        body
      });
      this.$router.push("/confirm-info");
    }
  }
};
