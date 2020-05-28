<template>
  <div class="pb-1">
    <v-img 
      :src="starsUrl">
      <div class="transparentComponent">
        <slot></slot>
      </div>
    </v-img>
  </div>
</template>

<script>
import starsUrl from "../assets/stars.png"

export default {
  data: () => {
    return {
      starsUrl: starsUrl
    }
  }
};
</script>

<style>
.transparentComponent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11vh;
  background: radial-gradient(rgba(0, 0, 0, 0.452), rgba(33, 39, 89, 0.747));
}
</style>