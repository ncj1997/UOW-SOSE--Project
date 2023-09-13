<template>
  <div>
    <v-card class="mb-3">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Postal Service for University</h3>
        </div>
      </v-card-title>
    </v-card>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div>Parcel mail cost calculator</div>
        </div>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="calculatePrice">
          <v-row>
            <v-col cols="3">
              <v-text-field
                outlined
                dense
                v-model="length"
                label="Length (cm)"
                type="number"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                outlined
                dense
                v-model="width"
                label="Width (cm)"
                type="number"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                outlined
                dense
                v-model="height"
                label="Height (cm)"
                type="number"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                outlined
                dense
                v-model="weight"
                label="Weight (in grams)"
                type="number"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-select
                outlined
                dense
                v-model="destination"
                :items="states"
                label="Destination"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-row class="mt-1">
                <v-btn outlined @click="calculatePrice" color="primary"
                  >Calculate</v-btn
                >
                <v-btn color="error" outlined class="mx-4" @click="reset">
                  Reset Form
                </v-btn>
              </v-row>
            </v-col>
            <v-col>
              <v-card color="#E1F5FE" v-if="price" class="mb-2">
                <v-card-text>
                  <div class="d-flex justify-space-between">
                    <div><h4>Estimated Price:</h4></div>
                    <div>
                      <h4>${{ price }}</h4>
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    class="mx-auto"
                    @click="reset"
                    outlined
                    color="primary"
                  >
                    <v-icon>mdi-close</v-icon>
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: "",
      weight: null,
      length: null,
      width: null,
      height: null,
      destination: null,
      states: [
        "New South Wales",
        "Victoria",
        "Queensland",
        "South Australia",
        "Western Australia",
        "Tasmania",
        "Northern Territory",
        "Australian Capital Territory",
      ],
      price: null,
    };
  },
  methods: {
    reset() {
      this.price = "";
      this.$refs.form.reset();
    },
    calculatePrice() {
      // Add your logic to calculate the price based on weight, length, width, height, and destination.
      // This is a simplified example; you can replace it with your actual pricing logic.
      if (
        this.weight &&
        this.length &&
        this.width &&
        this.height &&
        this.destination
      ) {
        // Replace this with your pricing logic that considers weight and dimensions.
        // You can set different prices based on weight, size, and destination.
        // You can use a switch or if-else statements to determine the price.
        switch (this.destination) {
          case "New South Wales":
            this.price =
              this.weight * 0.1 + this.length * this.width * this.height * 0.01;
            break;
          // Add cases for other states and pricing rules.
          default:
            this.price = 0; // Default price if destination is not recognized.
        }
      } else {
        this.price = null;
      }
    },
  },
};
</script>
