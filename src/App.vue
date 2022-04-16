<template>
  <TheHeader />
  <!-- <TheHome /> -->
  <router-view></router-view>
</template>

<script>

import TheHeader from "./components/layout/TheHeader.vue"
// import TheHome from "./pages/home/TheHome.vue"
export default {
  components: {
    TheHeader,
    // TheHome,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

* {
  padding: 0; margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}

body {
  height: 100vh;
  width: 100vw;
}


</style>
