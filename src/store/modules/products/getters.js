export default {
  products(state) {
    return state.dummyProducts;
  },

  hasProducts(state) {
    return state.dummyProducts && state.dummyProducts.length > 0;
  },

  // finalCounter(state) {
  //   return state.counter;
  // }
}