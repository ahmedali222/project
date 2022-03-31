import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far);
createApp(App).component('fa',FontAwesomeIcon).mount('#app')
