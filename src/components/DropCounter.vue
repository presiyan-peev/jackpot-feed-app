<template>
      <div  
          class="dropCounter"
          v-resize-text="{ratio:1.9, minFontSize: '1px'}">
          Must drop in: 🕒 {{cd.hoursRemaining}}:{{cd.minutesRemaining}}:{{cd.secondsRemaining}}
      </div >
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
.dropCounter {
    background: black;
    border-radius: 50px;
    padding: 0.1rem 1rem;
}
</style>