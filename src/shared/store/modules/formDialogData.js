import * as types from "../types";
const state = {
  newFormData: {},
  listOfFormData: []
};
const getters = {
  [types.dialogForm.FORM_GET]: state => {
    return state.newFormData;
  },
  [types.dialogForm.FORM_LIST_GET]: state => {
    return state.listOfFormData;
  }
};

const mutations = {
  // [types.dialogForm.FORM_MUTATE]: (state, dataForm) => {
  //   state.newFormData = dataForm;
  // },
  [types.dialogForm.FORM_LIST_MUTATE]: (state, dataForm) => {
    state.listOfFormData.push(dataForm);
  }
};

const actions = {
  [types.dialogForm.FORM_ACTION]: ({ commit }, dataForm) => {
    commit([types.dialogForm.FORM_MUTATE], dataForm);
  }
  // [types.dialogForm.FORM_ACTION]: ({ commit }, dataForm) => {
  //   commit(state.listOfFormData.push(dataForm));
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
