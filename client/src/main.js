import './assets/main.css'
import './assets/index.css'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import i18n from './services/language'
import { createHead } from '@unhead/vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCircleInfo, faHeadset, faBars, faCircleXmark, faDollarSign, faStar, faArrowLeftLong, faTurkishLiraSign, faCheck, faXmark, faPhone, faEnvelope, faLocationDot, faFax, faChevronUp, faMap, faChevronLeft, faChevronRight, faLayerGroup, faUsers, faCartShopping, faStore, faSackDollar, faCashRegister, faAddressBook, faCircleNodes, faCommentsDollar, faCircleRight} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faCircleInfo, faHeadset, faBars, faCircleXmark, faDollarSign, faStar, faArrowLeftLong, faTurkishLiraSign, faCheck, faXmark, faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faPhone, faEnvelope, faLocationDot, faFax, faChevronUp, faMap, faChevronLeft, faChevronRight, faLayerGroup, faUsers, faCartShopping, faStore, faSackDollar, faCashRegister, faAddressBook, faCircleNodes, faCommentsDollar, faCircleRight)


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

const head = createHead();

app.use(router)
app.use(i18n)
app.use(head);

const loadLanguages = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REQUEST_URL}/api/language/getLanguages`);
    const languages = response.data;
    Object.keys(languages).forEach(locale => {
      i18n.global.setLocaleMessage(locale, languages[locale]);
    });
  } catch {
    // API'den dil verisi alınamazsa statik JSON dosyaları kullanılır
  }
  app.mount('#app');
};

loadLanguages();
