import DashboardCard from "../../../../components/dashboardCard/index";
import HeaderSection from "../../../../components/header-section/index";
import FileInputDashboard from "../../../../components/file-input-dashboard/index";
import projectsService from "../../../../core/services/modules/projectsService";
import profileServices from "../../../../core/services/modules/profileServices";
import Snackbar from "@/components/snackbar/index";
import * as types from "../../../../shared/store/types";
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
      attachments: null,
      titleCard: "پروژه‌ها",
      profileForm: {
        firstName: "",
        lastName: "",
        description: "",
        categoryId: null,
        noOfEmployees: null,
        showSnackbar: false,
        isCompany: null,
        skills: []
      },
      companyName: "",
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      profileRule: {
        firstnameRules: [
          v => !!v.trim() || "لطفا نام خود را وارد کنید",
          v => v.length >= 3 || "نام وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        lastnameRules: [
          v => !!v.trim() || "نام خانوادگی خود را وارد کنید",
          v =>
            v.length >= 3 || "نام خانوادگی وارد شده باید بیش از ۳ کاراکتر باشد"
        ],
        description: [
          v => !!v.trim() || "لطفا توضیحات را وارد کنید",
          v => v.length >= 10 || "توضیحات وارد شده باید بیش از ۱۰ کاراکتر باشد"
        ]
      },
      skillsList: [],
      skills: [],
      search: null
    };
  },
  computed: {},
  mounted() {
    this.getCompanyCriteriaItems();
    this.getCategoryId();
    this.getProfileInfo();
    this.getSkillsList();
  },
  methods: {
    updateProfile() {
      this.showSnackbar = false;
      if (this.$refs[`form`].validate() === true) {
        const body = {
          first_name: this.profileForm.firstName,
          last_name: this.profileForm.lastName,
          company_name: this.companyName,
          description: this.profileForm.description,
          category_id: this.profileForm.categoryId,
          employees_count: null,
          attachment_id: this.attachments,
          skills: this.skills ? this.skills : this.profileForm.skills,
          email: this.profileForm.email,
          registration_number: null,
          national_id: null,
          code: null
        };
        profileServices.employerUpdateProfile(body).then(res => {
          if (res) {
            this.showSnackbar = true;
            this.snackbarMessage = "پروفایل شما با موفقیت به روز رسانی شد.";
          }
        });
      }
    },
    getSkillsList() {
      projectsService.skills().then(res => {
        this.skillsList = res.data.data;
      });
    },
    getProfileInfo() {
      profileServices.employerGetProfile().then(res => {
        const user = res.data?.data;
        if (user["is_company"] === 1) {
          this.companyName = user.company_name;
        }
        this.profileImage = res.data.data;
        this.profileForm = {
          firstName: user.first_name,
          lastName: user.last_name,
          description: user.description,
          categoryId: user.category_id,
          noOfEmployees: String(user["employees_count"]),
          is_company: user.is_company,
          skills: user.skills,
          phone: user.phone,
          email: user.email
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
      this.attachments = value.id;
      console.log(this.attachments);
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    selectSkills(list) {
      let tempData = [];
      for (let index = 0; index < list.length; index++) {
        if (list[index].id) {
          tempData.push(list[index].id);
        } else {
          tempData.push(list[index]);
        }
      }
      return (this.skills = tempData);
    },
    enableUpdateProfileButton() {
      this.enableButton = true;
      this.$store.commit(
        types.firstNameAndLastNameManagement.mutations.NAME_MANAGEMENT_MUTATE,
        {
          userName: {
            name:
              this.profileForm.firstName.substring(0, 9) +
              " " +
              this.profileForm.lastName.substring(0, 9)
          }
        }
      );
    }
  },
  watch: {}
};
