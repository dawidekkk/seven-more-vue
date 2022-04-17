<template>
  <section class="home-bestseller">
    <h2 class="home-best-h2">bestseller</h2>
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
      products
    };
  },
};
</script>

<style scoped>
.home-bestseller {
  width: 100vw;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
  background-color: rgb(161, 161, 161);
  padding: .5rem;
}

.bestseller-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}

.home-best-h2 {
  text-transform: uppercase;
  margin: 2rem auto;
  text-align: center;
}
</style>
