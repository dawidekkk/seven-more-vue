<template>
  <div>
  <h1>ewainiwaniwfa</h1>
    <ShopProductCard
      v-for="tshirt in tshirts"
      :key="tshirt.id"
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
import ShopProductCard from "./ShopProductCard";
export default {
  components: {
    ShopProductCard,
  },

  computed: {
    tshirts() {
      return this.$store.getters.tshirts;
    },
  },
};
</script>

<style scoped></style>
