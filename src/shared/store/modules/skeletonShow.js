import * as types from "../types";
const state = {
  show: true
};
const getters = {
  [types.skeletonShow.getters.SKELETON_GET]: state => {
    return state.show;
  }
};

const mutations = {
  [types.skeletonShow.mutations.SKELETON_MUTATE]: state => {
    state.drawer = !state.show;
  }
};

const actions = {
  [types.skeletonShow.actions.SKELETON_ACTION]: ({ commit }) => {
    commit(types.skeletonShow.mutations.SKELETON_MUTATE);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
