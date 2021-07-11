import Vue from "vue";
import Vuex from "vuex";

import navigationDrawer from "./modules/navigationDrawer";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigationDrawer
  }
});
