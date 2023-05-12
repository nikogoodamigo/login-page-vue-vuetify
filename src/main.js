import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueRouter from 'vue-router';
import {router} from './router';
import { tokenStore } from './functions/token-store';

loadFonts()

createApp(App)
  .use(tokenStore)
  .use(router)
  .use(VueRouter)
  .use(vuetify)
  .mount('#app')


