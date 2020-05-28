<template>
  <div class="medium-pot">
    <TransparentComponent>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="5">
            <v-img 
              :src="dropImg"
              contain></v-img>
          </v-col>
          <v-col cols="7">
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