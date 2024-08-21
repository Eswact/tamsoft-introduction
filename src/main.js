import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './services/language'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCircleInfo, faHeadset, faBars, faCircleXmark, faDollarSign, faStar, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
library.add(faCircleInfo, faHeadset, faBars, faCircleXmark, faDollarSign, faStar, faArrowLeftLong)


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(i18n)

app.mount('#app')
