<template>
  <main>
    <v-row>
      <v-col cols="10">
        <h2>Peer Learing HUB</h2>
      </v-col>

      <v-col>
        <v-btn @click="showDialog = !showDialog" small dark color="black">
          <v-icon>mdi-plus</v-icon>
          Add Session
        </v-btn>
      </v-col>
    </v-row>
    <CourseCards />
    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
    <v-dialog v-model="showDialog" max-width="600">
      <v-card>
        <v-card-title>
          Event Details
          <v-spacer></v-spacer>
          <v-btn icon @click="showDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="formData.name"
                    label="Event Name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="formData.subCode"
                    label="Subject Code"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="formData.location"
                    label="Location"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    v-model="formData.description"
                    label="Description"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row> </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="formData.Date"
                    label="Date"
                    type="date"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="formData.Time"
                    label="Time"
                    type="time"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn dark color="black">Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      showDialog: false,
      formData: {
        id: 9,
        name: "",
        subCode: "",
        description: "",
        location: "",
        Date: "",
        Time: "",
      },
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
