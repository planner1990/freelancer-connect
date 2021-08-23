import Vue from "vue";
import Vuex from "vuex";

import navigationDrawer from "./modules/navigationDrawer";
import formDialogData from "./modules/formDialogData";
import navigationDrawerFront from "./modules/navigationDrawerFront";
import registrationForm from "./modules/registrationForm";
import paginationData from "./modules/paginationData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigationDrawer,
    navigationDrawerFront,
    formDialogData,
    registrationForm,
    paginationData
  }
});
