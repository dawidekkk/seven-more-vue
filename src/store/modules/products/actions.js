export default {
  addToCart(context, payload) {
    context.comit('addProductToCart', payload)
  },
  
  removeProductFromCart(context, payload) {
    context.comit('removeProductFromCart', payload)
  }
}