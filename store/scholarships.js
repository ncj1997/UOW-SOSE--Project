// store/scholarships.js

export const state = () => ({
  scholarships: [],
  filterCriteria: {
    yearFilter: "Any",
    gradTypeFilter: "Any",
    studyAreaFilter: "Any",
  },
});

// ... rest of the module ...

// store/scholarships.js

export const getters = {
  getFilteredScholarships: (state) => {
    const { yearFilter, gradTypeFilter, studyAreaFilter } =
      state.filterCriteria;
    return state.scholarships.filter((scholarship) => {
      // Apply your filtering logic here
      const yearMatch = scholarship.yearOfScholarship == yearFilter || yearFilter === "Any" ;
      const gradTypeMatch =
        scholarship.graduateType == gradTypeFilter || gradTypeFilter === "Any";
      const studyAreaMatch =
        scholarship.broadStudyArea == studyAreaFilter || studyAreaFilter === "Any";
      return yearMatch && gradTypeMatch && studyAreaMatch;
    });
  },
};

// store/scholarships.js

export const mutations = {
  SET_YEAR_FILTER(state, filter) {
    state.filterCriteria.yearFilter = filter;
  },
  SET_GRAD_TYPE_FILTER(state, filter) {
    state.filterCriteria.gradTypeFilter = filter;
  },
  SET_STUDY_AREA_FILTER(state, filter) {
    state.filterCriteria.studyAreaFilter = filter;
  },
  SET_DATA(state, data) {
    state.scholarships = data;
  },
};

export const actions = {
  setYearFilter({ commit }, filter) {
    commit("SET_YEAR_FILTER", filter);
  },
  setGradTypeFilter({ commit }, filter) {
    commit("SET_GRAD_TYPE_FILTER", filter);
  },
  setStudyAreaFilter({ commit }, filter) {
    commit("SET_STUDY_AREA_FILTER", filter);
  },
  loadData({ commit }) {
    // Load data from the JSON file in the static folder
    const jsonData = require("~/static/scholarshipList.json");
    commit("SET_DATA", jsonData);
  },
};
