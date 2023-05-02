import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueRouter from 'vue-router'
import {router} from './App.vue'



loadFonts()

createApp(App)
  .use(router)
  .use(VueRouter)
  .use(vuetify)
  .mount('#app')

