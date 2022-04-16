<template>
  <section class="home-carousel" id="test">
    <h2 class="home-carousel-h2">cos wiecej niz moda</h2>
    <ul>
      <CarouselCard />
    </ul>
  </section>
</template>

<script>
import CarouselCard from '../UI/CarouselCard.vue'
export default {
  components: {
    CarouselCard,
}
}
</script>

<style scoped>
.home-carousel {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  color: white;
}

.home-carousel-h2 {
  margin: 5rem auto 2rem auto;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 400;
  font-size: 28px;
  color: black;
}

.img {
  width: 100px;
  height: 100px;
}


</style>
