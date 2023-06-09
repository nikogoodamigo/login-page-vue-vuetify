import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import AdminPanel from '@/components/AdminPanel.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/adminpanel', component: AdminPanel},
  ]
});
