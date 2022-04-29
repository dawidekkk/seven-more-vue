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

  cartItems(state) {
    return state.cart.items;
  },

  hasCartItems(state) {
    return state.cart.items && state.cart.items.length > 0;
  },

  cartTotal(state) {
    return state.cart.total;
  },

  cartQty(state) {
    return state.cart.qty;
  },

  tshirts(state) {
    return state.tshirts;
  }

}