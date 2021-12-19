import Navbar from "./navbar/index";
import FooterFrontOffice from "./footer-front-office/index";
import transitionPage from "../../../components/transitionPage/index";
import SidebarFrontOffice from "./sidebar-front-office/index";
import SkeletonPage from "@/components/skeleton-page/index";
export default {
  name: "front-office-layout",
  components: {
    Navbar,
    FooterFrontOffice,
    transitionPage,
    SidebarFrontOffice,
    SkeletonPage
  },
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
