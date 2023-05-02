import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueRouter from 'vue-router'


loadFonts()

createApp(App)
  .use(VueRouter)
  .use(vuetify)
  .mount('#app')

