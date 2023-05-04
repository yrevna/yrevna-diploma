import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue')
    }
  ]
})
router.beforeEach(async () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})
export default router
