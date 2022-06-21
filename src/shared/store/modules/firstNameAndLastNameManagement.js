import * as types from "../types";

const state = {
  currentPage: {}
};
const getters = {
  [types.firstNameAndLastNameManagement.getters.NAME_MANAGEMENT_GET]: state => {
    return state.currentPage;
  }
};

const mutations = {
  [types.firstNameAndLastNameManagement.mutations.NAME_MANAGEMENT_MUTATE]: (
    state,
    payload
  ) => {
    state.currentPage = payload;
  }
};

const actions = {
  [types.firstNameAndLastNameManagement.actions.NAME_MANAGEMENT_ACTION]: (
    { commit },
    payload
  ) => {
    commit(
      types.firstNameAndLastNameManagement.mutations.NAME_MANAGEMENT_MUTATE,
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
