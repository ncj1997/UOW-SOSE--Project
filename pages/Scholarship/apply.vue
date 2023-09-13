<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">Scholarship Application Form</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <!-- Basic Applicant Details -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="applicant.firstName"
                label="First Name"
                required
                :rules="[(v) => !!v || 'This Field is Required!']"
                dense
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="applicant.lastName"
                label="Last Name"
                :rules="[(v) => !!v || 'This Field is Required!']"
                required
                dense
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="applicant.email"
                label="Email"
                :rules="[(v) => !!v || 'This Field is Required!']"
                required
                dense
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- CV Upload Section -->
          <v-row>
            <v-col cols="6">
              <v-file-input
                v-model="applicant.cvFile"
                :label="applicant.cvFile ? 'CV File Selected' : 'Upload CV'"
                accept=".pdf,.doc,.docx"
                :rules="[(v) => !!v || 'This Field is Required!']"
                required
                dense
                outlined
              ></v-file-input>
            </v-col>
            <v-col cols="6">
              <v-file-input
                v-model="applicant.recommendationLetterFile"
                :label="
                  applicant.recommendationLetterFile
                    ? 'Recommendation Letter Selected'
                    : 'Upload Recommendation Letter'
                "
                accept=".pdf,.doc"
                required
                :rules="[(v) => !!v || 'This Field is Required!']"
                dense
                outlined
              ></v-file-input>
            </v-col>
          </v-row>

          <!-- Additional Information -->
          <v-row>
            <v-col cols="12">
              <v-textarea
                v-model="applicant.additionalInfo"
                label="Additional Information"
                dense
                :rules="[(v) => !!v || 'This Field is Required!']"
                outlined
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Submit Button -->
          <v-row>
            <v-col cols="12">
              <v-btn @click="submitApplication" color="primary">Submit</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<!-- ... rest of the script -->
<script>
export default {
  data() {
    return {
      valid: false,
      applicant: {
        firstName: "",
        lastName: "",
        email: "",
        cvFile: null,
        recommendationLetterFile: null,
        additionalInfo: "",
      },
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) alert("Form is valid");
    },
    submitApplication() {
      this.validate();
    },
  },
};
</script>
