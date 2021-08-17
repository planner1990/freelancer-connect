import DashboardCard from "../../../../components/dashboardCard/index";
import HeaderSection from "../../../../components/header-section/index";
import FileInputDashboard from "../../../../components/file-input-dashboard/index";
import projectsService from "../../../../core/services/modules/projectsService";
import profileServices from "../../../../core/services/modules/profileServices";
export default {
  name: "profile-setting-employer",
  components: {
    DashboardCard,
    HeaderSection,
    FileInputDashboard
  },
  props: [],
  data() {
    return {
      valid: false,
      name: "",
      select: "",
      isDisable: false,
      companyCriteriaItems: [],
      companyTypeLists: [],
      titleCard: "پروژه ها",
      profileForm: {
        firstName: "",
        lastName: "",
        description: "",
        categoryId: null,
        noOfEmployees: ""
      },
      profileRule: {
        firstnameRules: [
          v => !!v || "Name is required",
          v => v.length >= 3 || "Name must be more than 3 characters"
        ],
        lastnameRules: [
          v => !!v || "Lastname is required",
          v => v.length >= 3 || "Name must be more than 3 characters"
        ]
      }
    };
  },
  computed: {},
  mounted() {
    this.getCompanyCriteriaItems();
    this.getCategoryId();
    this.getProfileInfo();
  },
  methods: {
    updateProfile() {
      if (this.$refs[`form`].validate() === true) {
        const body = {
          first_name: this.profileForm.firstName,
          last_name: this.profileForm.lastName,
          description: this.profileForm.description,
          category_id: this.profileForm.categoryId,
          no_of_employees: this.profileForm.noOfEmployees
        };
        profileServices.employerUpdateProfile(body).then(res => {
          console.log(res);
          // this.$refs.form.resetValidation();
        });
      }
    },
    getProfileInfo() {
      profileServices.employerGetProfile().then(res => {
        const user = res.data.data.user;
        this.profileForm = {
          firstName: user.first_name,
          lastName: user.last_name,
          description: user.profile.description,
          categoryId: user.id,
          noOfEmployees: String(user.profile.no_of_employees)
        };
      });
    },
    getCompanyCriteriaItems() {
      projectsService.companyCriteria().then(res => {
        this.companyCriteriaItems = res.data.data["criterias"];
      });
    },
    getCategoryId() {
      projectsService.activityTypes().then(res => {
        this.companyTypeLists = res.data.data;
      });
    }
  },
  watch: {}
};
