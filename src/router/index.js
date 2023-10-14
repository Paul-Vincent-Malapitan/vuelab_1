import { createRouter, createWebHistory } from 'vue-router'

import Electro from '../views/Electro.vue'

const routes = [
  {
    path: '/',
    name: 'electro',
    component: Electro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
