import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../pages/Catalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Catalog }
  ]
})

export default router
