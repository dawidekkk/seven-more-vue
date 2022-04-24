export default {

  increase(context, payload) {
    context.commit('increase', payload)
  },

  decrease(context, payload) {
    context.commit('decrease', payload)
  },

  addProductToCart(context, payload) {
    context.commit('addProductToCart', payload)
  },
  
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload)
  }
}