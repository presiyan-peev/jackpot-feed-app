<template>
    <div class="medium-pot">
        <TransparentComponent>
        <v-container>
            <v-row
                align="center"
                justify="center">
                <v-col
                    cols="5">
                    <v-img 
                        :src="dropImg"
                        contain
                        ></v-img>
                </v-col>
                <v-col
                    cols="7">
                    <div>
                        <AnimatedAmount 
                            :value="getHourlyPot.amount-0" 
                            :currency="getHourlyPot.currency" />
                    </div>
                    <div class="hourlyDropCounterContainer">
                        <DropCounter drop="hourly" />
                    </div>
                </v-col>
            </v-row>
        </v-container>
        </TransparentComponent>
    </div>
</template>

<script>
import hourlyDrop from "../assets/hourly_drop.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
import DropCounter from '@/components/DropCounter.vue'
import TransparentComponent from '@/components/TransparentComponent.vue'

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
        TransparentComponent,
    },
    computed: {
        ...mapGetters([
            'getHourlyPot',
            'getHourlyPotCountDown'
        ]),
    },
}
</script>

<style>
.hourlyDropCounterContainer  {
    display: flex;
    justify-content: center;
}
.hourlyDropCounter {
    background: black;
    border-radius: 50px;
    font-size: 0.6vw;
    padding: 0.1rem 1rem;
    margin: 0 auto;
}
</style>