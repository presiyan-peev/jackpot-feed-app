<template>
  <v-responsive :aspect-ratio="300/112" class="padding sheet">
    <v-img 
      :src="starsUrl">
      <div class="transparentComponent">
        <slot></slot>
      </div>
    </v-img>
  </v-responsive>
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
.padding {
  padding-bottom: 2vh;
}
.transparentComponent {
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(rgba(0, 0, 0, 0.452), rgba(33, 39, 89, 0.747));
}
.sheet {    
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

