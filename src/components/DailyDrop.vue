<template>
    <div class="dailyDrop">
        <v-img :src="dailyDropPic"></v-img>
        <v-img 
            :src="box"
            class="box-image">
            <AnimatedAmount 
                :value="getDailyPot.amount-0" 
                :currency="getDailyPot.currency" />
		</v-img>
        <div class="sheet">
            <div 
            class="dailyDropCounterContainer">
            <p 
                class="dailyDropCounter"
                ref="dailyDropCounter">
                Must drop in: 🕒 {{getDailyPotCountDown.hoursRemaining}}:{{getDailyPotCountDown.minutesRemaining}}:{{getDailyPotCountDown.secondsRemaining}}
            </p>
            </div>
        </div>
        <div class="transparentDailyRectangle"></div>
    </div>
</template>

<script>
import dailyDropPic from "../assets/daily_drop.png"
import box from "../assets/box.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
// import TransparentComponent from '@/components/TransparentComponent.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            dailyDropPic: dailyDropPic,
            box: box,
        }
    },
    components: {
		AnimatedAmount,
    },
    computed: {
        ...mapGetters([
            "getDailyPot", 
            "getDailyPotCountDown" 
        ])
    },
}
</script>
<style>
.dailyDrop {
    position: relative;
    margin-bottom: 21px;
}
.box-image{
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
}
.sheet {
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
}
.dailyDropCounterContainer  {
    display: flex;
    justify-content: center;
    align-content: center;
}
.dailyDropCounter {
    background: black;
    border-radius: 50px;
    font-size: 0.8vw;
    padding: 0.1rem 1rem;
    /* margin: 0 auto; */
}
.transparentDailyRectangle {
    position: absolute;
    height: 35vh;
    width: 100%;
    
    background: radial-gradient(rgba(0, 0, 0, 0), rgba(33, 39, 89, 0.3));
    bottom: 0px;
    z-index: 1;
}
</style>