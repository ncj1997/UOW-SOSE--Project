<template>
  <v-card  class="mx-auto" height="320" min-width="320" max-width="344">
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

    <v-card-title>
      {{ cardData.name }}
    </v-card-title>

    <v-card-subtitle>
      <v-list>
        {{ cardData.subname }}
        <br />
        {{ cardData.location }}
      </v-list>
    </v-card-subtitle>
    <v-row>
      <v-col>
        <v-chip dark class="ma-2" color="black">
          <v-icon color="white">mdi-clock</v-icon>
          <span class="mx-1">{{ cardData.Time }}</span>
        </v-chip>
      </v-col>
      <v-col>
        <v-chip dark class="ma-2" color="black text-white">
          <v-icon color="white">mdi-calendar-end-outline</v-icon>
          <span class="mx-1">{{ cardData.Date }}</span>
        </v-chip>
      </v-col>
      <v-col>
        <v-chip class="ma-2" color="black">
          <v-avatar left class="white"> {{ cardData.numberPeer }} </v-avatar>
          <v-icon color="white">mdi-account-multiple</v-icon>
        </v-chip>
      </v-col>
    </v-row>

    <v-card-actions>
      <v-btn outlined dark color="black">
        <v-icon class="mx-2">mdi-thumb-up</v-icon>
        Intrested
      </v-btn>
      <!-- <v-btn color="orange lighten-2" text>
                Intrested
            </v-btn> -->

      <v-spacer></v-spacer>

      <!-- <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn> -->

      <v-tooltip class="mr-2" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="warn" class="mr-2" v-bind="attrs" v-on="on"
            >mdi-information-box</v-icon
          >
        </template>
        <span>{{ cardData.description }}</span>
      </v-tooltip>
    </v-card-actions>

    <!-- <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ cardData.description }}
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
</template>

<script>
export default {
  props: {
    cardData: Object, // Define the prop and its type
  },
  data: () => ({
    show: false,
  }),
};
</script>
