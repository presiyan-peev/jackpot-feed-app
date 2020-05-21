<template>
  <div class="game">
    game
    {{ getBigDrop }}
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
      "getBigDrop",
      "getMediumDrops"
    ])
  },
  methods: {
    ...mapActions([
      'setBigDrop',
      'addMediumDrop'
    ])
  },
  mounted () {
    axios
      .get('http://localhost:3000/pots')
      .then(response => {
        for(const drop of response.data) {
          if(drop.type==="big") {
            this.setBigDrop(drop) 
          } else {
            this.addMediumDrop(drop)
          }
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
}

</script>
