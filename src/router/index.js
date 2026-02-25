import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/About.vue'
import Contacto from '../Views/Contacto.vue'



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
    }

  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router