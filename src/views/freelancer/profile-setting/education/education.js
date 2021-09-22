import DialogDashboard from "../../../../components/dialog-dashboard/index";
import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
export default {
  name: "education",
  components: { DialogDashboard },
  props: ["projectListItems", "dataForDialogForm"],
  data() {
    return {
      date: null,
      location: "",
      start: null,
      end: null
    };
  },
  computed: {
    ...mapGetters({
      formData: types.dialogForm.FORM_LIST_GET
    }),

    listOfFormData() {
      return this.formData;
    }
  },
  mounted() {},
  methods: {},
  watch: {}
};
