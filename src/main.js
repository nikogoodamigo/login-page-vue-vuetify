import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vuex from 'vuex'
import axios from 'axios'


loadFonts()

createApp(App)
  .use(vuetify)
  .use(Vuex)

  axios.defaults.baseURL = ''
  .mount('#app')
