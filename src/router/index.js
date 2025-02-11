import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

{
  path: '/vistaaleeza',
  name: 'Color Aleeza',
  component: () => import('../views/Aleeza_view.vue'),
},

{
  path: '/vistaalejandro',
  name: 'Color Alejandro',
  component: () => import('../views/Alejandro_view.vue'),
},

{
  path: '/vistaerika',
  name: 'Lista Erija',
  component: () => import('../views/Erika_view.vue'),
},

    {
      path: '/vistaigor',
      name: 'Contador Igor',
      component: () => import('../views/Igor_view.vue'),
    },

  
    {
      path: '/comun',
      name: 'Página común',
      component: () => import('../views/Comun_view.vue'),
    },
  ],
})

export default router
