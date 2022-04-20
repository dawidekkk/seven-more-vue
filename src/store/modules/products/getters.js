export default {
  carouselProducts(state) {
    return state.carouselProducts;
  },

  hasCarouselProducts(state) {
    return state.carouselProducts && state.carouselProducts.length > 0;
  },

  bestsellerProducts(state) {
    return state.bestsellerProducts;
  },

  shopProducts(state) {
    return state.shopProducts;
  },

  testImages(state) {
    return state.testImages;
  }
}