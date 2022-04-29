export default {

  increase(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => {
      return e.id === payload.id && e.size === payload.size
    })
    state.cart.items[productInCartIndex].qty++;
    state.cart.total += payload.price;
  },

  decrease(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => {
      return e.id === payload.id && e.size === payload.size
    })
    state.cart.items[productInCartIndex].qty--;
    state.cart.total -= payload.price;
  },

  resetProducts(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => {
      return e.id === payload.id && e.size === payload.size
    })
    state.cart.qty--;
    console.log(productInCartIndex)
  },

  addProductToCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => {
      return e.id === payload.id && e.size === payload.size;
    })

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

    if(productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++
    } else {
      state.cart.items.push(newItem);
      localStorage.setItem("newItem", JSON.stringify)
    }
    
    state.cart.qty++;
    state.cart.total += payload.price;
  },

  removeProductFromCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex((e) => {
      return e.id === payload.id && e.size === payload.size;
    })
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1)
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  }
}

const a = 100;
const b = 2;

const o = {
  [a]: b,
}

console.log(o);