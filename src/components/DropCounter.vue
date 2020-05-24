<template>
    <div class="drop-counter-container">

        <p 
            class="drop-counter">
            Must drop in: 🕒 {{cd.hoursRemaining}}:{{cd.minutesRemaining}}:{{cd.secondsRemaining}}
        </p>

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

<style>
.drop-counter-container  {
    display: flex;
  justify-content: center;
}
.drop-counter {
    background: black;
    border-radius: 50px;
    padding: 0.1rem 1rem;
    margin: 0 auto;
}
</style>