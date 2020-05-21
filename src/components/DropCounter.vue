<template>
    <div>
        <span>Must drop in: 🕒 </span>
        <span>{{timer}}</span>
    </div>
</template>

<script>
export default {
    props: ['timer'],

    methods: {

    },

    created() {

        console.log(typeof this.timer)
    }
}
</script>