import { createRouter, createWebHashHistory } from 'vue-router'
import accueil from '@/container/component/accueil/accueil.vue'
import companies from '@/container/component/companies/companies.vue'
import industries from '@/container/component/industries/industries.vue'

const routes = [
  {
    path: '/',
    component: accueil
  },
  {
    path: '/companies',
    component: companies
  },
  {
    path: '/industries',
    component: industries
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
