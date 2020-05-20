<template>
  <div class="home">
    home
    {{ info }}
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
      info: null
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
      .then(response => (this.info = response.data[0].type))
  }
}

</script>
