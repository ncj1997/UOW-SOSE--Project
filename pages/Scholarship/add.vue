<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-icon left>mdi-seal</v-icon>
        Add Scholarship Details
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitForm">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                dense
                v-model="formData.name"
                label="Scholarship Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                outlined
                dense
                v-model="formData.category"
                :items="broadStudyAreas"
                label="Category"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-textarea
            outlined
            dense
            v-model="formData.description"
            label="Description"
            required
          ></v-textarea>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                dense
                v-model="formData.openFrom"
                label="Open From"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                dense
                v-model="formData.openTo"
                label="Open To"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                dense
                v-model="formData.value"
                label="Value"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                dense
                v-model="formData.duration"
                label="Duration"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                outlined
                dense
                v-model="formData.levelOfEnrolment"
                :items="['Any', 'Honours']"
                label="Level of Enrolment"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                outlined
                dense
                v-model="formData.graduateType"
                :items="graduateTypes"
                label="Graduate Type"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                dense
                v-model="formData.numberAvailable"
                label="Number Available"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                outlined
                dense
                v-model="formData.yearOfScholarship"
                :items="years"
                label="Year of Scholarship"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-text-field
            outlined
            dense
            v-model="formData.degree"
            label="Degree"
            required
          ></v-text-field>
          <v-select
            outlined
            dense
            v-model="formData.offerType"
            :items="['Grant']"
            label="Offer Type"
            required
          ></v-select>
          <v-select
            outlined
            dense
            v-model="formData.broadStudyArea"
            :items="broadStudyAreas"
            label="Broad Study Area"
            required
          ></v-select>

          <v-sheet class="mb-2" border :elevation="2" >
            <v-subheader>Application Criteria</v-subheader>
            <div
              v-for="(criteria, index) in formData.applicationCriteria"
              :key="index"
            >
              <v-row>
                <v-col class="mx-2" cols="10">
                  <v-text-field
                  dense
                  outlined
                    v-model="formData.applicationCriteria[index]"
                    label="Criteria"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-btn @click="removeCriteria(index)" icon>
                    <v-icon color="error">mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
            <v-btn class="ma-3" small @click="addCriteria" outlined color="info"
              >Add</v-btn
            ></v-sheet
          >

          <v-btn class="mt-3" type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        category: "Any",
        description: "",
        openFrom: "",
        openTo: "",
        value: "",
        duration: "",
        levelOfEnrolment: "Any",
        graduateType: "Any",
        numberAvailable: "",
        yearOfScholarship: "Any",
        degree: "",
        offerType: "Grant",
        broadStudyArea: "Any",
        applicationCriteria: [],
      },
      years: ["2025", "2024", "2023", "2022", "2021"],
      graduateTypes: ["Undergraduate", "Postgraduate"],
      broadStudyAreas: [
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
    addCriteria() {
      this.formData.applicationCriteria.push("");
    },
    removeCriteria(index) {
      this.formData.applicationCriteria.splice(index, 1);
    },
    submitForm() {
      // Handle form submission here
      console.log(this.formData);
    },
  },
};
</script>
