<template>
  <TheHeader />
  <router-view></router-view>
  <HomeInstagram />
  <HomeSocial />
  <HomeSubscribe />
  <TheFooter />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import HomeInstagram from "./components/layout/HomeInstagram";
import HomeSubscribe from "./components/layout/HomeSubscribe.vue";
import HomeSocial from "./components/layout/HomeSocial.vue";


export default {
  components: {
    TheHeader,
    TheFooter,
    HomeInstagram,
    HomeSubscribe,
    HomeSocial,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto Condensed", sans-serif;
}

body {
  height: 100vh;
  width: 100vw;
  line-height: 1.5;
}
</style>
