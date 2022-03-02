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
import "./plugins/eChart";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  vueTour,
  i18n,
  render: h => h(App)
}).$mount("#app");
