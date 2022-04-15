import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// import store from "./store/index.js";

const NotFound = defineAsyncComponent(() => 
  import('./pages/NotFound.vue')
)

const router = createRouter({
  history: createWebHistory(),
  router: [
    {path: '/:notFound(.*)', commponent: NotFound}
  ],
})

export default router;