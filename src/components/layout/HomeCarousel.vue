<template>
  <section class="home-carousel" id="home-carousel">
    <BaseTitle>coś więcej niż moda</BaseTitle>
    <ul>
      <CarouselCard />
    </ul>
  </section>
</template>

<script>
import CarouselCard from "../UI/CarouselCard.vue";
export default {
  components: {
    CarouselCard,
  },

  props: {
    test: String,
  },

  // mounted() {
  //   console.log(this.$refs.test.id)
  // },
};
</script>

<style scoped>
.home-carousel {
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  margin: 1rem auto 0rem auto;
}
</style>
