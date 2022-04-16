<template>
  <section class="home-carousel">
    <h2 class="home-carousel-h2">cos wiecej niz moda</h2>
    <ul>
      <CarouselCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :img="product.image"
        :color="product.color"
        :collection="product.collection"
        :price="product.price"
      />
      
    </ul>
    
  </section>
</template>

<script>
import CarouselCard from "../UI/CarouselCard";
// import { mapGetters } from "vuex";
export default {

  components: {
    CarouselCard,
  },

  computed: {
    // ...mapGetters(["products"]),
    products() {
      return this.$store.getters['products/products']
    }
  },
};
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
</style>
