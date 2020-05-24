<template>
    <div class="medium-pot">
        <v-img :src="box">
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
                            :value="getSuperPot.amount-0" 
                            :currency="getSuperPot.currency" />
                    </div>
                    <DropCounter v-if="getSuperPot.countdown" pot="super" />
                </v-col>
            </v-row>
        </v-container>
        </v-img>
    </div>
</template>

<script>
import superDrop from "../assets/super_drop.png"
import box from "../assets/stars.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
import DropCounter from '@/components/DropCounter.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            box: box,
            dropImg: superDrop,
        }
    },
    components: {
        AnimatedAmount,
        DropCounter,
    },
    computed: {
        ...mapGetters([
            'getSuperPot',
        ]),
    }
}
</script>

<style>
/* .medium-pot {
    background: url("../assets/stars.png");
} */
</style>