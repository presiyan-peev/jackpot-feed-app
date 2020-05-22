<template>
    <div class="medium-pot">
        <v-container>
            <v-row>
                <v-col>
                    <v-img :src="dropImg"></v-img>
                </v-col>
                <v-col>
                    <div>
                        <AnimatedAmount 
                            :value="amount-0" 
                            :currency="currency" />
                    </div>
                    <DropCounter v-if="countdown" :pot="pot"  />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import hourlyDrop from "../assets/hourly_drop.png"
import superDrop from "../assets/super_drop.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
import DropCounter from '@/components/DropCounter.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            prize: null,
            countdown: null,
            currency: '',
            amount: 0
        }
    },
    components: {
        AnimatedAmount,
        DropCounter,
    },
    props: ['isHourlyDrop'],
    computed: {
        ...mapGetters([
            'getSuperPot',
            'getHourlyPot',
        ]),

        // doesn't work in the watcher, but works here 🤷
        dropImg() {
            return this.isHourlyDrop ? hourlyDrop : superDrop
        },
        pot() {
            return this.isHourlyDrop ? 'hourly' : 'super'
        },
    },
    watch: {
        getSuperPot(newValue) {
            if(!this.isHourlyDrop){
                //this.prize = newValue.currency + newValue.amount
                this.currency = newValue.currency
                this.amount = newValue.amount
                this.countdown = newValue.countdown
            }
        },
        getHourlyPot(newValue) {
            if(this.isHourlyDrop){
                //this.prize = newValue.currency + newValue.amount
                this.currency = newValue.currency
                this.amount = newValue.amount
                this.countdown = newValue.countdown
            }
        }
    }
}
</script>

<style>
.medium-pot {
    background: url("../assets/stars.png");
}
</style>