<template>
      <p  
          class="dropCounter"
          v-resize-text="{ratio:1.9, minFontSize: '1px'}">
          Must drop in: 🕒 <span class="timeRemaining">{{cd.hoursRemaining}}:{{cd.minutesRemaining}}:{{cd.secondsRemaining}}</span> 
      </p >
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
    padding: 0.1em 1em;
}
.timeRemaining {
    color: wheat;
}
</style>