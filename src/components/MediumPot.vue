<template>
    <div class="medium-pot">
        <v-container>
            <v-row>
                <v-col>
                    <v-img :src="dropImg"></v-img>
                </v-col>
                <v-col>
                    <p class="prize">{{prize}}</p>
                    <DropCounter v-if="countdown" :pot="pot"  />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import hourlyDrop from "../assets/hourly_drop.png"
import superDrop from "../assets/super_drop.png"

import DropCounter from '@/components/DropCounter.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
        //    dropImg: null,
            prize: null,
            countdown: null,
        //    pot: '',
        }
    },
    components: {
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
        /* amount() {
            return this.isHourlyDrop ? (this.getHourlyPot.currency + this.getHourlyPot.amount) : (this.getSuperPot.currency + this.getSuperPot.amount)
        },

        // TODO replace false with 'getSuperPotCountDown' and do the necessary changes in the store
        countdown() {
            return this.isHourlyDrop ? 'getHourlyPotCountDown' : false      
        } */
    },
    watch: {
        getSuperPot(newValue) {
            if(!this.isHourlyDrop){
                //this.dropImg = superDrop
                this.prize = newValue.currency + newValue.amount
                this.countdown = newValue.countdown
                //this.pot = 'super'
            }
        },
        getHourlyPot(newValue) {
            if(this.isHourlyDrop){
                //this.dropImg = hourlyDrop
                this.prize = newValue.currency + newValue.amount
                this.countdown = newValue.countdown
                //this.pot = 'hourly'
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