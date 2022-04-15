import { createStore } from "vuex";
import authModule from './modules/auth/index.js'

const store = createStore({
  modules: {
    auth: authModule, // namespaced = "auth"
  },
})

export default store;