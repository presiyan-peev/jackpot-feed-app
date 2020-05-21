<template>
    <div class="medium-pot">
        <v-container>
            <v-row>
                <v-col>
                    <v-img :src="dropImg"></v-img>
                </v-col>
                <v-col>
                    <p class="prize">$129.78</p>
                    <DropCounter timer="01:53:14" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import hourlyDrop from "../assets/hourly_drop.png"

import DropCounter from '@/components/DropCounter.vue'

export default {
    data: () => {
        return {
            countdown: true,
            dropImg: hourlyDrop,
        }
    },
    components: {
        DropCounter,
    } 
}
</script>

<style>
.medium-pot {
    background: url("../assets/stars.png");
}
</style>