<template>
  <section class="home-bestseller">
    <BaseTitle>bestseller</BaseTitle>
    <div class="bestseller-wrapper">
      <HomeProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :color="product.color"
        :image="product.image"
        :price="product.price"
        :collection="product.collection"
      />
    </div>
  </section>
</template>

<script>
import HomeProductCard from "../UI/HomeProductCard.vue";
import useProduct from "../../hooks/products.js";

export default {
  components: { HomeProductCard },

  setup() {
    const [products] = useProduct("bestsellerProducts");

    return {
      products,
    };
  },
};
</script>

<style scoped lang="scss">
.home-bestseller {
  width: 100vw;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem;
  margin: 1rem auto 3.5rem auto;

  .bestseller-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
}
</style>
