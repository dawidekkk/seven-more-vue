<template>
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
</template>

<script>
import ProductCard from "../../components/UI/ProductCard";
// import { useStore } from "vuex";
// import { computed, ref } from "vue";
// import useFilter from '../../hooks/useFilter'
// import { toRefs } from "vue";
export default {
  components: {
    ProductCard,
  },

  props: {
    activeFilters: {
      // type: Object,
      uniwersalny: {
        type: Boolean,
        default: true,
        required: true,
      },
      s: {
        type: Boolean,
        default: true,
        required: true,
      },
      m: {
        type: Boolean,
        default: true,
        required: true,
      },
      l: {
        type: Boolean,
        default: true,
        required: true,
      },
      xl: {
        type: Boolean,
        default: true,
        required: true,
      },

      test: String,

    },
  },

  // hmmmmmm tutaj przydalby sie hook, ale jest problem z propsami

  // setup(props) {

  // const store = useStore()
  // const products = computed(() => {
  //   return store.getters.tshirts;
  // })

  // const active = ref(props.activeFilters);

  // const [tshirts] = useFilter(products);

  //   return {
  //     // products,
  //     tshirts,
  //     active,
  //   }
  // },

  computed: {
    products() {
      const longsleeve = this.$store.getters.longsleeve;
      const size = longsleeve.filter((product) => {
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
