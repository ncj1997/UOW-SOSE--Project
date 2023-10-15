<template>
  <div>
    <v-card color="#F5F5F5" class="my-4" v-for="scholarship in scholarshipList">
      <!-- Card Content -->
      <v-card-title>
        {{ scholarship.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ scholarship.category }}
      </v-card-subtitle>
      <v-card-text>
        {{ scholarship.description }}
      </v-card-text>

      <!-- Expansion Panel -->
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Scholarship Details
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- Scholarship Details -->
            <v-row v-for="(detail, value) in scholarshipDetails" :key="value">
              <v-col cols="6">{{ detail }}:</v-col>
              <v-col cols="6">{{ scholarship[value] }}</v-col>
            </v-row>

            <!-- Application Criteria -->
            <v-subheader>Application Criteria</v-subheader>
            <v-row>
              <v-col cols="12">
                <ul>
                  <li v-for="criterion in scholarship.applicationCriteria">
                    {{ criterion }}
                  </li>
                </ul>
              </v-col>
            </v-row>
            <v-row justify="center" align="center" class="mb-2">
              <v-btn
                :to="'scholarship/apply/' + scholarship._id"
                color="primary"
                dark
                rounded
              >
                <v-icon left> mdi-bookmark-check </v-icon>
                Apply for Scholarship
              </v-btn>

              <v-btn
              class="ml-3"
                @click="deleteSchol(scholarship)"
                color="error"
                dark
                rounded
              >
                <v-icon left>mdi-delete </v-icon>
                Delete Scholarship
              </v-btn>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    scholarshipList: Array, // Define the prop and its type
  },
  data() {
    return {
      scholarshipDetails: {
        openFrom: "Open from",
        openTo: "Open to",
        value: "Value",
        duration: "Duration",
        levelOfEnrolment: "Level of Enrolment",
        graduateType: "Graduate Type",
        numberAvailable: "Number Available",
        yearOfScholarship: "Year of Scholarship",
        degree: "Degree",
        offerType: "Offer Type",
        broadStudyArea: "Broad Study Area",
      },
    };
  },
  methods: {
    async deleteSchol(scol) {
      await this.$store.dispatch("scholarships/deleteScolarship", scol);
    },
  },
};
</script>
