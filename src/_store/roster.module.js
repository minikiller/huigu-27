const state = {
  rosters: [],
  roster_bak: [],
};

const actions = {};
const getters = {
  getRosters(state) {
    return state.rosters;
  },
};
const mutations = {
  updateRosters(state, rosters) {
    state.rosters = rosters;
    state.roster_bak = rosters;
  },
  filterRosters(state, searchText) {
    if (searchText == "") {
      state.rosters = state.roster_bak;
      return;
    }
    var values;
    if (!isNaN(searchText)) {
      values = state.roster_bak.filter((val) => {
        return val.code.indexOf(searchText) > 0;
      });
    } else {
      values = state.roster_bak.filter((val) => {
        return val.name.toLowerCase().includes(searchText.toLowerCase());
      });
    }

    state.rosters = values;
  },
};

export const roster = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
