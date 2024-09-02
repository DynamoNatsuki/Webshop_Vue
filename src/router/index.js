import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import CheckoutForm from '@/views/CheckoutForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetail
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutForm
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
