<template>
    <div>
        <span>Must drop in: 🕒 </span>
        <span>{{hoursRemaining}}:{{minutesRemaining}}:{{secondsRemaining}}</span>
    </div>
</template>

<script>
export default {
data: () => {
    return {
        secondsRemaining: 59,
        minutesRemaining: 59,
        hoursRemaining: 99,
        counterSec: 0,
        counterMin: 0,
        counterHrs: 0
    }
},

props: ['timer'],

methods: {
    parseTimer() {
        this.secondsRemaining = this.timer.split(':')[2]
        this.minutesRemaining = this.timer.split(':')[1]
        this.hoursRemaining = this.timer.split(':')[0]
    },

    decrementSeconds() {
        --this.secondsRemaining
    },

    decrementMinutes() {
        --this.minutesRemaining
        this.secondsRemaining = 59
    },

    decrementHours() {
        --this.hoursRemaining
        this.minutesRemaining = 59
        this.secondsRemaining = 59
    },

    countdown() {
        if(this.secondsRemaining > 0) {
            console.log('countdown')
            this.decrementSeconds()
        } else {
            if(this.minutesRemaining > 0) {
                this.decrementMinutes()
            } else {
                if(this.hoursRemaining > 0) {
                    this.decrementHours()
                } else {
                    alert("FINISHED")
                }
            }
            
        }
    }
},

created() {

    this.parseTimer()
    setInterval(this.countdown, 1000)
}
}
</script>