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
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: () => import('../views/SaleView.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('../views/FaqView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404View.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartPage.vue')
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
