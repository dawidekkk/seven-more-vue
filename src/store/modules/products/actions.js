export default {

  increase(context, payload) {
    context.commit('increase', payload)
  },

  addProductToCart(context, payload) {
    context.commit('addProductToCart', payload)
  },
  
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload)
  }
}