<template>
  <section class="home-carousel" id="home-carousel">
    <h1 class="h1">7MORE7</h1>
    <BaseTitle>coś więcej niż moda</BaseTitle>
    <ul>
      <CarouselCard />
    </ul>
  </section>
</template>

<script>
import CarouselCard from "../../UI/CarouselCard";
export default {
  components: {
    CarouselCard,
  },
};
</script>

<style scoped lang="scss">
.home-carousel {
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  margin: 1rem auto 0rem auto;
  position: relative;
}

.h1 {
  opacity: 0;
  @media screen and (min-width: 1200px) {
    opacity: 1;
    position: absolute;
    top: -25%; left: 50%;
    transform: translate(-50%, 50%);
    color: rgba(128, 128, 128, 0.12);
    font-size: 180px;
  }
}

</style>
