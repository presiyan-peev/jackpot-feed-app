<template>
  <v-app id="app" >
    <v-content id="app-container" >
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  background: url("./assets/bg.png");
}

#app-container {
  width: 20vw;
  min-width: 150px !important;
  max-width: 300px !important;
  height: 100vh;
  min-height: 320px !important;
  margin: 0 auto;
}
</style>