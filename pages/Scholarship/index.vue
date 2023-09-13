<template>
  <div>
    <v-row class="my-2" justify="center" align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>Search Scholarships</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  v-model="yearFilter"
                  :items="years"
                  label="Year"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="gradTypeFilter"
                  :items="graduateTypes"
                  label="Graduate Type"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="studyAreaFilter"
                  :items="broadStudyAreas"
                  label="Broad Study Area"
                ></v-select>
              </v-col>
            </v-row>
            <!-- <v-btn @click="filteredScholarships" color="primary">Filter</v-btn> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mb-3"></v-divider>
    <ScholarshipCards :scholarshipList="scholarshipList" />
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    // Load sample data into the Vuex store when the component starts
    await store.dispatch("scholarships/loadData");
  },
  computed: {
    yearFilter: {
      get() {
        return this.$store.state.scholarships.filterCriteria.yearFilter;
      },
      set(value) {
        this.$store.dispatch("scholarships/setYearFilter", value);
      },
    },
    gradTypeFilter: {
      get() {
        return this.$store.state.scholarships.filterCriteria.gradTypeFilter;
      },
      set(value) {
        this.$store.dispatch("scholarships/setGradTypeFilter", value);
      },
    },
    studyAreaFilter: {
      get() {
        return this.$store.state.scholarships.filterCriteria.studyAreaFilter;
      },
      set(value) {
        this.$store.dispatch("scholarships/setStudyAreaFilter", value);
      },
    },
    scholarshipList() {
      return this.$store.getters["scholarships/getFilteredScholarships"];
    },
  },
  data() {
    return {
      selectedYear: null,
      selectedGraduateType: null,
      selectedBroadStudy: null,
      years: ["Any", "2023", "2022", "2021"], // Replace with your available years
      graduateTypes: ["Any", "Undergraduate", "Postgraduate"], // Replace with your graduate types
      broadStudyAreas: [
        "Any",
        "Law",
        "Engineering",
        "Science",
        "Business",
        "Health Sciences",
        "Fine Arts",
        "Social Sciences",
        "Computer Science",
        "Design",
        "Psychology",
        "Sports Management",
        "Economics",
      ],
    };
  },
  methods: {
    // filterScholarships() {
    //   // Show loading spinner
    //   this.isLoading = true;
    //   // Clone the original scholarship list to avoid modifying it directly
    //   let filteredList = [...this.scholarshipList];
    //   console.log(
    //     this.selectedBroadStudy,
    //     this.selectedGraduateType,
    //     this.selectedYear
    //   );
    //   // Filter by selected year
    //   if (this.selectedYear) {
    //     filteredList = filteredList.filter(
    //       (scholarship) => scholarship.yearOfScholarship === this.selectedYear
    //     );
    //   }
    //   // Filter by selected graduate type
    //   if (this.selectedGraduateType) {
    //     filteredList = filteredList.filter(
    //       (scholarship) =>
    //         scholarship.graduateType === this.selectedGraduateType
    //     );
    //   }
    //   // Filter by selected broad study area
    //   if (this.selectedBroadStudy) {
    //     filteredList = filteredList.filter(
    //       (scholarship) =>
    //         scholarship.broadStudyArea === this.selectedBroadStudy
    //     );
    //   }
    //   // Simulate a 2-second delay using setTimeout
    //   setTimeout(() => {
    //     // Assign the filtered list after the delay
    //     this.filteredScholarships = filteredList;
    //     // Hide loading spinner
    //     this.isLoading = false;
    //   }, 2000);
    //   console.log(filteredList);
    //   this.scholarshipList = filteredList;
    // },
  },
};
</script>
