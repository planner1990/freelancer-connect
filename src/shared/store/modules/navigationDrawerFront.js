import * as types from "../types";
const state = {
  drawerFront: false
};
const getters = {
  [types.GET_DRAWER_FRONT]: state => {
    return state.drawerFront;
  }
};

// debugger;
const mutations = {
  [types.MUTATE_DRAWER_FRONT]: state => {
    state.drawerFront = !state.drawerFront;
  }
};

const actions = {
  [types.ACTION_DRAWER_FRONT]: ({ commit }) => {
    commit(types.MUTATE_DRAWER_FRONT);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
