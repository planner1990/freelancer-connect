import UploadService from "../../core/services/modules/uploadService";
import { mapGetters } from "vuex";
import * as types from "../../shared/store/types";

export default {
  name: "file-input-dashboard",
  components: {},
  props: ["status", "imageProfile"],
  data() {
    return {
      files: [],
      imageUrl: ""
    };
  },
  computed: {
    ...mapGetters({
      getAvatarProfile: types.avatarManagement.getters.AVATAR_MANAGEMENT_GET
    }),
    showAvatarProfile() {
      return this.getAvatarProfile.user.profile;
    }
  },
  mounted() {},
  methods: {
    uploadImage() {
      this.files = this.files.slice(this.files[0], 1);
      let formData = new FormData();
      formData.append(`attachment[0]`, this.files[0]);
      UploadService.uploadFile(formData).then(res => {
        this.$emit("clicked", {
          id: Number(res.data.data.attachment_id),
          type: this.status
        });
      });
      new Promise(resolve => {
        const file = new File(this.files, "img");
        const reader = new FileReader();
        reader.onload = function(event) {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      }).then(r => {
        this.imageUrl = r;
      });
    }
  }
};
