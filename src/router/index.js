import { createRouter, createWebHistory } from 'vue-router'

import Electro from '../views/Electro.vue'
import Doctor from '../views/Doctor.vue'

const routes = [
  {
    path: '/',
    name: 'electro',
    component: Electro
  },
  {
    path: '/manage',
    name: 'doctor',
    component: Doctor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
