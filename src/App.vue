<template>
  <TheHeader />
  <TheHero />
</template>

<script>

import TheHeader from "./components/layout/TheHeader.vue"
import TheHero from './components/layout/TheHero'
export default {
  components: {
    TheHeader,
    TheHero
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
  margin-top: 60px;
}

* {
  padding: 0; margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}


</style>
