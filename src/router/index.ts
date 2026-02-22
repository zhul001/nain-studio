import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MiniToolView from '../views/desktop/nain-minitool.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    // Link Web
    {
      path: '/web/portfolio',
      name: 'portfolio',
      component: () => import('../views/Dashboard.vue'),
    },
    { path: '/web/admin', name: 'admin', component: () => import('../views/Dashboard.vue') },
    // Link Desktop
    {
      path: '/desktop/nain-minitool',
      name: 'nain-minitool',
      component: () => import('../views/desktop/nain-minitool.vue'),
    },
    // Link Mobile
    {
      path: '/mobile/naintech',
      name: 'naintech-mobile',
      component: () => import('../views/mobile/naintech.vue'),
    },
  ],
})

export default router
