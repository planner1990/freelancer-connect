import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vueTour from "./plugins/vue-tour";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vueTour,
  render: h => h(App)
}).$mount("#app");
