import { AuthService } from "../index";

class AuthGuard {
  async freelancerAuthGuard(to, from, next) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      AuthService.getAssignedRole().then(res => {
        const role = res.data.data.role;
        if (role === "freelancer" && to.path.includes("freelancer")) {
          next();
        } else {
          next({ path: "home" });
        }
      });
    } else {
      next({ path: "login" });
    }
  }
  async employerAuthGuard(to, from, next) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      AuthService.getAssignedRole().then(res => {
        const role = res.data.data.role;
        if (role === "employer" && to.path.includes("employer")) {
          next();
        } else {
          next({ path: "home" });
        }
      });
    } else {
      next({ path: "login" });
    }
  }

  async loginGuard(to, from, next) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      AuthService.getAssignedRole().then(res => {
        const role = res.data.data.role;
        if (role === "employer") {
          next({ path: "employer/dashboard" });
        } else if (role === "freelancer") {
          next({ path: "freelancer/dashboard" });
        }
      });
    } else {
      next();
    }
  }
}

export default new AuthGuard();
