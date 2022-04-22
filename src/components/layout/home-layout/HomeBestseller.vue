<template>
  <section class="home-bestseller">
    <h1 class="h1">Produkty</h1>
    <BaseTitle>bestseller</BaseTitle>
    <div class="bestseller-wrapper">
      <HomeProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :color="product.color"
        :image="product.image"
        :price="product.price"
        :stock="product.stock"
      />
    </div>
  </section>
</template>

<script>
import HomeProductCard from "../../UI/HomeProductCard";
// import useProduct from "../../../hooks/products.js";

export default {
  components: { HomeProductCard },

  computed: {
    products() {
      return this.$store.getters.bestsellerProducts
    }
  }

  // setup() {
  //   const [products] = useProduct("bestsellerProducts");

  //   return {
  //     products,
  //   };
  // },
};
</script>

<style scoped lang="scss">
.home-bestseller {
  width: 100vw;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem;
  margin: 1rem auto 3.5rem auto;
  position: relative;

  .bestseller-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;

    @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

.h1 {
  opacity: 0;
  @media screen and (min-width: 1200px) {
    opacity: 1;
    position: absolute;
    top: -14%;
    left: 50%;
    transform: translate(-50%, 50%);
    color: rgba(128, 128, 128, 0.12);
    font-size: 180px;
  }
}
</style>
