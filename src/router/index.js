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
    name: "front-office",
    meta: { transitionName: "slide" },
    component: () => import("../views/front-office/front-office-layout/index"),
    children: [
      {
        path: "/",
        name: "home",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/home-page/index")
      },
      // {
      //   path: "/blog",
      //   name: "blog",
      //   beforeEnter() {
      //     // Put the full page URL including the protocol http(s) below
      //     window.location.replace("http://new-connecta-dev.ernyka.com/blog");
      //   }
      // },
      {
        path: "/faq",
        name: "faq",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/faq/index")
      },
      {
        path: "/about-us",
        name: "about-us",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/about-us/index")
      },
      {
        path: "/contact-us",
        name: "contact-us",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/contact-us/index")
      },
      {
        path: "/terms",
        name: "terms",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/terms/index")
      },
      {
        path: "/privacy-policy",
        name: "privacy-policy",
        meta: { transitionName: "slide" },
        component: () => import("../views/front-office/privacy-policy/index")
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
  },
  {
    path: "*",
    redirect: { name: "home" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
