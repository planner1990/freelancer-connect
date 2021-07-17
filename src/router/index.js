import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store";
// import * as types from "@/store/types";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/login`
  },
  {
    path: "/login",
    name: "login",
    meta: { transitionName: "slide" },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/login/index")
    // beforeEnter: (to, from, next) => {
    //   if (!store.state.auth.isAuth) next();
    //   else next("/panel");
    // }
  },
  {
    path: "/panel",
    name: "panel",
    // redirect: `/panel/dashboard`,
    meta: { transitionName: "slide" },
    component: () =>
      import(
        /* webpackChunkName: "panel-layout" */ "../views/panel/layout/index"
      ),
    children: [
      {
        path: "projects",
        name: "projects",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            /* webpackChunkName: "projects" */ "../views/panel/projects/index"
          )
      },
      {
        path: "edit-project",
        name: "edit-project",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/edit-project/index")
      },
      {
        path: "manage-users",
        name: "manage-users",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/manage-users/index")
      },
      {
        path: "account-setting",
        name: "account-setting",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/setting/account-setting/index")
      },
      {
        path: "skills",
        name: "skills",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/masterData/skills/index")
      },
      {
        path: "job-categories",
        name: "job-categories",
        meta: { transitionName: "slide" },
        component: () =>
          import("../views/panel/masterData/job-categories/index")
      },
      {
        path: "departments",
        name: "departments",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/masterData/departments/index")
      },
      {
        path: "languages",
        name: "languages",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/masterData/languages/index")
      },
      {
        path: "locations",
        name: "locations",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/masterData/locations/index")
      },
      {
        path: "badges",
        name: "badges",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/masterData/badges/index")
      },
      {
        path: "delivery-time",
        name: "delivery-time",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/masterData/delivery-time/index")
      },
      {
        path: "response-time",
        name: "response-time",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/masterData/response-time/index")
      },
      {
        path: "services",
        name: "services",
        meta: { transitionName: "slide" },
        component: () => import("../views/panel/services/index")
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
