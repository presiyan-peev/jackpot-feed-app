<template>
    <div 
        class="dropCounterContainer"
        :style="containerStyle">
        <p 
            class="dropCounter"
            ref="dropCounter" 
            :style="textStyle">
            Must drop in: 🕒 {{cd.hoursRemaining}}:{{cd.minutesRemaining}}:{{cd.secondsRemaining}}
        </p>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

props: ['pot', 'parentSize'],

data: () => {
    return {
        hoursRemaining: '',
        minutesRemaining: '',
        secondsRemaining: '',

        // random initial values, true values are set in setParentSize()
        originalFontSize: '0px',
        previewWidth: '0px',
        previewVertOffset: '0px',
        containerStyle: {
            width: 'auto',
        },
        textStyle: {
            fontSize: '15px',
            position: 'absolute',
            overflow: 'hidden',
        }
    }
},

computed: {
    ...mapGetters(['getDailyPotCountDown', 'getSuperPotCountDown', 'getHourlyPotCountDown']),
    cd() {
        switch (this.pot) {
            case 'daily' : return this.getDailyPotCountDown
            case 'super' : return this.getSuperPotCountDown
            case 'hourly' : return this.getHourlyPotCountDown
            default : return null
        }
    }
},

// https://forum.vuejs.org/t/scaling-font-size-to-container-in-idiomatic-vue/17442 
mounted: function () {
    this.setParentSize()
    requestAnimationFrame(this.render)
},

methods: {
      render: function () {
        this.scaleText()
        //requestAnimationFrame(this.render)
      },

      /**
       * Scale the dropCounter element to fit the dropCounterContainer
       */
      scaleText: function () {
        let newTextScale = 1
        let previewScale = parseInt(this.previewWidth, 10) / 360

        // Scale text to match the actual container size
        newTextScale *= previewScale
        
        let newFontSize = parseInt(this.textStyle.fontSize, 10) * newTextScale
        
        this.updateTextSize(newFontSize, previewScale)
      },

      /**
       * Update the font size and position of the text element in the DOM
       */
      updateTextSize: function(newFontSize) {
        this.$refs.dropCounter.style['font-size'] = newFontSize + 'px'
        this.textStyle.fontSize = newFontSize + 'px'

     /*    let size = this.getElementSizes();
        this.textStyle.left = (size.container.width - size.text.width) / 2 + 'px'
        this.textStyle.top = (size.container.height - size.text.height) / 2 + (this.previewVertOffset * previewScale) + 'px' */
      },

      /**
       * Get the total height and width for the container and text elements
       */
      getElementSizes: function() {
        return {
          container: {
            width: this.$el.getBoundingClientRect().width,
            height: this.$el.getBoundingClientRect().height
          },
          text: {
            width: this.$refs.dropCounter.getBoundingClientRect().width,
            height: this.$refs.dropCounter.getBoundingClientRect().height
          }
        }
      },

      setParentSize() {
        this.originalFontSize = this.parentSize.originalFontSize
        this.previewWidth = this.parentSize.previewWidth
        this.previewVertOffset = this.parentSize.previewVertOffset
      }
    }

}
</script>

<style>
.dailyDropCounterContainer  {
    display: flex;
    justify-content: center;
}
.dailyDropCounter {
    background: black;
    border-radius: 50px;
    
    padding: 0.1rem 1rem;
    margin: 0 auto;
}
</style> 