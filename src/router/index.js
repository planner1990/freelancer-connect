import Vue from "vue";
import VueRouter from "vue-router";

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
      )
    // beforeEnter: (to, from, next) => {
    //   if (!store.state.auth.isAuth) next();
    //   else next("/panel");
    // }
    /*children: [
      {
        path: "dashboard",
        name: "panel-dashboard",
        meta: { transitionName: "slide" },
        component: () =>
          import(/!* webpackChunkName: "dashboard" *!/ "../views/dashboard/index")
      }
    ]*/
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
