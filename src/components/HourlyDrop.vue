<template>
    <div class="medium-pot">
        <v-container>
            <v-row
                align="center"
                justify="center">
                <v-col
                    cols="12"
                    xs="5"
                    sm="5"
                    md="5">
                    <v-img :src="dropImg"></v-img>
                </v-col>
                <v-col
                    cols="12"
                    xs="7"
                    sm="7"
                    md="7">
                    <div>
                        <AnimatedAmount 
                            :value="getHourlyPot.amount-0" 
                            :currency="getHourlyPot.currency" />
                    </div>
                    <DropCounter v-if="getHourlyPot.countdown" pot="hourly" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import hourlyDrop from "../assets/hourly_drop.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
import DropCounter from '@/components/DropCounter.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            dropImg: hourlyDrop,
        }
    },
    components: {
        AnimatedAmount,
        DropCounter,
    },
    computed: {
        ...mapGetters([
            'getHourlyPot',
        ]),
    }
}
</script>

<style>
.medium-pot {
    background: url("../assets/stars.png");
}
</style>