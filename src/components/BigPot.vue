<template>
    <div>
        <v-img :src="dailyDropPic"></v-img>
        <v-img :src="box">{{getDailyPot.currency}}{{getDailyPot.amount}}</v-img>
        <v-sheet tile class="sheet">
            <DropCounter :timer="getDailyPot.must_drop_in" />
        </v-sheet>
    </div>
</template>

<script>
import dailyDropPic from "../assets/daily_drop.png"
import box from "../assets/box.png"

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
    opacity: 0.1;
    height: 50px;
}
</style>