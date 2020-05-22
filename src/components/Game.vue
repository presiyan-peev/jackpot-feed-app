<template>
  <div class="game">
    <DailyDrop />
    <SuperDrop />
    <HourlyDrop />
  </div> 
</template>

<script>
// @ is an alias to /src
import DailyDrop from '@/components/DailyDrop.vue'
import SuperDrop from '@/components/SuperDrop.vue'
import HourlyDrop from '@/components/HourlyDrop.vue'

import { mapActions } from 'vuex'

export default {
	name: 'Game',
	
	components: {
		DailyDrop,
		SuperDrop,
		HourlyDrop
	},

	methods: {
		...mapActions([
			'fetchPots',
			'dummyFetchPots'
		]),
	},

	created () {
		// This is the method that fetches data from local API
		this.fetchPots()

		// This is the method that "fetches" data stored in the store, as the local API cannot be deployed to NETLIFY
		// this.dummyFetchPots()
	}
}

</script>
