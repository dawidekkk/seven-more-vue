<template>
  <div>
    <HomeHero />
    <HomeCarousel />
    <HomeInfo />
    <HomeBestseller />
    <HomeAmbasadors />
  </div>
</template>

<script>
import HomeHero from "../../components/layout/home-layout/HomeHero";
import HomeCarousel from "../../components/layout/home-layout/HomeCarousel";
import HomeInfo from "@/components/layout/home-layout/HomeInfo.vue";
import HomeBestseller from "@/components/layout/home-layout/HomeBestseller.vue";
import HomeAmbasadors from "@/components/layout/home-layout/HomeAmbasadors.vue";

export default {
  components: {
    HomeHero,
    HomeCarousel,
    HomeInfo,
    HomeBestseller,
    HomeAmbasadors,
  },
};
</script>

