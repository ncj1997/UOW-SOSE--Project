export const state = () => ({
  sessions: [],
});

export const getters = {
  getSessionsList: (state) => {
    return state.sessions;
  },
};

export const mutations = {
  SET_DATA(state, data) {
    state.sessions = data;
  },
};

export const actions = {
  loadData({ commit }) {
    // Load data from the JSON file in the static folder
    const jsonData = require("~/static/peerSessions");
    commit("SET_DATA", jsonData);
  },
  addSession({}, data) {
    console.log("Data Received for Session add", data);
    return 'Sucessfully Added Data'
  },
};
