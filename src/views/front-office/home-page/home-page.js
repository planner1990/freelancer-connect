import HomePageHero from "@/components/home-page-hero/index";
import BestProjects from "@/components/best-projects/index";
import BestFreelancer from "@/components/best-freelancer/index";
import NewBlog from "@/components/new-blog/index";
import { ScrollTopService } from "@/core/services";
export default {
  name: "home-page",
  components: { HomePageHero, BestProjects, BestFreelancer, NewBlog },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    ScrollTopService.$scrollTop();
  },
  methods: {}
};
