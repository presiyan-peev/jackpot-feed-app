<template>
  <div class="game">
    game
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
	name: 'Game',
	
	components: {
		BigPot,
		MediumPot
	},

	computed: {
		...mapGetters([
			"getDailyPot",
			"getSuperPot",
			"getHourlyPot"
		])
	},

	methods: {
		...mapActions([
			'setDailyPot',
			'setSuperPot',
			'setHourlyPot'
		]),

		async fetchPots() {
			await axios
				.get('http://localhost:3000/pots')
				.then(response => {
					for(const drop of response.data) {
					switch(drop.imageType) {
						case 'daily_drop':
						this.setDailyPot(drop) 
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
	},

	created () {
		this.fetchPots()
	}
}

</script>
