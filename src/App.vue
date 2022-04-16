<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>

import TheHeader from "./components/layout/TheHeader.vue"
export default {
  components: {
    TheHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
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
