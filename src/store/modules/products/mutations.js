export default {

  increase(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => e.id === payload.id)
    state.cart.items[productInCartIndex].qty++;
    state.cart.total += payload.price;
  },

  decrease(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => e.id === payload.id)
    state.cart.items[productInCartIndex].qty--;
    state.cart.total -= payload.price;
  },

  addProductToCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => e.id === payload.id)
    console.log(state.cart.items);
    console.log(productInCartIndex);
    
    if(productInCartIndex >= 0) {
      // Add the same product MORE than ONCE.
      
      return [
        state.cart.items[productInCartIndex].qty++, state.cart.total += payload.price
      ]
    } else {
      const newItem = {
        id: payload.id,
        name: payload.name,
        color: payload.color,
        price: payload.price,
        image: payload.image,
        stock: payload.stock,
        category: payload.category,
        info: payload.info,
        size: payload.size,
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