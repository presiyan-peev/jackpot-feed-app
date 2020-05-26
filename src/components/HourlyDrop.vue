<template>
    <div class="medium-pot">
        <TransparentComponent :stars="true">
        <v-container>
            <v-row
                align="center"
                justify="center">
                <v-col
                    cols="12"
                    xs="5"
                    sm="5"
                    md="5">
                    <v-img :src="dropImg"></v-img>
                </v-col>
                <v-col
                    cols="12"
                    xs="7"
                    sm="7"
                    md="7">
                    <div>
                        <AnimatedAmount 
                            :value="getHourlyPot.amount-0" 
                            :currency="getHourlyPot.currency" />
                    </div>
                    <div 
                        class="hourlyDropCounterContainer">
                        <p 
                            class="hourlyDropCounter"
                            ref="hourlyDropCounter">
                            Must drop in: 🕒 {{getHourlyPotCountDown.hoursRemaining}}:{{getHourlyPotCountDown.minutesRemaining}}:{{getHourlyPotCountDown.secondsRemaining}}
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        </TransparentComponent>
    </div>
</template>

<script>
import hourlyDrop from "../assets/hourly_drop.png"

import AnimatedAmount from '@/components/AnimatedAmount.vue'
//import DropCounter from '@/components/DropCounter.vue'
import TransparentComponent from '@/components/TransparentComponent.vue'

import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            dropImg: hourlyDrop,

            dropCounterParentSizes: {
                originalFontSize: '0px',
                previewWidth: '0px',
                previewVertOffset: '0px',
            }
        }
    },
    components: {
        AnimatedAmount,
        TransparentComponent,
    },
    computed: {
        ...mapGetters([
            'getHourlyPot',
            'getHourlyPotCountDown'
        ]),
    },

    methods: {
        setDropCounterParentSize() {
            this.dropCounterParentSizes.originalFontSize = '15px'
            this.dropCounterParentSizes.previewWidth = this.$refs.dropCounterParent.clientHeight
            this.dropCounterParentSizes.previewVertOffset = '2px'
        }
    },
    mounted() {
        this.setDropCounterParentSize()
    }
}
</script>

<style>
.hourlyDropCounterContainer  {
    display: flex;
    justify-content: center;
}
.hourlyDropCounter {
    background: black;
    border-radius: 50px;
    font-size: 0.6vw;
    padding: 0.1rem 1rem;
    margin: 0 auto;
}
</style>