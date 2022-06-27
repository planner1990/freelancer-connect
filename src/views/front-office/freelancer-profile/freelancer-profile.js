import { profileServices } from "../../../core/services";

export default {
  name: "freelancer-profile",
  components: {},
  props: [],
  data() {
    return {
      rating: 3,
      scrollHeight: 0,
      profileDetails: "",
      profileSidebar: "",
      profileProjects: ""
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.showProfile();
  },
  methods: {
    handleScroll() {
      return (this.scrollHeight = window.pageYOffset);
    },
    showProfile() {
      const userId = this.$route.params.userId;
      profileServices.showProfileSidebar(userId).then(res => {
        this.profileSidebar = res.data.data;
      });
    }
  },
  destroyed() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
