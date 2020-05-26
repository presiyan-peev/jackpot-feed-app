<template>
  <div class="medium-pot">
    <TransparentComponent :stars="true">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" xs="5" sm="5" md="5">
            <v-img :src="dropImg"></v-img>
          </v-col>
          <v-col cols="12" xs="7" sm="7" md="7">
            <div>
              <AnimatedAmount :value="getSuperPot.amount-0" :currency="getSuperPot.currency" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </TransparentComponent>
  </div>
</template>

<script>
import superDrop from "../assets/super_drop.png";

import AnimatedAmount from "@/components/AnimatedAmount.vue";
import TransparentComponent from "@/components/TransparentComponent.vue";

import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      dropImg: superDrop
    };
  },
  components: {
    AnimatedAmount,
    TransparentComponent
  },
  computed: {
    ...mapGetters(["getSuperPot"])
  }
};
</script>

<style>
</style>