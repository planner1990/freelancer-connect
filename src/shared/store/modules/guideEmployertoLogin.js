import * as types from "../types";

const state = {
  currentPageDate: {}
};
const getters = {
  [types.HandleEmployerToLogin.getters.HANDLE_EMPLOYER_TO_LOGIN_GET]: state => {
    return state.currentPageDate;
  }
};

const mutations = {
  [types.HandleEmployerToLogin.mutations.HANDLE_EMPLOYER_TO_LOGIN_MUTATE]: (
    state,
    payload
  ) => {
    state.currentPageDate = payload;
  }
};

const actions = {
  [types.HandleEmployerToLogin.actions.HANDLE_EMPLOYER_TO_LOGIN_ACTION]: (
    { commit },
    payload
  ) => {
    commit(
      types.HandleEmployerToLogin.mutations.HANDLE_EMPLOYER_TO_LOGIN_MUTATE,
      payload
    );
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
