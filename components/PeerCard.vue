<template>
  <v-hover v-slot="{ hover }">
    <v-card
      rounded
      :elevation="hover ? 14 : 2"
      class=""
      max-height="450"
      min-width="330"
      max-width="344"
    >
      <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

      <v-card-title>
        {{ cardData.name }}
      </v-card-title>

      <v-card-subtitle>
        <v-list>
          {{ cardData.subname }}
          <!-- <br />
        {{ cardData.location }} -->
        </v-list>
      </v-card-subtitle>
      <!-- <v-row>
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
    </v-row> -->
      <v-list disabled dense>
        <!-- <v-subheader>REPORTS</v-subheader> -->
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="item.text == 'numberPeer'"
                >{{
                  cardData[item.text].length
                }}
                Participants</v-list-item-title
              >
              <v-list-item-title
                v-else
                v-text="cardData[item.text]"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- Expansion Panel -->
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> Session Details </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text>
              {{ cardData.description }}
            </v-card-text>
            <v-row justify="center" align="center" class="mb-2">
              <v-btn
                v-if="!checkForList(cardData['numberPeer'])"
                color="primary"
                dark
                @click="makeInt(cardData)"
                rounded
              >
                <v-icon left> mdi-check-outline </v-icon>
                I am Intrested
              </v-btn>
              <v-chip v-else dark color="green" text-color="white">
                <v-avatar class="mr-3">
                  <v-icon>mdi-check-circle-outline</v-icon>
                </v-avatar>
                Enrolled
              </v-chip>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <!-- <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ cardData.description }}
        </v-card-text>
        <v-btn outlined dark color="black">
          <v-icon class="mx-2">mdi-thumb-up</v-icon>
          Intrested
        </v-btn>
      </div>
    </v-expand-transition> -->
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    cardData: Object, // Define the prop and its type
  },
  data: () => ({
    show: false,
    items: [
      { text: "Time", icon: "mdi-clock" },
      { text: "Date", icon: "mdi-calendar-today-outline" },
      { text: "location", icon: "mdi-map-marker-circle" },
      { text: "numberPeer", icon: "mdi-account-group-outline" },
    ],
  }),
  methods: {
    async makeInt(cardData) {
      await this.$store.dispatch("peer-learning/makeIntrest", cardData);
    },
    checkForList(List) {
      const usid = this.$store.getters["user/getUID"];
      return List.includes(usid);
    },
  },
};
</script>
