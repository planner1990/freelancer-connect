import AuthService from "../../../core/services/modules/authService";
import projectsService from "../../../core/services/modules/projectsService";
import { mapGetters, mapMutations } from "vuex";
import * as types from "../../../shared/store/types";

export default {
  name: "complete-register",
  components: {},
  props: [],
  data() {
    return {
      firstName: "",
      lastName: "",
      companyName: "",
      signInLoading: false,
      valid: false,
      items: ["نوع اول", "نوع دوم", "نوع سوم"],
      companyTypeLists: [],
      companyList: "",
      registerRule: {
        firstname: [v => !!v || "لطفا موبایل خود را وارد کنید"],
        lastname: [v => !!v || "لطفا نام خانوادگی را وارد کنید"],
        companyName: [v => !!v || "لطفا نام شرکت را وارد کنید"],
        typeOfActivity: [v => !!v || "لطفا یکی از موارد را انتخاب نمایید."]
      }
    };
  },
  computed: {
    ...mapGetters({
      registrationData: types.storeRegisterForm.REGISTER_FORM_GET,
      getEmployerData:
        types.HandleEmployerToLogin.getters.HANDLE_EMPLOYER_TO_LOGIN_GET
    }),
    ...mapMutations([types.storeRegisterForm.REGISTER_FORM_MUTATE]),
    getDataFromStore() {
      return this.registrationData;
    }
  },
  mounted() {
    this.getCompanyTypes();
    this.resetRegister();
  },
  methods: {
    backToPrevStep() {
      this.$router.push("/login/personality");
    },
    registration() {
      if (this.$refs[`form`].validate() === true) {
        this.signInLoading = true;
        this.$store.commit(types.storeRegisterForm.REGISTER_FORM_MUTATE, {
          first_name: this.firstName,
          last_name: this.lastName,
          company_name: this.companyName,
          activity_type_id: 1
        });
        const body = {
          first_name: this.firstName ? this.firstName : "",
          last_name: this.lastName ? this.lastName : "",
          company_name: this.companyName ? this.companyName : "",
          role: this.getDataFromStore.role,
          is_company: this.getDataFromStore.is_company,
          category_id: this.companyList
        };
        AuthService.register(body).then(res => {
          localStorage.setItem("accessToken", res.data.data.token);
          if (res.status === 200) {
            if (
              this.getEmployerData.currentURL &&
              this.getDataFromStore.role === "employer"
            ) {
              localStorage.setItem("accessToken", res.data.data.token);
              this.signInLoading = false;
              this.$router.push(this.getEmployerData.currentURL);
            } else {
              this.routToDashboard();
              this.signInLoading = false;
            }
          }
        });
      }
    },
    routToDashboard() {
      AuthService.getAssignedRole().then(response => {
        const role = response.data.data.role;
        switch (role) {
          case "freelancer":
            this.$router.push("/freelancer/profile-setting");
            break;
          case "employer":
            this.$router.push("/employer/profile-setting");
            break;
          case "admin":
            this.$router.push("/panel");
            break;
        }
      });
    },
    getCompanyTypes() {
      projectsService.activityTypes().then(res => {
        this.companyTypeLists = res.data.data;
      });
    },
    resetRegister() {
      if (!this.getDataFromStore.identification) {
        this.$router.push("/login");
      }
    }
  }
};
