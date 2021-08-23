import * as types from "../types";

const state = {
  currentPage: {}
};
const getters = {
  [types.paginationData.getters.PAGINATION_GET]: state => {
    return state.currentPage;
  }
};

const mutations = {
  [types.paginationData.mutations.PAGINATION_MUTATE]: (state, payload) => {
    state.currentPage = payload;
  }
};

const actions = {
  [types.paginationData.actions.PAGINATION_ACTION]: ({ commit }, payload) => {
    commit(types.paginationData.mutations.PAGINATION_MUTATE, payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
