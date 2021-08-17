import * as types from "../types";

const state = {
  registrationData: {}
};
const getters = {
  [types.storeRegisterForm.REGISTER_FORM_GET]: state => {
    return state.registrationData;
  }
};

const mutations = {
  [types.storeRegisterForm.REGISTER_FORM_MUTATE]: (state, dataForm) => {
    state.registrationData = { ...state.registrationData, ...dataForm };
  }
};

const actions = {
  [types.storeRegisterForm.REGISTER_FORM_ACTION]: ({ commit }, dataForm) => {
    commit([types.storeRegisterForm.REGISTER_FORM_MUTATE], dataForm);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
