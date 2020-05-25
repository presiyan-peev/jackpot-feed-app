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
        <v-sheet tile dark class="sheet" ref="dropCounterParent">
            <div 
            class="dailyDropCounterContainer"
            :style="containerStyle">
            <p 
                class="dailyDropCounter"
                ref="dailyDropCounter" 
                :style="textStyle">
                Must drop in: 🕒 {{getDailyPotCountDown.hoursRemaining}}:{{getDailyPotCountDown.minutesRemaining}}:{{getDailyPotCountDown.secondsRemaining}}
            </p>

        </div>
        </v-sheet>
    </div>
</template>

<script>
import dailyDropPic from "../assets/daily_drop.png"
import box from "../assets/box.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
//import DropCounter from '@/components/DropCounter.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            dailyDropPic: dailyDropPic,
            box: box,

            dropCounterParentSizes: {
                originalFontSize: '0px',
                previewWidth: '0px',
                previewVertOffset: '0px',
                isReady: false
            }
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

    methods: {
        setDropCounterParentSize() {
            this.dropCounterParentSizes.originalFontSize = '15px'
            this.dropCounterParentSizes.previewWidth = this.$refs.dropCounterParent.clientHeight
            this.dropCounterParentSizes.previewVertOffset = '2px'
            this.isReady = true
        }
    },

    mounted() {
        this.setDropCounterParentSize()
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
.dailyDropCounterContainer  {
    display: flex;
    justify-content: center;
}
.dailyDropCounter {
    background: black;
    border-radius: 50px;
    font-size: 0.8vw;
    padding: 0.1rem 1rem;
    margin: 0 auto;
}
</style>