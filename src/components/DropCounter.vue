<template>
    <div>
        <span>Must drop in: 🕒 </span>
        <span>{{cd.hoursRemaining}}:{{cd.minutesRemaining}}:{{cd.secondsRemaining}}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
data: () => {
    return {
        hoursRemaining: '',
        minutesRemaining: '',
        secondsRemaining: '',
    }
},

props: ['pot'],

computed: {
    ...mapGetters(['getDailyPotCountDown', 'getSuperPotCountDown', 'getHourlyPotCountDown']),
    cd() {
        switch (this.pot) {
            case 'daily' : return this.getDailyPotCountDown
            case 'super' : return this.getSuperPotCountDown
            case 'hourly' : return this.getHourlyPotCountDown
            default : return null
        }
    }
},
}
</script>