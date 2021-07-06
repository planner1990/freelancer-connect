import Vue from "vue";
import Vuetify from "vuetify/lib";
import fa from "vuetify/es5/locale/fa";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: false,
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#9734cf",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { fa },
    current: "fa"
  }
});
