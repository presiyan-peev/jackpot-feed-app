<template>
    <div>
        <span>Must drop in: 🕒 </span>
        <span>{{getDailyPotCountDown.hoursRemaining}}:{{getDailyPotCountDown.minutesRemaining}}:{{getDailyPotCountDown.secondsRemaining}}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
data: () => {
    return {

    }
},

props: ['pot'],

computed: {
    ...mapGetters(['getDailyPotCountDown'])
},

methods: {
    
},

created() {

}
}
</script>