import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./shared/store";
import vuetify from "./plugins/vuetify";
import vueTour from "./plugins/vue-tour";
import "@mdi/font/css/materialdesignicons.css";
import i18n from "./i18n";
import "./assets/styles/styles.scss";
import "./assets/styles/overrides.scss";
import "./shared/filters/index";
import dayjs from "dayjs";
dayjs.locale("fa");
Vue.config.productionTip = false;
Vue.filter("readMore", function(text, length, suffix = " ") {
  return text ? text.substring(0, length) + suffix : "";
});
Vue.filter("changeDate", function(date) {
  return dayjs(date)
    .locale("fa")
    .format("YYYY-MM-DD");
});
new Vue({
  router,
  store,
  vuetify,
  vueTour,
  i18n,
  render: h => h(App)
}).$mount("#app");
