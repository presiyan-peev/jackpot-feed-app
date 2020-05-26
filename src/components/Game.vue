<template>
  <div class="game">
	<div class="drops">
		<DailyDrop />
		<SuperDrop />
		<HourlyDrop />
	</div>
	<div class="transparentHugeRoundedBox"></div>
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
		// this.fetchPots()

		// This is the method that "fetches" data stored in the store, as the local API cannot be deployed to NETLIFY
		this.dummyFetchPots()
	}
}

</script>

<style>
.game {
	position: relative;
}
.drops {
	position: relative;
	z-index: 1;
}
.transparentHugeRoundedBox {
	border-radius: 2vh;

    position: absolute;
    height: 68vh;
    width: 100%;
    
    background: radial-gradient(rgba(0, 0, 0, 0), rgba(33, 39, 89, 0.3));
    bottom: 0px;
    z-index: 0;
}
</style>