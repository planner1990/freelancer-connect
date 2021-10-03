import DashboardCard from "../../../../components/dashboardCard/index";
import HeaderSection from "../../../../components/header-section/index";
import FileInputDashboard from "../../../../components/file-input-dashboard/index";
import projectsService from "../../../../core/services/modules/projectsService";
import profileServices from "../../../../core/services/modules/profileServices";
import Snackbar from "../../../../components/snackbar/index";
export default {
  name: "profile-setting-employer",
  components: {
    DashboardCard,
    HeaderSection,
    FileInputDashboard,
    Snackbar
  },
  props: [],
  data() {
    return {
      valid: false,
      profileImage: "",
      name: "",
      select: "",
      isDisable: false,
      companyCriteriaItems: [],
      companyTypeLists: [],
      attachments: [],
      titleCard: "پروژه ها",
      profileForm: {
        firstName: "",
        lastName: "",
        description: "",
        categoryId: null,
        noOfEmployees: "",
        showSnackbar: false
      },
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      profileRule: {
        firstnameRules: [
          v => !!v || "Name is required",
          v => v.length >= 3 || "Name must be more than 3 characters"
        ],
        lastnameRules: [
          v => !!v || "Lastname is required",
          v => v.length >= 3 || "Name must be more than 3 characters"
        ],
        description: [
          v => !!v || "description is required",
          v => v.length >= 10 || "Name must be more than 50 characters"
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
      this.showSnackbar = false;
      if (this.$refs[`form`].validate() === true) {
        const body = {
          first_name: this.profileForm.firstName,
          last_name: this.profileForm.lastName,
          description: this.profileForm.description,
          category_id: this.profileForm.categoryId,
          no_of_employees: this.profileForm.noOfEmployees,
          attachments: this.attachments
        };
        profileServices.employerUpdateProfile(body).then(res => {
          if (res) {
            this.showSnackbar = true;
            this.snackbarMessage = "پروفایل شما با موفقیت به روزرسانی شد.";
          }
        });
      }
    },
    getProfileInfo() {
      profileServices.employerGetProfile().then(res => {
        const user = res.data.data.user;
        this.profileImage = res.data.data.user;
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
    },
    getFileId(value) {
      this.attachments.push(value);
    },
    hideSnackbar() {
      this.showSnackbar = false;
    }
  },
  watch: {}
};
