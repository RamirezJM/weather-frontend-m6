import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/About.vue'
import Contacto from '../Views/Contacto.vue'
import Pronosticos from '../Views/Pronosticos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/pronosticos',
    name: 'pronosticos',
    component: Pronosticos
  },
  {
    path: '/ciudad/:id',
    name: 'CiudadDetalle',
    component: () => import('@/views/CiudadDetalle.vue')
  }



]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router