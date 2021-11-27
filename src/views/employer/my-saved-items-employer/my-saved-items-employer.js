import DashboardCard from "../../../components/dashboardCard/index";
import HeaderSection from "../../../components/header-section/index";
import ProjectList from "../../../components/project-list/index";
export default {
  name: "my-saved-items-employer",
  components: { DashboardCard, HeaderSection, ProjectList },
  props: [],
  data() {
    return {
      dialog: false,
      isMobile: true,
      titleCard: "پروژه‌ها",
      simpleDialogData: {
        buttonTitle: "حذف پروژه",
        header: "آیا می خواهید پروژه را حذف کنید؟",
        rejectTitle: "خیر",
        confirmTitle: "بله"
      },
      projectListItems: [
        {
          name: "Esmail Khodadad",
          title: "پروژه ترجمه کامل سایت از فارسی به عربی",
          amount: "$ 10000",
          country: "ایران",
          time: "کمتر از یک هفته",
          expirationStatus: "منقضی شده"
        },
        {
          name: "Esmail Khodadad2",
          title: "پروژه ترجمه کامل سایت از فارسی به عربی",
          amount: "$ 10000",
          country: "ایران",
          time: "کمتر از یک هفته",
          expirationStatus: "منقضی شده"
        },
        {
          name: "Esmail Khodadad3",
          title: "پروژه ترجمه کامل سایت از فارسی به عربی",
          amount: "$ 10000",
          country: "ایران",
          time: "کمتر از یک هفته",
          expirationStatus: "منقضی شده"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  watch: {}
};
