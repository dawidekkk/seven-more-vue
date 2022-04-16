import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importing Fontawesome icons
import { faBars, faXmark, faArrowDown } from '@fortawesome/free-solid-svg-icons'

// Adding icons 
library.add(faBars, faXmark, faArrowDown)

const app = createApp(App)

app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')