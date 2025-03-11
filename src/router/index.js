import { createRouter, createWebHistory } from "vue-router";
import UserPage from '../views/UserPage.vue'

const routes = [{ path: '/', component: UserPage }]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router