<template>
  <div>
    <HomeHero />
    <HomeCarousel />
    <HomeInfo />
  </div>
</template>

<script>
import HomeHero from "../../components/layout/HomeHero";
import HomeCarousel from "../../components/layout/HomeCarousel";
import HomeInfo from "@/components/layout/HomeInfo.vue";

export default {
  components: {
    HomeHero,
    HomeCarousel,
    HomeInfo
},
};
</script>

<style></style>
