<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue';
import AdminPanel from './components/AdminPanel.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/adminpanel', component: AdminPanel}
  ]
})

export default {
    name: 'App',
    router,
    data: () => ({
    //
    }),
}
</script>
