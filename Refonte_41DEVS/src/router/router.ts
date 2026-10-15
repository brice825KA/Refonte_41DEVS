import { createRouter, createWebHashHistory } from 'vue-router'
import accueil from '@/container/component/accueil/accueil.vue'
import companies from '@/container/component/companies/companies.vue'
import industries from '@/container/component/industries/industries.vue'
import contact from '@/container/component/contact/contact.vue'
import ContactStatus from '@/container/component/contact/ContactStatus.vue'

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
    path: '/contact/status',
    name: 'contact-status',
    alias: ['/contact-status', '/contact/confirmation'],
    component: ContactStatus
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
