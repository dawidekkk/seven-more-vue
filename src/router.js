import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import TheHome from './pages/home/TheHome.vue'
import TheVoucher from './pages/voucher/TheVoucher.vue'
import TheRules from './pages/regulamin/TheRules.vue'
import ThePrivacyPolicy from './pages/regulamin/ThePrivacyPolicy.vue'
import TheDownloadableLinks from './pages/regulamin/TheDownloadableLinks.vue'
import TheShipInfo from './pages/regulamin/TheShipInfo.vue'
import TheContact from './pages/contact/TheContact.vue'
import TheShop from './pages/shop/TheShop.vue'
import ShopProductCard from './components/UI/ShopProductCard.vue'

// Async loading specify cmps, because of performance. 
const NotFound = defineAsyncComponent(() => 
  import('./pages/NotFound.vue')
)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/sevenmorevue', component: TheHome },
    { path: '/sklep', component: TheShop, },
    { path: '/sklep/:id', props: true, component: ShopProductCard },
    { path: '/voucher', component: TheVoucher },
    { path: '/regulamin', component: TheRules },
    { path: '/polityka', component: ThePrivacyPolicy },
    { path: '/pliki', component: TheDownloadableLinks },
    { path: '/platnosc', component: TheShipInfo },
    { path: '/kontakt', component: TheContact },
    { path: '/:notFound(.*)', component: NotFound}
  ],
  scrollBehavior(_, _2, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 }
  }
})

export default router;