import { createRouter, createWebHistory } from "vue-router";
import AdminPanel from "@/components/AdminPanel";
import LoginPage from "@/components/LoginPage.vue";

const routes = [
    {path: '/adminpanel', name: 'AdminPanel', component: AdminPanel},
    {path: '/', name: 'LoginPage', component: LoginPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router