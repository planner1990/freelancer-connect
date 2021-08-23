import ProjectList from "../../../components/project-list/index";
import DashboardCard from "../../../components/dashboardCard/index";
export default {
  name: "projects",
  components: { ProjectList, DashboardCard },
  props: [],
  data() {
    return {
      dialog: false,
      titleCard: "پروژه ها",
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
        },
        {
          name: "Esmail Khodadad4",
          title: "پروژه ترجمه کامل سایت از فارسی به عربی",
          amount: "$ 10000",
          country: "ایران",
          time: "کمتر از یک هفته",
          expirationStatus: "منقضی شده"
        },
        {
          name: "Esmail Khodadad5",
          title: "پروژه ترجمه کامل سایت از فارسی به عربی",
          amount: "$ 10000",
          country: "ایران",
          time: "کمتر از یک هفته",
          expirationStatus: "منقضی شده"
        },
        {
          name: "Esmail Khodadad6",
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
  methods: {
    redirectToEditJob() {
      this.$router.push({ name: "edit-project" }).catch(() => {});
    }
  },
  watch: {}
};
