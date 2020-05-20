<template>
    <div>
        <v-img :src="dailyDrop"></v-img>
        <v-img :src="box">$1,167.98</v-img>
        <v-sheet tile class="sheet">
            <DropCounter />
        </v-sheet>
    </div>
</template>

<script>
import dailyDrop from "../assets/daily_drop.png"
import box from "../assets/box.png"
import DropCounter from '@/components/DropCounter.vue'

export default {
    data: () => {
        return {
            dailyDrop: dailyDrop,
            box: box
        }
    },
    components: {
        DropCounter,
    }   
}
</script>
<style>
.sheet{
    opacity: 0.1;
    height: 50px;
}
</style>