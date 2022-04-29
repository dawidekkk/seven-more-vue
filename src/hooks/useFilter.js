import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default function useFilter(filter) {

  const store = useStore();
  const products = computed(() => {
    return store.getters.shopProducts;
  })

  const sizes = computed(() => {
    return products.filter((product) => {
      if(filter.universal && product.size.includes("uniwersalny")) {
        return true;
      }
      if(filter.s && product.size.includes("S")) {
        return true;
      }
      if(filter.m && product.size.includes("M")) {
        return true;
      }
      if(filter.l && product.size.includes("L")) {
        return true;
      }
      if(filter.xl && product.size.includes("XL")) {
        return true;
      }
      return false;
    })
  })

  return [sizes]
}
