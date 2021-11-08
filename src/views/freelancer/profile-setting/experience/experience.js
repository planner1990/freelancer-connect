import DialogDashboard from "../../../../components/dialog-dashboard/index";
import { mapGetters } from "vuex";
import * as types from "../../../../shared/store/types";
import { freelancerServices } from "@/core/services";
export default {
  name: "experience",
  components: { DialogDashboard },
  props: ["projectListItems", "dataForDialogForm"],
  data() {
    return {
      date: null,
      location: "",
      start: null,
      end: null,
      experienceList: []
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
        this.experienceList = res.data.data.user.profile.experience;
      });
    }
  },
  watch: {}
};
