<template>
  <div>
    <ProductCard
      v-for="product in products"
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
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },

  props: {
    activeFilters: {
      type: Object,
      uniwersalny: String,
      s: String,
      m: String,
      l: String,
      xl: String,
    }
  },

  computed: {
    products() {
      const tshirts = this.$store.getters.tshirts;
      const size = tshirts.filter((product) => {
        if (this.activeFilters.uniwersalny && product.size.includes("uniwersalny")) {
          return true;
        }
        if (this.activeFilters.s && product.size.includes("S")) {
          return true;
        }
        if (this.activeFilters.m && product.size.includes("M")) {
          return true;
        }
        if (this.activeFilters.l && product.size.includes("L")) {
          return true;
        }
        if (this.activeFilters.xl && product.size.includes("XL")) {
          return true;
        }
        return false;
      });
      return size;
    },
  },
};
</script>

<style scoped></style>
