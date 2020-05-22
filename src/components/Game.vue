<template>
  <div class="game">
    <BigPot />
    <MediumPot :isHourlyDrop="false" />
    <MediumPot :isHourlyDrop="true" />
  </div> 
</template>

<script>
// @ is an alias to /src
import BigPot from '@/components/BigPot.vue'
import MediumPot from '@/components/MediumPot.vue'

import { mapActions } from 'vuex'

export default {
	name: 'Game',
	
	components: {
		BigPot,
		MediumPot
	},

	methods: {
		...mapActions([
			'fetchPots'
		]),
	},

	created () {
		this.fetchPots()

	}
}

</script>
