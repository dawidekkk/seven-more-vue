export default {

  addProductToCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => e.id === payload.id)
    console.log(productInCartIndex);
    
    if(productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
      console.log(state.cart.items);
    } else {
      const newItem = {
        id: payload.id,
        name: payload.name,
        image: payload.image,
        price: payload.price,
        color: payload.color,
        qty: 1,
      }
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += payload.price;
  },

  removeProductFromCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => e.id === payload.id)
    
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1)
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  }
}