import * as types from "../types";

const state = {
  currentPage: {}
};
const getters = {
  [types.avatarManagement.getters.AVATAR_MANAGEMENT_GET]: state => {
    return state.currentPage;
  }
};

const mutations = {
  [types.avatarManagement.mutations.AVATAR_MANAGEMENT_MUTATE]: (
    state,
    payload
  ) => {
    state.currentPage = payload;
  }
};

const actions = {
  [types.avatarManagement.actions.AVATAR_MANAGEMENT_ACTION]: (
    { commit },
    payload
  ) => {
    commit(types.avatarManagement.mutations.AVATAR_MANAGEMENT_MUTATE, payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
