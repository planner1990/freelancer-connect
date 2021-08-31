import * as types from "../types";

const state = {
  currentPage: {}
};
const getters = {
  [types.browseServiceData.getters.BROWSE_SERVICE_GET]: state => {
    return state.currentPage;
  }
};

const mutations = {
  [types.browseServiceData.mutations.BROWSE_SERVICE_MUTATE]: (
    state,
    payload
  ) => {
    state.currentPage = payload;
  }
};

const actions = {
  [types.browseServiceData.actions.BROWSE_SERVICE_ACTION]: (
    { commit },
    payload
  ) => {
    commit(types.browseServiceData.mutations.BROWSE_SERVICE_MUTATE, payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
