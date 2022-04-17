<template>
  <div>
    <HomeHero />
    <HomeCarousel />
    <HomeInfo />
    <HomeBestseller />
    <HomeAmbasadors />
    <HomeInstagram />
    <HomeSocial />
    <HomeSubscribe />
    <HomeFooter />
  </div>
</template>

<script>
import HomeHero from "../../components/layout/HomeHero";
import HomeCarousel from "../../components/layout/HomeCarousel";
import HomeInfo from "@/components/layout/HomeInfo.vue";
import HomeBestseller from "@/components/layout/HomeBestseller.vue";
import HomeAmbasadors from "@/components/layout/HomeAmbasadors.vue";
import HomeInstagram from "@/components/layout/HomeInstagram.vue";
import HomeSocial from "../../components/layout/HomeSocial.vue";
import HomeSubscribe from "../../components/layout/HomeSubscribe.vue";
import HomeFooter from "@/components/layout/HomeFooter.vue";

export default {
  components: {
    HomeHero,
    HomeCarousel,
    HomeInfo,
    HomeBestseller,
    HomeAmbasadors,
    HomeInstagram,
    HomeSocial,
    HomeSubscribe,
    HomeFooter
},
};
</script>

<style></style>
