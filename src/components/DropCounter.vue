<template>
    <div class="dropCounterContainer">
        <div  
            class="dropCounter"
            v-resize-text="{ratio:1.9, minFontSize: '1px'}">
            Must drop in: 🕒 {{cd.hoursRemaining}}:{{cd.minutesRemaining}}:{{cd.secondsRemaining}}
        </div >
    </div>
</template>

<script>
import ResizeText from 'vue-resize-text'

import { mapGetters } from 'vuex'

export default {

props: ['drop'],

directives: {
    ResizeText
},

computed: {
    ...mapGetters(['getDailyPotCountDown', 'getSuperPotCountDown', 'getHourlyPotCountDown']),
    cd() {
        switch (this.drop) {
            case 'daily' : return this.getDailyPotCountDown
            case 'super' : return this.getSuperPotCountDown
            case 'hourly' : return this.getHourlyPotCountDown
            default : return null
        }
    }
},

}
</script>

<style>
.dropCounterContainer  {
    /* display: flex;
    justify-content: center;
    align-content: center;
    z-index: 2; */
}
.dropCounter {
    background: black;
    border-radius: 50px;
    padding: 0.1rem 1rem;
    /* margin: 0 auto; */
    /* font-size: 25px; */
    /* max-height: 1em; */
}
</style>