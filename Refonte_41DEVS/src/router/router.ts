import { createRouter, createWebHashHistory } from 'vue-router'
import accueil from '@/container/component/accueil/accueil.vue'
import companies from '@/container/component/companies/companies.vue'
import industries from '@/container/component/industries/industries.vue'
import contact from '@/container/component/contact/contact.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    alias: ['/accueil', '/accueuil'],
    component: accueil
  },
  {
    path: '/accueil',
    redirect: '/'
  },
  {
    path: '/accueuil',
    redirect: '/'
  },
  {
    path: '/companies',
    name: 'companies',
    component: companies
  },
  {
    path: '/industries',
    name: 'industries',
    component: industries
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
