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
      profileServices.showProfileDetail(15).then(res => {
        this.profileDetails = res.data.data;
      });
      profileServices.showProfileSidebar(15).then(res => {
        this.profileSidebar = res.data.data;
      });
      profileServices.showProfileProject(15).then(res => {
        this.profileProjects = res.data.data;
      });
    }
  },
  destroyed() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
