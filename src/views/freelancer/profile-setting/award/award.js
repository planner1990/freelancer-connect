import DialogDashboard from "../../../../components/dialog-dashboard/index";
import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
import { freelancerServices } from "@/core/services";
export default {
  name: "award",
  components: { DialogDashboard },
  props: ["projectListItems", "dataForDialogForm"],
  data() {
    return {
      date: null,
      location: "",
      start: null,
      end: null,
      awardList: []
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
  mounted() {
    this.showProfile();
  },
  methods: {
    showProfile() {
      freelancerServices.showProfile().then(res => {
        this.awardList = res.data.data.user.profile["awards"];
      });
    }
  },
  watch: {}
};
