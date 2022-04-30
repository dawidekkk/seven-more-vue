<template>
  <div>
    <ProductCard
      v-for="product in tshirts"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :color="product.color"
      :image="product.image[0].first"
      :price="product.price"
      :stock="product.stock"
    />
  </div>
</template>

<script>
// import ProductCardSpecify from "./ProductCardSpecify";
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    // ProductCardSpecify,
    ProductCard,
  },

  computed: {
    tshirts() {
      return this.$store.getters.tshirts;
    },
  }

  // computed: {
  //   tshirts() {
  //     return this.$store.getters.tshirts;
  //   },
  // },
};
</script>

<style scoped></style>
