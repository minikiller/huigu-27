const state = {
  type: null,
  message: null,
  showSpinner: false,
};

const getters = {
  getSpinner(state) {
    return state.showSpinner;
  },
};

const actions = {
  success({ commit }, message) {
    commit("success", message);
  },
  error({ commit }, message) {
    commit("error", message);
  },
  clear({ commit }) {
    commit("clear");
  },
};

const mutations = {
  success(state, message) {
    state.type = "alert-success";
    state.message = message;
  },
  error(state, message) {
    state.type = "alert-danger";
    state.message = message;
  },
  clear(state) {
    state.type = null;
    state.message = null;
  },
  SET_SPINNER(state, spinner) {
    state.showSpinner = spinner;
  },
};

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
