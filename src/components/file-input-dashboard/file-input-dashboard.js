import UploadService from "../../core/services/modules/uploadService";
import { mapMutations } from "vuex";
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
    ...mapMutations([types.avatarManagement.mutations.AVATAR_MANAGEMENT_MUTATE])
  },
  mounted() {},
  methods: {
    uploadImage(event) {
      if (event.length) {
        this.files = this.files.slice(this.files[0], 1);
        let formData = new FormData();
        formData.append(`attachment[0]`, this.files[0]);
        if (this.files[0]) {
          UploadService.uploadFile(formData).then(res => {
            this.$emit("clicked", {
              id: Number(res.data.data.attachment_id),
              type: this.status
            });
          });
        }
        new Promise(resolve => {
          const file = new File(this.files, "img");
          const reader = new FileReader();
          reader.onload = function(event) {
            resolve(event.target.result);
          };
          reader.readAsDataURL(file);
        }).then(r => {
          if (r) {
            this.$store.commit(
              types.avatarManagement.mutations.AVATAR_MANAGEMENT_MUTATE,
              {
                imageSrc: { image: r, status: this.status }
              }
            );
          }
          this.imageUrl = r;
        });
      } else {
        if (this.imageProfile) {
          this.$store.commit(
            types.avatarManagement.mutations.AVATAR_MANAGEMENT_MUTATE,
            {
              imageSrc: { image: this.imageProfile, status: this.status }
            }
          );
        } else {
          this.$store.commit(
            types.avatarManagement.mutations.AVATAR_MANAGEMENT_MUTATE,
            {
              imageSrc: {
                image: require("@/assets/image/logo.png"),
                status: this.status
              }
            }
          );
        }
      }
    }
  }
};
