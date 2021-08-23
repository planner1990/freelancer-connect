import Vue from "vue";
import Vuetify from "vuetify/lib";
import fa from "vuetify/es5/locale/fa";
// import CustomIcons from "../utiles/customIcons";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  icons: {
    // values: CustomIcons
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        white: "#FFFFFF",
        lightest: "#FAFBFF",
        lighter: "#F3F5F9",
        primary: "#59c1b8",
        primary_light: "#5e15ef",
        secondary: "#0a607a",
        secondary_light: "#43e8e0",
        black: "#000022",
        darker: "#768391",
        darkest: "#56606B",
        error: "#ec484a",
        info: "#3889d0",
        success: "#00b947",
        warning: "#eb8149"
      }
    }
  },
  lang: {
    locales: { fa },
    current: "fa"
  }
});
