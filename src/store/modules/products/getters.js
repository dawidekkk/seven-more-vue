export default {
  carouselProducts(state) {
    return state.carouselProducts;
  },

  hasCarouselProducts(state) {
    return state.carouselProducts && state.carouselProducts.length > 0;
  },

  // finalCounter(state) {
  //   return state.counter;
  // }

  bestsellerProducts(state) {
    return state.bestsellerProducts;
  },
}