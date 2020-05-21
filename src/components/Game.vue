<template>
  <div class="game">
    game
    {{ getHourlyPot }}
    <BigPot />
    <MediumPot />
    <MediumPot />
  </div>
</template>

<script>
// @ is an alias to /src
import BigPot from '@/components/BigPot.vue'
import MediumPot from '@/components/MediumPot.vue'

import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      
    }
  },
  name: 'Game',
  components: {
    BigPot,
    MediumPot
  },
  computed: {
    ...mapGetters([
      "getdailyPot",
      "getSuperPot",
      "getHourlyPot"
    ])
  },
  methods: {
    ...mapActions([
      'setdailyPot',
      'setSuperPot',
      'setHourlyPot'
    ])
  },
  mounted () {
    axios
      .get('http://localhost:3000/pots')
      .then(response => {
        for(const drop of response.data) {
          switch(drop.imageType) {
            case 'daily_drop':
              this.setdailyPot(drop) 
              break
            case 'super_drop':
              this.setSuperPot(drop)
              break
            case 'hourly_drop':
              this.setHourlyPot(drop)
              break
            default:
              console.err("something bad was returned")
          }
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
}

</script>
