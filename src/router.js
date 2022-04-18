import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import TheHome from './pages/home/TheHome.vue'
import TheRules from './pages/regulamin/TheRules.vue'

// Async loading specify cmps, because of performance. 
const NotFound = defineAsyncComponent(() => 
  import('./pages/NotFound.vue')
)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: TheHome },
    { path: '/', redirect: '/home'},
    { path: '/regulamin', component: TheRules },
    { path: '/:notFound(.*)', component: NotFound}
  ],
})

export default router;