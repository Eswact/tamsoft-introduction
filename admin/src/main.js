import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEyeSlash, faEye)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
