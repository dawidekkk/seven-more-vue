// import { computed } from "@vue/reactivity";
// import { useStore } from "vuex";

// export default function useFilter(activeFilters, activeColors) {

//   const filterSize = computed(() => {

//     const store = useStore();
//     const products = computed(() => {
//       return store.getters.shopProducts;
//     })

//     return products.value.filter((product) => {

//         if (activeFilters.value.uniwersalny && product.size.includes("uniwersalny")) {
//           return true;
//         }
//         if (activeFilters.value.s && product.size.includes("S")) {
//           return true;
//         }
//         if (activeFilters.value.m && product.size.includes("M")) {
//           return true;
//         }
//         if (activeFilters.value.l && product.size.includes("L")) {
//           return true;
//         }
//         if (activeFilters.value.xl && product.size.includes("XL")) {
//           return true;
//         }
//         if (activeColors.value.czarny && product.color.includes('czarny')) {
//           return true;
//         }
//         if (activeColors.value.blekit && product.color.includes('blekit')) {
//           return true;
//         }
//         if (activeColors.value.bialy && product.color.includes('bialy')) {
//           return true;
//         }
//         if (activeColors.value.bezowy && product.color.includes('bezowy')) {
//           return true;
//         }
//         if (activeColors.value.grafit && product.color.includes('grafit')) {
//           return true;
//         }
//         if (activeColors.value.czerwony && product.color.includes('czerwony')) {
//           return true;
//         }
//         if (activeColors.value.pomaranczowy && product.color.includes('pomaranczowy')) {
//           return true;
//         }
//         if (activeColors.value.bronze && product.color.includes('bronze')) {
//           return true;
//         }

//       return false;
//     })

//     // return size;
//   })

//   return [filterSize]
// }
