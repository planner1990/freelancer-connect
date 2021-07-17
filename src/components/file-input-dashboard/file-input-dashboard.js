export default {
  name: "file-input-dashboard",
  components: {},
  props: [],
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
