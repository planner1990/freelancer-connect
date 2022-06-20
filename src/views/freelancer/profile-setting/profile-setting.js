import DashboardCard from "../../../components/dashboardCard/index";
import HeaderSection from "../../../components/header-section/index";
import ProjectList from "../../../components/project-list/index";
import freelancerServices from "../../../core/services/modules/freelancerServices";
import projectsService from "../../../core/services/modules/projectsService";
import Snackbar from "../../../components/snackbar/index";
import { mapActions, mapGetters } from "vuex";
import * as types from "../../../shared/store/types";

export default {
  name: "profile-setting",
  components: {
    DashboardCard,
    HeaderSection,
    ProjectList,
    Snackbar
  },
  props: [],
  data() {
    return {
      profileImage: "../../../assets/image/profile.jpg",
      valid: true,
      name: "",
      companyName: "",
      nameRules: [
        v => !!v || "لطفا نام خود را وارد کنید",
        v => (v && v.length <= 10) || "نام وارد شده باید بیش از ۱۰ کاراکتر باشد"
      ],
      email: "",
      emailRules: [
        v => !!v || "لطفا ایمیل خود را وارد کنید",
        v => /.+@.+\..+/.test(v) || "ایمیل وارد شده معتبر نیست"
      ],
      select: "",
      files: [],
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialogDeleteEducation: false,
      dialogDeleteExperience: false,
      dialogDeleteProject: false,
      dialogDeleteCertificate: false,
      isMobile: true,
      titleCard: "پروژه‌ها",
      snackbarMessage: "لطفا کلیه موارد مشخص شده را کامل نمایید.",
      showSnackbar: false,
      profileInfo: {},
      categories: {},
      profileForm: {
        first_name: "",
        last_name: "",
        gender: ""
      },
      attachments: [],
      experienceList: [],
      educationList: [],
      skillsList: [],
      enableButton: false,
      show: false,
      imgDataUrl: "", // the dateBase64 url of created image
      educationForm: {
        educationLevel: "",
        educationLocation: "",
        educationMajor: "",
        educationStart: null,
        educationEnd: null
      },
      educationFormRule: {
        name: [v => !!v || "لطفا عنوان را وارد کنید"],
        educationLocation: [
          v => !!v || "لطفا نام دانشگاه یا موسسه را وارد کنید"
        ],
        major: [v => !!v || "لطفا مقطع تحصیلی را وارد کنید"],
        educationStart: [v => !!v || "لطفا تاریخ شروع تحصیل را وارد کنید"],
        educationEnd: [v => !!v || "لطفا پایان تحصیل را وارد کنید"]
      },
      experienceForm: {
        name: "",
        companyName: "",
        experienceStart: null,
        experienceEnd: null
      },
      experienceFormRule: {
        name: [v => !!v || "لطفا سمت را وارد کنید"],
        companyName: [v => !!v || "لطفا نام شرکت را وارد کنید"],
        experienceStart: [v => !!v || "لطفا تاریخ شروع فعالیت را وارد کنید"],
        experienceEnd: [v => !!v || "لطفا پایان فعالیت را وارد کنید"]
      },
      projectsForm: {
        title: "",
        url: ""
      },
      projectRule: {
        name: [v => !!v || "لطفا عنوان را وارد کنید"],
        url: [
          v => !!v || "لطفا آدرس پروژه را وارد کنید",
          v =>
            /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/.test(v) ||
            "طبق مثال وارد نمایید: http(s)://test.com"
        ]
      },
      certificateForm: {
        title: "",
        achieved_date: null
      },
      certificateFormRule: {
        name: [v => !!v || "لطفا عنوان را وارد کنید"],
        achieved_date: [v => !!v || "لطفا تاریخ شروع فعالیت را وارد کنید"]
      },
      profileExperienceIndexList: [],
      profileEducationIndexList: [],
      profileProjectIndexList: [],
      profileCertificateIndexList: [],
      profileId: "",
      profileInfoIndexList: ""
    };
  },
  computed: {
    ...mapGetters({
      formData: types.dialogForm.FORM_LIST_GET
    }),
    listOfFormData() {
      return this.formData;
    },

    isCompany() {
      return this.profileInfo?.user?.is_company === 1;
    },
    logo() {
      return this.imgDataUrl
        ? this.imgDataUrl
        : require("../../../assets/image/profile.jpg");
    }
  },
  mounted() {
    this.profileInfoIndex();
    this.showProfile();
    this.showCategoryById();
    this.getSkillsList();
    this.profileExperienceIndex();
    this.profileEducationIndex();
    this.profileProjectIndex();
    this.profileCertificateIndex();
  },
  methods: {
    ...mapActions({
      avatarProfile: types.avatarManagement.actions.AVATAR_MANAGEMENT_ACTION
    }),
    resetValidation() {
      // this.$refs.newForm.resetValidation();
    },
    hideSnackbar() {
      this.showSnackbar = false;
    },
    showProfile() {
      freelancerServices.showProfile().then(res => {
        this.profileInfo = res.data.data;
        this.experienceList = res.data.data.user.profile?.experience;
        this.educationList = res.data.data.user.profile?.education;
        if (this.profileInfo.user["company"]) {
          this.companyName = this.profileInfo.user?.company?.name;
        }
        this.avatarProfile(this.profileInfo);
      });
    },
    showCategoryById() {
      projectsService.activityTypes().then(res => {
        this.categories = res.data.data;
      });
    },
    getFileId(value) {
      this.attachments.push(value);
      this.enableButton = true;
    },
    getSkillsList() {
      projectsService.skills().then(res => {
        this.skillsList = res.data.data;
      });
    },
    enableUpdateProfileButton() {
      this.enableButton = true;
    },
    goTo(userId) {
      this.$router.push(`/profile/${userId}`);
    },
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      console.log(field);
      this.imgDataUrl = imgDataUrl;
    },
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    },
    validate() {
      this.$refs.newForm1.resetValidation();
      this.$refs.newForm1.reset();
      this.$refs.newForm2.resetValidation();
      this.$refs.newForm2.reset();
      this.$refs.newForm3.resetValidation();
      this.$refs.newForm3.reset();
      this.$refs.newForm4.resetValidation();
      this.$refs.newForm4.reset();
      this.dialog1 = false;
      this.dialog2 = false;
      this.dialog3 = false;
      this.dialog4 = false;
      this.experienceForm = {
        name: "",
        companyName: "",
        experienceStart: null,
        experienceEnd: null
      };
      this.educationForm = {
        educationLevel: "",
        educationLocation: "",
        educationMajor: "",
        educationStart: null,
        educationEnd: null
      };
      this.projectsForm = {
        title: "",
        url: ""
      };
      this.certificateForm = {
        title: "",
        achieved_date: ""
      };
    },
    handleDataForm(type) {
      if (this.$refs.newForm.validate() === true) {
        switch (type) {
          case "experience":
            this.experienceForm = {
              job_title: this.experienceForm.name,
              company_title: this.experienceForm.companyName,
              start_date: this.experienceForm.experienceStart,
              end_date: this.experienceForm.experienceEnd
            };
            break;
          case "education":
            this.educationForm = {
              degree_title: this.educationForm.educationLevel,
              institute_title: this.educationForm.educationLocation,
              start_date: this.educationForm.educationStart,
              end_date: this.educationForm.educationEnd
            };
            break;
          case "projects":
            this.projectsForm = {
              title: this.projectsForm.title,
              url: this.projectsForm.url
            };
            break;
          case "award":
            this.awardForm = {
              title: this.awardForm.title,
              achieved_date: this.awardForm.achieved_date
            };
            break;
        }
        // this.resetValidation();
        this.dialog = false;
        this.educationForm = {};
        this.experienceForm = {};
        this.awardForm = {};
        this.projectsForm = {};
        this.experienceForm = {
          experienceStart: null,
          experienceEnd: null
        };
        this.educationForm = {
          educationStart: null,
          educationEnd: null
        };
        this.awardForm = {
          achieved_date: null
        };
      }
    },
    getProfileId(profileId) {
      this.profileId = profileId;
    },
    profileInfoIndex() {
      freelancerServices.profileInfoIndex().then(res => {
        this.profileInfoIndexList = res.data.data;
      });
    },
    profileInfoUpdate() {
      this.showSnackbar = false;
      const body = {
        first_name: this.profileInfo.user["first_name"],
        last_name: this.profileInfo.user["last_name"],
        category_id: this.profileInfo.user["category_id"]
      };
      freelancerServices.profileInfoUpdate(body).then(() => {
        this.showSnackbar = true;
        this.snackbarMessage = "فیلد مورد نظر با موفقیت ایجاد شد.";
      });
    },
    profileExperienceIndex() {
      freelancerServices.profileExperienceIndex().then(res => {
        this.profileExperienceIndexList = res.data.data;
      });
    },
    profileStoreAndEditExperience() {
      if (this.profileId) {
        this.profileExperienceUpdate();
      } else {
        this.profileExperienceStore();
      }
    },
    profileExperienceStore() {
      this.showSnackbar = false;
      const body = {
        position: this.experienceForm.name,
        company_name: this.experienceForm.companyName,
        from: this.experienceForm.experienceStart,
        to: this.experienceForm.experienceEnd
      };
      freelancerServices.profileExperienceStore(body).then(() => {
        this.showSnackbar = true;
        this.snackbarMessage = "فیلد مورد نظر با موفقیت ایجاد شد.";
        this.validate();
        this.profileExperienceIndex();
      });
    },
    profileExperienceUpdate() {
      this.showSnackbar = false;
      const body = {
        position: this.experienceForm.name,
        company_name: this.experienceForm.companyName,
        from: this.experienceForm.experienceStart,
        to: this.experienceForm.experienceEnd
      };
      freelancerServices
        .profileExperienceUpdate(body, this.profileId)
        .then(() => {
          this.showSnackbar = true;
          this.snackbarMessage = "فیلد مورد نظر با موفقیت به روز رسانی شد.";
          this.profileExperienceIndex();
          this.validate();
        });
    },
    profileExperienceShow(profileId) {
      this.profileId = profileId;
      freelancerServices.profileExperienceShow(profileId).then(res => {
        const data = res.data.data;
        this.experienceForm = {
          name: data.position,
          companyName: data["company_name"],
          experienceStart: data.from,
          experienceEnd: data.to
        };
      });
    },
    editExperienceProfile(profileId) {
      this.dialog2 = true;
      this.profileExperienceShow(profileId);
    },
    profileExperienceDelete() {
      freelancerServices.profileExperienceDelete(this.profileId).then(() => {
        this.profileExperienceIndex();
        this.dialogDeleteExperience = false;
        this.profileId = null;
      });
    },
    profileEducationIndex() {
      freelancerServices.profileEducationIndex().then(res => {
        this.profileEducationIndexList = res.data.data;
      });
    },
    profileStoreAndEditEducation() {
      if (this.profileId) {
        this.profileEducationUpdate();
      } else {
        this.profileEducationStore();
      }
    },
    profileEducationStore() {
      this.showSnackbar = false;
      const body = {
        grade: this.educationForm.educationMajor,
        major: this.educationForm.educationLevel,
        university_name: this.educationForm.educationLocation,
        from: this.educationForm.educationStart,
        to: this.educationForm.educationEnd
      };
      freelancerServices.profileEducationStore(body).then(() => {
        this.showSnackbar = true;
        this.snackbarMessage = "فیلد مورد نظر با موفقیت ایجاد شد.";
        this.validate();
        this.profileEducationIndex();
      });
    },
    profileEducationUpdate() {
      this.showSnackbar = false;
      const body = {
        grade: this.educationForm.educationMajor,
        major: this.educationForm.educationLevel,
        university_name: this.educationForm.educationLocation,
        from: this.educationForm.educationStart,
        to: this.educationForm.educationEnd
      };
      freelancerServices
        .profileEducationUpdate(body, this.profileId)
        .then(() => {
          this.showSnackbar = true;
          this.snackbarMessage = "فیلد مورد نظر با موفقیت به روز رسانی شد.";
          this.profileEducationIndex();
          this.validate();
        });
    },
    profileEducationShow(profileId) {
      this.profileId = profileId;
      freelancerServices.profileEducationShow(profileId).then(res => {
        const data = res.data.data;
        this.educationForm = {
          educationLevel: data.major,
          educationMajor: data["grade"],
          educationLocation: data.university_name,
          educationStart: data.from,
          educationEnd: data.to
        };
      });
    },
    editEducationProfile(profileId) {
      this.dialog1 = true;
      this.profileEducationShow(profileId);
    },
    profileEducationDelete() {
      freelancerServices.profileEducationDelete(this.profileId).then(() => {
        this.profileEducationIndex();
        this.dialogDeleteProject = false;
        this.profileId = null;
      });
    },
    profileProjectIndex() {
      freelancerServices.profileProjectIndex().then(res => {
        this.profileProjectIndexList = res.data.data;
      });
    },
    profileStoreAndEditProject() {
      if (this.profileId) {
        this.profileProjectUpdate();
      } else {
        this.profileProjectStore();
      }
    },
    profileProjectStore() {
      this.showSnackbar = false;
      const body = {
        url: this.projectsForm.url,
        title: this.projectsForm.title
      };
      freelancerServices.profileProjectStore(body).then(() => {
        // this.showSnackbar = true;
        // this.snackbarMessage = "فیلد مورد نظر با موفقیت ایجاد شد.";
        this.validate();
        this.profileProjectIndex();
      });
    },
    profileProjectUpdate() {
      this.showSnackbar = false;
      const body = {
        url: this.projectsForm.url,
        title: this.projectsForm.title
      };
      freelancerServices.profileProjectUpdate(body, this.profileId).then(() => {
        // this.showSnackbar = true;
        // this.snackbarMessage = "فیلد مورد نظر با موفقیت به روز رسانی شد.";
        this.profileProjectIndex();
        this.validate();
      });
    },
    profileProjectShow(profileId) {
      this.profileId = profileId;
      freelancerServices.profileProjectShow(profileId).then(res => {
        const data = res.data.data;
        this.projectsForm = {
          url: data.url,
          title: data["title"]
        };
      });
    },
    editProjectProfile(profileId) {
      this.dialog3 = true;
      this.profileProjectShow(profileId);
    },
    profileProjectDelete() {
      freelancerServices.profileProjectDelete(this.profileId).then(() => {
        this.profileProjectIndex();
        this.dialogDeleteProject = false;
        this.profileId = null;
      });
    },
    profileCertificateIndex() {
      freelancerServices.profileCertificateIndex().then(res => {
        this.profileCertificateIndexList = res.data.data;
      });
    },
    profileStoreAndEditCertificate() {
      if (this.profileId) {
        this.profileCertificateUpdate();
      } else {
        this.profileCertificateStore();
      }
    },
    profileCertificateStore() {
      this.showSnackbar = false;
      const body = {
        title: this.certificateForm.title,
        achieved_date: this.certificateForm.achieved_date
      };
      freelancerServices.profileCertificateStore(body).then(() => {
        // this.showSnackbar = true;
        // this.snackbarMessage = "فیلد مورد نظر با موفقیت ایجاد شد.";
        this.validate();
        this.profileCertificateIndex();
      });
    },
    profileCertificateUpdate() {
      this.showSnackbar = false;
      const body = {
        title: this.certificateForm.title,
        achieved_date: this.certificateForm.achieved_date
      };
      freelancerServices
        .profileCertificateUpdate(body, this.profileId)
        .then(() => {
          // this.showSnackbar = true;
          // this.snackbarMessage = "فیلد مورد نظر با موفقیت به روز رسانی شد.";
          this.profileCertificateIndex();
          this.validate();
        });
    },
    profileCertificateShow(profileId) {
      this.profileId = profileId;
      freelancerServices.profileCertificateShow(profileId).then(res => {
        const data = res.data.data;
        this.certificateForm = {
          title: data.title,
          achieved_date: data["achieved_date"]
        };
      });
    },
    editCertificateProfile(profileId) {
      this.dialog4 = true;
      this.profileCertificateShow(profileId);
    },
    profileCertificateDelete() {
      freelancerServices.profileCertificateDelete(this.profileId).then(() => {
        this.profileCertificateIndex();
        this.dialogDeleteCertificate = false;
        this.profileId = null;
      });
    }
  },
  watch: {}
};
