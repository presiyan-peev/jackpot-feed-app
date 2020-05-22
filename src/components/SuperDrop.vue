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
                            :value="getSuperPot.amount-0" 
                            :currency="getSuperPot.currency" />
                    </div>
                    <DropCounter v-if="getSuperPot.countdown" pot="super" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import superDrop from "../assets/super_drop.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
import DropCounter from '@/components/DropCounter.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
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
.medium-pot {
    background: url("../assets/stars.png");
}
</style>