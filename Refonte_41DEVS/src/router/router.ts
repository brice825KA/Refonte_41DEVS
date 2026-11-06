import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router'
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
    path: '/companies/:expertise',
    name: 'company-expertise-detail',
    component: () => import('@/container/component/companies/ExpertiseDetail.vue'),
    beforeEnter: (to: RouteLocationNormalized) => {
      const validExpertises = ['ingenierie-developpement', 'infrastructure-informatique']

      return validExpertises.includes(String(to.params.expertise)) || { name: 'companies' }
    }
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
    path: '/industries/:slug',
    name: 'industry-detail',
    component: () => import('@/container/component/industries/IndustryDetail.vue'),
    beforeEnter: (to: RouteLocationNormalized) => {
      const validSlugs = [
        'assurance',
        'banque-finance',
        'secteur-public',
        'sante-pharmaceutique',
        'divertissement',
        'securite'
      ]

      return validSlugs.includes(String(to.params.slug)) || { name: 'industries' }
    }
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
