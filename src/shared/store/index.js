import Vue from "vue";
import Vuex from "vuex";

import navigationDrawer from "./modules/navigationDrawer";
import formDialogData from "./modules/formDialogData";
import navigationDrawerFront from "./modules/navigationDrawerFront";
import registrationForm from "./modules/registrationForm";
import paginationData from "./modules/paginationData";
import browseServiceData from "./modules/browseServiceData";
import guideEmployerToLogin from "./modules/guideEmployertoLogin";
import browseProjectData from "./modules/browseProjectData";
import avatarManagement from "./modules/avatarManagement";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigationDrawer,
    navigationDrawerFront,
    formDialogData,
    registrationForm,
    paginationData,
    browseServiceData,
    guideEmployerToLogin,
    browseProjectData,
    avatarManagement
  }
});
