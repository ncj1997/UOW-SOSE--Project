<template>
    <main>
      <v-row>
        <v-col cols ='10'>
          <h2>Peer Learing HUB</h2>
        </v-col>

        <v-col>
         <v-btn
          
          small
          dark
          color="black"
         >
          <v-icon>mdi-plus</v-icon>
          Add Session 
         </v-btn>
        </v-col>
      </v-row>
      <CourseCards/>
      <div class="tasks">
        <Task
          v-for="(task, i) in $store.state.tasks"
          :key="i"
          :task="task" />
      </div>
  
    </main>
  </template>
  
  <script>
  export default {
    data (){
      return {
        newTask: ''
      }
    },
    methods: {
      addTask () {
        if (this.newTask) {
          this.$store.commit('ADD_TASK', this.newTask);
          this.newTask = '';
        }
      }
    }
  }
  </script>
  