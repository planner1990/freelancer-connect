import Vue from "vue";
import Vuex from "vuex";

import navigationDrawer from "./modules/navigationDrawer";
import formDialogData from "./modules/formDialogData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigationDrawer,
    formDialogData
  }
});
