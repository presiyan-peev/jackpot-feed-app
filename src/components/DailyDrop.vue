<template>
    <div>
        <v-img :src="dailyDropPic"></v-img>
        <v-img 
            :src="box"
            class="box-image">
            <AnimatedAmount 
                :value="getDailyPot.amount-0" 
                :currency="getDailyPot.currency" />
		</v-img>
        <v-sheet tile dark class="sheet">
            <DropCounter pot="daily" />
        </v-sheet>
    </div>
</template>

<script>
import dailyDropPic from "../assets/daily_drop.png"
import box from "../assets/box.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
import DropCounter from '@/components/DropCounter.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            dailyDropPic: dailyDropPic,
            box: box
        }
    },
    components: {
		AnimatedAmount,
        DropCounter,
    },
    computed: {
        ...mapGetters([
            "getDailyPot",  
        ])
    }
}
</script>
<style>
.sheet{
    height: 50px;
}
.box-image{
    display: flex;
    align-items: center;
}
</style>