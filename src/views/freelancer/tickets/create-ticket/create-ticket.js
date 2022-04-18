export default {
  name: "create-ticket",
  components: {},
  props: [],
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      files: [],
      fileName: []
    };
  },
  computed: {},
  mounted() {},
  methods: {
    goBack() {
      window.history.back();
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    handleAttachment(e) {
      console.log(e);
      this.fileName.push(e);
      if (e.length === 0) {
        this.fileName = [];
      }
    }
  }
};
