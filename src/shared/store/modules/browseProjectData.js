import * as types from "../types";

const state = {
  currentPage: {}
};
const getters = {
  [types.BrowseProjectData.getters.BROWSE_PROJECT_GET]: state => {
    return state.currentPage;
  }
};

const mutations = {
  [types.BrowseProjectData.mutations.BROWSE_PROJECT_MUTATE]: (
    state,
    payload
  ) => {
    state.currentPage = payload;
  }
};

const actions = {
  [types.BrowseProjectData.actions.BROWSE_PROJECT_ACTION]: (
    { commit },
    payload
  ) => {
    commit(types.BrowseProjectData.mutations.BROWSE_PROJECT_MUTATE, payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
