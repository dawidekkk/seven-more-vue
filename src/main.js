import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import BaseTitle from './components/UI/BaseTitle.vue'
import BasePages from './components/UI/BasePages.vue'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importing Fontawesome icons
import { faBars, faXmark, faArrowDown, faPlus, } from '@fortawesome/free-solid-svg-icons'

// Adding icons 
library.add(faBars, faXmark, faArrowDown, faPlus,)

const app = createApp(App)

app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon)
app.component("BaseTitle", BaseTitle)
app.component("BasePages", BasePages)
app.mount('#app')

// router.isReady().then(() => {
//   app.mount('#app');
// });
