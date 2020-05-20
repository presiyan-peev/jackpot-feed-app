<template>
  <div class="home">
    home
    {{ bigDrop }}
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

export default {
  data: () => {
    return {
      bigDrop: null,
      mediumDrops: [],
    }
  },
  name: 'Home',
  components: {
    BigPot,
    MediumPot
  },
  mounted () {
    axios
      .get('http://localhost:3000/pots')
      .then(response => {
        for(const drop of response.data) {
          if(drop.type==="big") {
            this.bigDrop = drop 
          } else {
            this.mediumDrops.push(drop)
          }
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
}

</script>
