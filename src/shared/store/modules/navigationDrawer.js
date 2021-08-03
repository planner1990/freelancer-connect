import * as types from "../types";
const state = {
  drawer: true
};
const getters = {
  [types.GET_DRAWER]: state => {
    return state.drawer;
  }
};

const mutations = {
  [types.MUTATE_DRAWER]: state => {
    state.drawer = !state.drawer;
  }
};

const actions = {
  [types.ACTION_DRAWER]: ({ commit }) => {
    commit(types.MUTATE_DRAWER);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
