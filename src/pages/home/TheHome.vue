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
import HomeHero from "../../components/layout/HomeHero";
import HomeCarousel from "../../components/layout/HomeCarousel";
import HomeInfo from "@/components/layout/HomeInfo.vue";
import HomeBestseller from "@/components/layout/HomeBestseller.vue";
import HomeAmbasadors from "@/components/layout/HomeAmbasadors.vue";

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

