import UploadService from "../../core/services/modules/uploadService";
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
  computed: {},
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
