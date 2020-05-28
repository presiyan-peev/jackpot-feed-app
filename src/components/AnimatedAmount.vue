<template>
    <div 
        class="amount-display"
        align="center"
        justify="center"
        v-resize-text="{ratio:0.7, minFontSize: '1px'}">
        {{ tweeningValue }}
    </div>
</template>

<script>
import TWEEN from 'tween'
import ResizeText from 'vue-resize-text'

export default {

data: () => {
    return {
        fontClass: 'display-2',
        tweeningValue: 0
    }
},

props: {
    value: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
    }
},

directives: {
    ResizeText
},

watch: {
    value: function (newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
},

methods: {
    tween: function (startValue, endValue) {
        var vm = this
        function animate () {
            if (TWEEN.update()) {
                requestAnimationFrame(animate)
            }
    }

    new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 2000)
        .onUpdate(function () {
            vm.tweeningValue = vm.currency + vm.formatMoney(this.tweeningValue.toFixed(2))
            })
            .start()

        animate()
    },

    // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
    formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    }
},

mounted() {
    this.tween(0, this.value)
},
}
</script>

<style>
.amount-display {
    font-family: "Times New Roman", Times, serif !important;
    background: -webkit-linear-gradient(#ebed72, #a79b2d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 25px;
}
</style>