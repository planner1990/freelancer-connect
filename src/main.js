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
import "./assets/styles/chat-room-ticket.scss";
import "./shared/filters/index";
import "./plugins/eChart";
import "./plugins/vueCalendar";
import "./plugins/vueCalendar2";
import Vuetify from "vuetify";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import myUpload from "vue-image-crop-upload/upload-2.vue";
Vue.component("myUpload", myUpload);
Vue.component("date-picker", VuePersianDatetimePicker);
Vue.component("date-picker-second", VuePersianDatetimePicker);
Vue.use(Vuetify);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  vueTour,
  i18n,
  render: h => h(App)
}).$mount("#app");
