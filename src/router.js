import { createRouter, createWebHistory } from "vue-router"
import { defineAsyncComponent } from "vue"
import TheHome from './pages/home/TheHome.vue'
import TheVoucher from './pages/voucher/TheVoucher.vue'
import TheRules from './pages/regulamin/TheRules.vue'
import ThePrivacyPolicy from './pages/regulamin/ThePrivacyPolicy.vue'
import TheDownloadableLinks from './pages/regulamin/TheDownloadableLinks.vue'
import TheShipInfo from './pages/regulamin/TheShipInfo.vue'
import TheContact from './pages/contact/TheContact.vue'
import TheShop from './pages/shop/TheShop.vue'
import ProductCardSpecify from './components/UI/ProductCardSpecify.vue'
import ShoppingCart from './pages/shoppingcart/TheShoppingCart.vue'
import ShoppingCartLogin from './pages/shoppingcart/ShoppingCartLogin.vue'
import ShopProductTshirt from './pages/shop/ShopProductTshirt.vue'
import ShopProductHoodies from './pages/shop/ShopProductHoodies.vue'
import ShopProductJoggers from './pages/shop/ShopProductJoggers.vue'
import ShopProductLong from "./pages/shop/ShopProductLong.vue"
import ShopProductAccesories from './pages/shop/ShopProductAccessories.vue'

// Async loading specify cmps, because of performance. 
const NotFound = defineAsyncComponent(() => 
  import('./pages/NotFound.vue')
)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/sevenmorevue'},
    { path: '/sevenmorevue', component: TheHome },
    { path: '/sklep', component: TheShop, children: [
      { path:'tshirt', component: ShopProductTshirt },
      { path:'hoodies', component: ShopProductHoodies },
      { path:'longsleeve', component: ShopProductLong },
      { path:'spodnie', component: ShopProductJoggers },
      { path:'akcesoria', component: ShopProductAccesories },
    ] },
    { path: '/sklep/:id', props: true, component: ProductCardSpecify },
    { path: '/voucher', component: TheVoucher },
    { path: '/koszyk', component: ShoppingCart },
    { path: '/logowanie', component: ShoppingCartLogin},
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