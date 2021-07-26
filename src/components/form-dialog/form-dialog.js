import { mapMutations } from "vuex";
import * as types from "../../shared/store/types";

export default {
  name: "form-dialog",
  components: {},
  props: ["dataForDialogForm"],
  data() {
    return {
      newForm: {
        name: "",
        companyName: "",
        start: null,
        end: null
      },
      date: null,
      start: false,
      end: false,
      dialog: false,
      valid: true,
      files: [],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ]
    };
  },
  computed: {
    // ...mapGetters({
    //   form: types.dialogForm.FORM_GET
    // }),
    ...mapMutations([types.dialogForm.FORM_MUTATE])
  },
  mounted() {},
  methods: {
    // ...mapActions({
    //   addList: types.dialogForm.FORM_ACTION
    // }),
    validate() {
      this.$refs.newForm.validate();
      this.dialog = false;
    },
    resetValidation() {
      this.$refs.newForm.resetValidation();
    },
    handleDataForm() {
      this.newForm = {
        name: this.newForm.name,
        companyName: this.newForm.companyName,
        start: this.newForm.start,
        end: this.newForm.end
      };
      this.$store.commit(types.dialogForm.FORM_LIST_MUTATE, this.newForm);
      this.dialog = false;
      this.newForm = {};
      this.resetValidation();
    }
  }
};
