import { createStore } from "vuex";
import authModule from './modules/auth/index.js'
import productsModule from './modules/products/index'

const store = createStore({
  
  modules: {
    auth: authModule, // namespaced = "auth"
    products: productsModule,
  },
})

export default store;