import Vue from "vue";
import VueRouter from "vue-router";
import { AuthGuard } from "@/core/services";
// import store from "@/store";
// import * as types from "@/store/types";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    meta: { transitionName: "slide" },
    // beforeEnter: AuthGuard.loginGuard,
    component: () => import("../views/auth/login/index"),
    children: [
      {
        path: "/",
        name: "enter-phone-number",
        meta: { transitionName: "slide" },
        component: () =>
          import("../components/loginComp/enterPhoneNumber/index")
      },
      {
        path: "enter-otp-code",
        name: "enter-otp-code",
        meta: { transitionName: "slide" },
        component: () => import("../components/loginComp/enterOTPCode/index")
      },
      {
        path: "freelancer-or-employer",
        name: "freelancer-or-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import("../components/loginComp/freelancerOrEmployer/index")
      },
      {
        path: "personality",
        name: "personality",
        meta: { transitionName: "slide" },
        component: () => import("../components/loginComp/personality/index")
      },
      {
        path: "complete-register",
        name: "complete-register",
        meta: { transitionName: "slide" },
        component: () =>
          import("../components/loginComp/completeRegister/index")
      }
    ]
  },
  {
    path: "/",
    redirect: `/home`
  },
  {
    path: "*",
    redirect: `/home`
  },
  {
    path: "/front-office",
    redirect: `/home`
  },
  {
    path: "/blog",
    name: "blog",
    meta: { transitionName: "slide" }
  },
  {
    path: "/front-office",
    name: "front-office",
    meta: { transitionName: "slide" },
    component: () => import("../views/front-office/front-office-layout/index"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/home-page/index")
      },
      {
        path: "/browse-services",
        name: "browse-services",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/services-browse/index")
      },
      {
        path: "/browse-projects",
        name: "browse-projects",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/projects-browse/index")
      },
      {
        path: "/project-details/:id",
        name: "project-details",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/project-details/index")
      },
      {
        path: "/service-details/:id",
        name: "service-details",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/service-details/index")
      },
      {
        path: "/public-profile",
        name: "public-profile",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/public-profile/index")
      }
    ]
  },
  {
    path: "/create-project",
    name: "create-project",
    meta: { transitionName: "slide" },
    component: () => import("../views/front-office/create-project/index"),
    redirect: {
      name: "create-project"
    },
    children: [
      {
        path: "/",
        name: "name-description",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/front-office/create-project/name-description/index")
      },
      {
        path: "/activity",
        name: "activity",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/front-office/create-project/activity/index")
      },
      {
        path: "/detail",
        name: "detail",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/front-office/create-project/detail/index")
      },
      {
        path: "/confirm-info",
        name: "confirm-info",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/front-office/create-project/confirm-info/index")
      }
    ]
  },
  {
    path: "/freelancer",
    name: "freelancer",
    beforeEnter: AuthGuard.freelancerAuthGuard,
    redirect: `/freelancer/dashboard`,
    meta: { transitionName: "slide" },
    component: () =>
      import(
        /* webpackChunkName: "panel-layout" */ "../views/panel/layout/index"
      ),

    children: [
      {
        path: "dashboard",
        name: "dashboard-freelancer",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/dashboard/index")
      },
      {
        path: "post-service",
        name: "post-service",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/post-service/index")
      },
      {
        path: "message-center",
        name: "message-center",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/message-center/index")
      },
      {
        path: "my-services",
        name: "my-services",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/my-services/index")
      },
      {
        path: "profile-setting",
        name: "profile-setting",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/profile-setting/index")
      },
      {
        path: "account-setting",
        name: "account-setting-freelancer",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/account-setting/index")
      },
      {
        path: "posted-projects",
        name: "posted-projects",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/posted-projects/index"),
        children: [
          {
            path: ":id/project-detail",
            name: "project-detail-freelancer",
            meta: { transitionName: "slide" },
            component: () =>
              import("../views/freelancer/posted-projects/project-detail/index")
          }
        ]
      },
      {
        path: "completed-projects",
        name: "completed-projects",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/completed-projects/index")
      },
      {
        path: "cancelled-projects",
        name: "cancelled-projects",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/cancelled-projects/index")
      },
      {
        path: "ongoing-projects",
        name: "ongoing-projects",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/ongoing-projects/index"),
        children: [
          {
            path: ":id/progress-section",
            name: "progress-section-freelancer",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/freelancer/ongoing-projects/progress-section/index"
              ),
            props: true
          }
        ]
      },
      {
        path: "posted-services",
        name: "posted-services",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/posted-services/index")
      },
      {
        path: "ongoing-services",
        name: "ongoing-services-Freelancer",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/ongoing-services/index"),
        children: [
          {
            path: ":id/progress-section",
            name: "ongoing-service-detail-freelancer",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/freelancer/ongoing-services/progress-section/index"
              ),
            props: true
          }
        ]
      },
      {
        path: "completed-services",
        name: "completed-services",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/completed-services/index")
      },
      {
        path: "cancelled-services",
        name: "cancelled-services",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/cancelled-services/index")
      },
      {
        path: "proposals",
        name: "proposals",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/proposals/index")
      },
      {
        path: "wallet",
        name: "freelancer-wallet",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/freelancer/financial-management/wallet/index")
      },
      {
        path: "withdrawal-request-history",
        name: "freelancer-withdrawal-request-history",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/freelancer/financial-management/wallet/withdrawal-request-history/index"
          )
      },
      {
        path: "transactions",
        name: "freelancer-transactions",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/freelancer/financial-management/transactions/index")
      },
      {
        path: "bank-card",
        name: "freelancer-bank-card",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/freelancer/financial-management/bank-card/index")
      },
      {
        path: "invoices",
        name: "invoices",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/invoices/index")
      },
      {
        path: "packages",
        name: "packages",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/packages/index")
      },
      {
        path: "my-saved-items",
        name: "my-saved-items",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/my-saved-items/index")
      }
    ]
  },
  {
    path: "/employer",
    name: "employer",
    beforeEnter: AuthGuard.employerAuthGuard,
    redirect: `/employer/dashboard`,
    meta: { transitionName: "slide" },
    component: () =>
      import(
        /* webpackChunkName: "panel-layout" */ "../views/panel/layout/index"
      ),
    children: [
      {
        path: "dashboard",
        name: "dashboard-employer",
        meta: { transitionName: "slide" },
        component: () => import("../views/employer/dashboard-employer/index")
      },
      {
        path: "post-job",
        name: "post-job",
        meta: { transitionName: "slide" },
        component: () => import("../views/employer/post-job/index")
      },
      // {
      //   path: "message-center",
      //   name: "message-center-employer",
      //   meta: { transitionName: "slide" },
      //   component: () => import("../views/freelancer/message-center/index")
      // },
      {
        path: "my-projects",
        name: "my-projects",
        meta: { transitionName: "slide" },
        component: () => import("../views/employer/my-projects/index")
      },
      {
        path: "wallet",
        name: "employer-wallet",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/employer/financial-management/wallet/index")
      },
      {
        path: "withdrawal-request-history",
        name: "employer-withdrawal-request-history",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/financial-management/wallet/withdrawal-request-history/index"
          )
      },
      {
        path: "transactions",
        name: "employer-transactions",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/employer/financial-management/transactions/index")
      },
      {
        path: "bank-card",
        name: "employer-bank-card",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/employer/financial-management/bank-card/index")
      },
      {
        path: "profile-setting",
        name: "profile-setting-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/employer/setting/profile-setting-employer/index")
      },
      {
        path: "account-setting",
        name: "account-setting-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/employer/setting/account-setting-employer/index")
      },
      {
        path: "completed-projects",
        name: "completed-projects-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/manage-job/completed-projects-employer/index"
          )
      },
      {
        path: "cancelled-projects",
        name: "cancelled-projects-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/manage-job/cancelled-projects-employer/index"
          )
      },
      {
        path: "ongoing-projects",
        name: "ongoing-projects-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/manage-job/ongoing-projects-employer/index"
          ),
        children: [
          {
            path: ":id/progress-section",
            name: "progress-section-employer",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/employer/manage-job/ongoing-projects-employer/progress-section/index"
              ),
            props: true
          },
          {
            path: ":id/payment",
            name: "employer-payment-milestone",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/employer/manage-job/ongoing-projects-employer/payment/index"
              )
          }
        ]
      },
      {
        path: "pending-projects",
        name: "pending-projects-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/manage-job/pending-projects-employer/index"
          ),
        children: [
          {
            path: ":id/project-detail",
            name: "project-detail",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/employer/manage-job/pending-projects-employer/project-detail/index"
              )
          },
          {
            path: ":id/payment",
            name: "employer-payment",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/employer/manage-job/pending-projects-employer/payment/index"
              )
          }
        ]
      },
      {
        path: "posted-services",
        name: "posted-services-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/manage-services/posted-services-employer/index"
          ),
        children: [
          {
            path: ":id/payment",
            name: "posted-services-employer-payment",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/employer/manage-services/posted-services-employer/payment/index"
              )
          }
        ]
      },
      {
        path: "ongoing-services",
        name: "ongoing-services-employer",
        meta: { transitionName: "slide" },
        props: true,
        component: () =>
          import(
            "../views/employer/manage-services/ongoing-services-employer/index"
          ),
        children: [
          {
            path: ":id/service-detail",
            name: "ongoing-service-detail",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/employer/manage-services/ongoing-services-employer/service-detail/index"
              )
          },
          {
            path: ":id/payment",
            name: "ongoing-services-employer-payment",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                "../views/employer/manage-services/ongoing-services-employer/payment/index"
              )
          }
        ]
      },
      {
        path: "completed-services",
        name: "completed-services-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/manage-services/completed-services-employer/index"
          )
      },
      {
        path: "cancelled-services",
        name: "cancelled-services-employer",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            "../views/employer/manage-services/cancelled-services-employer/index"
          )
      },
      {
        path: "payout",
        name: "payout-employer",
        meta: { transitionName: "slide" },
        component: () => import("../views/employer/payout-employer/index")
      },
      {
        path: "invoices",
        name: "invoices-employer",
        meta: { transitionName: "slide" },
        component: () => import("../views/employer/invoices-employer/index")
      },
      {
        path: "my-saved-items",
        name: "my-saved-items-employer",
        meta: { transitionName: "slide" },
        component: () => import("../views/freelancer/my-saved-items/index")
      }
    ]
  }
  // {
  //   path: "/",
  //   redirect: `/auth`
  // },
  // {
  //   path: "/auth",
  //   redirect: "/auth/login",
  //   meta: { transitionName: "slide" },
  //   component: () =>
  //     import(/* webpackChunkName: "auth" */ "../views/auth/index"),
  //   async beforeEnter(to, from, next) {
  //     let isAuth = await store.getters[types.auth.getters.GET_IS_AUTH];
  //     if (isAuth) {
  //       next({
  //         name: "panel" // back to safety route //
  //       });
  //     } else {
  //       next();
  //     }
  //   },
  //   children: [
  //     {
  //       path: "login",
  //       name: "login",
  //       meta: { transitionName: "slide" },
  //       component: () =>
  //         import(/* webpackChunkName: "login" */ "../views/auth/login/index"),
  //       children: [
  //         {
  //           path: "/",
  //           name: "loginForm",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "google-auth" */ "../views/auth/login/login/index"
  //             )
  //         },
  //         {
  //           path: "google-auth",
  //           name: "googleAuth",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "google-auth" */ "../views/auth/google-auth/index"
  //             ),
  //           async beforeEnter(to, from, next) {
  //             let isAuth = await localStorage.getItem("google2faToken");
  //             if (isAuth) {
  //               next();
  //             } else {
  //               next({
  //                 path: "/auth/login" // back to safety route //
  //                 // query: { redirectFrom: to.fullPath }
  //               });
  //             }
  //           }
  //         },
  //         {
  //           path: "otp-auth",
  //           name: "otpAuth",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "otp-auth" */ "../views/auth/otp-auth/index"
  //             ),
  //           async beforeEnter(to, from, next) {
  //             let isAuth = await localStorage.getItem("otpToken");
  //             if (isAuth) {
  //               next();
  //             } else {
  //               next({
  //                 path: "/auth/login" // back to safety route //
  //                 // query: { redirectFrom: to.fullPath }
  //               });
  //             }
  //           }
  //         },
  //         {
  //           path: "password-recovery",
  //           name: "passwordRecovery",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "password-recovery" */ "../views/auth/password-recovery/index"
  //             )
  //         },
  //         {
  //           path: "password-recovery-otp",
  //           name: "passwordRecoveryOtp",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "password-recovery" */ "../views/auth/password-recovery-otp/index"
  //             ),
  //           async beforeEnter(to, from, next) {
  //             let isAuth = await localStorage.getItem("otpToken");
  //             if (isAuth) {
  //               next();
  //             } else {
  //               next({
  //                 path: "/auth/login" // back to safety route //
  //                 // query: { redirectFrom: to.fullPath }
  //               });
  //             }
  //           }
  //         },
  //         {
  //           path: "password-reset",
  //           name: "passwordReset",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "password-recovery" */ "../views/auth/password-reset/index"
  //             ),
  //           async beforeEnter(to, from, next) {
  //             let isAuth = await localStorage.getItem("otpToken");
  //             if (isAuth) {
  //               next();
  //             } else {
  //               next({
  //                 path: "/auth/login" // back to safety route //
  //                 // query: { redirectFrom: to.fullPath }
  //               });
  //             }
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       path: "register",
  //       name: "register",
  //       meta: { transitionName: "slide" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "register" */ "../views/auth/register/index"
  //         ),
  //       children: [
  //         {
  //           path: "/",
  //           name: "registerForm",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "google-auth" */ "../views/auth/register/register/index"
  //             )
  //         },
  //         {
  //           path: "register-verification",
  //           name: "registerVerification",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "registerVerification" */ "../views/auth/register-verification/index"
  //             ),
  //           async beforeEnter(to, from, next) {
  //             let isAuth = await localStorage.getItem("otpToken");
  //             if (isAuth) {
  //               next();
  //             } else {
  //               next({
  //                 path: "/auth/register" // back to safety route //
  //                 // query: { redirectFrom: to.fullPath }
  //               });
  //             }
  //           }
  //         },
  //         {
  //           path: "go-for-signin",
  //           name: "goToLogin",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "google-auth" */ "../views/auth/goToLogin/index"
  //             )
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: "/panel",
  //   name: "panel",
  //   redirect: `/panel/dashboard`,
  //   meta: { transitionName: "slide" },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "panel-layout" */ "../views/panel/layout/index"
  //     ),
  //   async beforeEnter(to, from, next) {
  //     let isAuth = await store.getters[types.auth.getters.GET_IS_AUTH];
  //     if (isAuth) {
  //       next();
  //     } else {
  //       if (to.fullPath.includes("submit-order")) {
  //         next({
  //           name: "loginForm"
  //         });
  //       } else {
  //         next({
  //           name: "loginForm", // back to safety route //
  //           query: { redirectFrom: to.fullPath }
  //         });
  //       }
  //     }
  //   },
  // async beforeEnter(to, from, next) {
  //   let isAuth = await store.getters[types.auth.getters.GET_IS_AUTH];
  //   console.log(isAuth);
  //   console.log(to, from, next);
  //   if (isAuth) {
  //     next();
  //   } else {
  //     // window.location = "http://p-dev-ex.ernyka.com/login";
  //     next({
  //       name: "login", // back to safety route //
  //       query: { redirectFrom: to.fullPath }
  //     });
  //   }
  // },
  //   children: [
  //     {
  //       path: "dashboard",
  //       name: "dashboard",
  //       meta: { transitionName: "slide", appBarTitle: "داشبورد" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "DashboardPage" */ "../views/panel/DashboardPage/index"
  //         )
  //     },
  //     {
  //       path: "fiat",
  //       name: "fiat",
  //       meta: {
  //         transitionName: "slide",
  //         appBarTitle: "پرفکت مانی"
  //       },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "PerfectMoney" */ "../views/panel/PerfectMoney/index"
  //         )
  //     },
  //     {
  //       path: "operation-fiat",
  //       name: "operation-fiat",
  //       meta: {
  //         transitionName: "slide"
  //       },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "OperationFiat" */ "../views/panel/OperationFiat/index"
  //         ),
  //       children: [
  //         {
  //           path: "buy",
  //           name: "buy",
  //           meta: { transitionName: "slide", appBarTitle: "خرید پرفکت‌مانی" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "Buy" */ "@/components/PerfectMoney/Buy/index"
  //             )
  //         },
  //         {
  //           path: "sell",
  //           name: "sell",
  //           meta: { transitionName: "slide", appBarTitle: "فروش پرفکت‌مانی" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "Sell" */ "@/components/PerfectMoney/Sell/index"
  //             )
  //         }
  //       ]
  //     },
  //     {
  //       path: "order",
  //       name: "panel-order",
  //       meta: { transitionName: "slide", appBarTitle: "سفارش گذاری" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "OrderPage" */ "../views/panel/OrderPage/index"
  //         )
  //     },
  //     {
  //       path: "submit-order",
  //       name: "order-process",
  //       meta: { transitionName: "slide" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "order" */ "../views/panel/OrderProcessPage/index"
  //         ),
  //       children: [
  //         {
  //           path: ":id/deposit",
  //           name: "deposit-process",
  //           meta: { transitionName: "slide", appBarTitle: "واریز" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "deposit-process" */ "@/components/OrderProcessPage/Deposit/index"
  //             )
  //         },
  //         {
  //           path: ":id/offline-deposit",
  //           name: "offline-deposit-process",
  //           meta: { transitionName: "slide", appBarTitle: "واریز" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "offline-deposit-process" */ "@/components/OrderProcessPage/Deposit/OfflineDeposit/index"
  //             )
  //         },
  //         {
  //           path: ":id/deposit/resubmit",
  //           name: "deposit-resubmit-process",
  //           meta: { transitionName: "slide", appBarTitle: "کیف پول‌ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "withdrawal-rial-process" */ "@/components/OrderProcessPage/Deposit/ResubmitDeposit/index"
  //             )
  //         },
  //         {
  //           path: ":id/withdrawal",
  //           name: "withdrawal-process",
  //           meta: { transitionName: "slide", appBarTitle: "برداشت" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "withdrawal-process" */ "@/components/OrderProcessPage/Withdrawal/index"
  //             ),
  //           children: [
  //             {
  //               path: "rial",
  //               name: "withdrawal-rial-process",
  //               meta: { transitionName: "slide", appBarTitle: "برداشت" },
  //               component: () =>
  //                 import(
  //                   /* webpackChunkName: "withdrawal-rial-process" */ "@/components/OrderProcessPage/Withdrawal/Rial/index"
  //                 )
  //             },
  //             {
  //               path: "crypto",
  //               name: "withdrawal-crypto-process",
  //               meta: { transitionName: "slide", appBarTitle: "برداشت" },
  //               component: () =>
  //                 import(
  //                   /* webpackChunkName: "withdrawal-crypto-process" */ "@/components/OrderProcessPage/Withdrawal/Crypto/index"
  //                 )
  //             }
  //           ]
  //         },
  //         {
  //           path: ":id/exchange",
  //           name: "exchange-process",
  //           meta: { transitionName: "slide", appBarTitle: "تبدیل" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "exchange-process" */ "@/components/OrderProcessPage/Exchange/index"
  //             )
  //         },
  //         {
  //           path: ":id/fiats",
  //           name: "fiat-process",
  //           meta: { transitionName: "slide" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "fiat-process" */ "@/components/OrderProcessPage/PerfectMoney/index"
  //             ),
  //           children: [
  //             {
  //               path: "buy",
  //               name: "fiat-buy-process",
  //               meta: {
  //                 transitionName: "slide",
  //                 appBarTitle: "خرید پرفکت‌مانی"
  //               },
  //               component: () =>
  //                 import(
  //                   /* webpackChunkName: "fiat-buy-process" */ "@/components/OrderProcessPage/PerfectMoney/Buy/index"
  //                 )
  //             },
  //             {
  //               path: "sell",
  //               name: "fiat-sell-process",
  //               meta: {
  //                 transitionName: "slide",
  //                 appBarTitle: "فروش پرفکت‌مانی"
  //               },
  //               component: () =>
  //                 import(
  //                   /* webpackChunkName: "fiat-sell-process" */ "@/components/OrderProcessPage/PerfectMoney/Sell/index"
  //                 )
  //             },
  //             {
  //               path: "resubmit-sell",
  //               name: "fiat-resubmit-sell-process",
  //               meta: {
  //                 transitionName: "slide",
  //                 appBarTitle: "فروش پرفکت‌مانی"
  //               },
  //               component: () =>
  //                 import(
  //                   /* webpackChunkName: "fiat-resubmit-sell-process" */ "@/components/OrderProcessPage/PerfectMoney/ResubmitSell/index"
  //                 )
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       path: "wallet",
  //       name: "wallet-order",
  //       meta: { transitionName: "slide", appBarTitle: "کیف پول‌ها" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "wallet" */ "../views/panel/WalletPage/index"
  //         )
  //     },
  //     {
  //       path: "tickets",
  //       meta: { transitionName: "slide", appBarTitle: "تیکت‌ ها" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "tickets-index" */ "../views/panel/Tickets/index"
  //         ),
  //       children: [
  //         {
  //           path: "create",
  //           name: "create-ticket",
  //           meta: { transitionName: "slide", appBarTitle: "تیکت‌ ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "create-ticket" */ "../views/panel/Tickets/CreateTicket/index"
  //             )
  //         },
  //         {
  //           path: ":ticketId",
  //           name: "single-ticket",
  //           meta: { transitionName: "slide", appBarTitle: "تیکت‌ ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "single-ticket" */ "../views/panel/Tickets/SingleTicket/index"
  //             )
  //         },
  //         {
  //           path: "",
  //           name: "ticket-list",
  //           meta: { transitionName: "slide", appBarTitle: "تیکت‌ ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "ticket-list" */ "../views/panel/Tickets/TicketList/index"
  //             )
  //         }
  //       ]
  //     },
  //     {
  //       path: "gifts",
  //       name: "gifts",
  //       meta: { transitionName: "slide", appBarTitle: "هدایا" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "gifts" */ "../views/panel/GiftsPage/index"
  //         )
  //     },
  //     {
  //       path: "operations",
  //       name: "operations",
  //       meta: { transitionName: "slide" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "wallet" */ "../views/panel/OperationsPage/index"
  //         ),
  //       children: [
  //         {
  //           path: "deposit",
  //           name: "deposit",
  //           meta: { transitionName: "slide", appBarTitle: "کیف پول‌ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "deposit" */ "@/components/OperationsPage/Deposit/index"
  //             )
  //         },
  //         {
  //           path: "withdrawal",
  //           name: "withdrawal",
  //           meta: { transitionName: "slide", appBarTitle: "کیف پول‌ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "withdrawal" */ "@/components/OperationsPage/Withdrawal/index"
  //             )
  //         },
  //         {
  //           path: "exchange",
  //           name: "exchange",
  //           meta: { transitionName: "slide", appBarTitle: "تبدیل" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "Exchange" */ "@/components/OperationsPage/Exchange/index"
  //             )
  //         }
  //       ]
  //     },
  //     {
  //       path: "transaction",
  //       name: "transaction-order",
  //       redirect: `/panel/transaction/deposits`,
  //       meta: { transitionName: "slide", appBarTitle: "تاریخچه تراکنش‌ها" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "transactionPage" */ "../views/panel/TransactionsPage/index"
  //         ),
  //       children: [
  //         {
  //           path: "deposits",
  //           name: "deposits",
  //           meta: { transitionName: "slide", appBarTitle: "تاریخچه تراکنش‌ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "deposits" */ "@/components/TransactionsPage/DepositTable/index"
  //             )
  //         },
  //         {
  //           path: "withdrawals",
  //           name: "withdrawals",
  //           meta: { transitionName: "slide", appBarTitle: "تاریخچه تراکنش‌ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "withdrawals" */ "@/components/TransactionsPage/WithdrawalTable/index"
  //             )
  //         },
  //         {
  //           path: "exchanges",
  //           name: "exchanges",
  //           meta: { transitionName: "slide", appBarTitle: "تاریخچه تراکنش‌ها" },
  //           component: () =>
  //             import(
  //               /* webpackChunkName: "exchanges" */ "@/components/TransactionsPage/ExchangeTable/index"
  //             )
  //         }
  //       ]
  //     },
  //     {
  //       path: "account",
  //       name: "account",
  //       meta: { transitionName: "slide", appBarTitle: "تنظیمات حساب" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "account" */ "../views/panel/AccountPage/index"
  //         )
  //     }
  //   ]
  // },
  // {
  //   path: "/email-verification",
  //   meta: { transitionName: "slide" },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "email-verification" */ "../views/auth/email-verification/index"
  //     ),
  //   children: [
  //     {
  //       path: "verified",
  //       name: "verified",
  //       meta: { transitionName: "slide" },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "email-verification-verified" */ "../views/auth/email-verification/email-verification-verified/index"
  //         )
  //     },
  //     // {
  //     //   path: "invalid",
  //     //   name: "invalid",
  //     //   meta: { transitionName: "slide" },
  //     //   component: () =>
  //     //     import(
  //     //       /* webpackChunkName: "email-verification-invalid" */ "../views/auth/email-verification/email-verification-invalid/index"
  //     //     )
  //     // },
  //     // {
  //     //   path: "success",
  //     //   name: "success",
  //     //   meta: { transitionName: "slide" },
  //     //   component: () =>
  //     //     import(
  //     //       /* webpackChunkName: "email-verification-success" */ "../views/auth/email-verification/email-verification-success/index"
  //     //     )
  //     // }
  //   ]
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
