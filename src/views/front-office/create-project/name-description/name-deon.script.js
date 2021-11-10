import { mapGetters, mapMutations } from "vuex";
import * as types from "../../../../shared/store/types";
import UploadService from "../../../../core/services/modules/uploadService";

export default {
  name: "name-description",
  components: {},
  props: [],
  data() {
    return {
      title: "",
      description: "",
      signInLoading: false,
      attachmentId: ""
    };
  },
  computed: {
    ...mapGetters({
      registrationData: types.storeRegisterForm.REGISTER_FORM_GET
    }),
    getDataFromStore() {
      const data = this.registrationData?.body;
      this.title = data?.title;
      this.description = data?.description;
    },
    ...mapMutations([types.storeRegisterForm.REGISTER_FORM_MUTATE])
  },
  mounted() {},
  methods: {
    goToActivity() {
      const body = {
        title: this.title,
        description: this.description,
        attachmentId: this.attachmentId
      };
      this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
        body
      });
      this.$router.push("/activity");
    },
    handleFileInput(file) {
      let formData = new FormData();
      if (file) {
        for (let i = 0; i <= file.length - 1; i++) {
          formData.append(`attachment[` + i + `]`, file[i]);
        }
        UploadService.uploadFile(formData).then(res => {
          this.attachmentId = res.data.data.attachment_id;
        });
      }
    }
  }
};
