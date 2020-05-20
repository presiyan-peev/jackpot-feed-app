<template>
  <div class="home">
    home
    <BigPot />
    <MediumPot />
    <MediumPot />
  </div>
</template>

<script>
// @ is an alias to /src
import BigPot from '@/components/BigPot.vue'
import MediumPot from '@/components/MediumPot.vue'

export default {
  name: 'Home',
  components: {
    BigPot,
    MediumPot
  }
}

</script>
