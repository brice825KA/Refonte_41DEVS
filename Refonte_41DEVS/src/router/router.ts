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
    path: '/realisations/oremi',
    name: 'oremi-project',
    component: () => import('@/container/component/accueil/OremiProject.vue')
  },
  {
    path: '/realisations/mon-assurance',
    name: 'mon-assurance-project',
    component: () => import('@/container/component/accueil/MonAssuranceProject.vue')
  },
  {
    path: '/realisations/carex',
    name: 'carex-project',
    component: () => import('@/container/component/accueil/CarexProject.vue')
  },
  {
    path: '/realisations/rema',
    name: 'rema-project',
    component: () => import('@/container/component/accueil/RemaProject.vue')
  },
  {
    path: '/realisations/etchite',
    name: 'etchite-project',
    component: () => import('@/container/component/accueil/EtchiteProject.vue')
  },
  {
    path: '/realisations/afg-e-bank',
    name: 'afg-bank-project',
    component: () => import('@/container/component/accueil/AfgBankProject.vue')
  },
  {
    path: '/realisations/oho-erp',
    name: 'oho-erp-project',
    component: () => import('@/container/component/accueil/OhoErpProject.vue')
  },
  {
    path: '/realisations/expert-secu',
    name: 'expert-secu-project',
    component: () => import('@/container/component/accueil/ExpertSecuProject.vue')
  },
  {
    path: '/realisations/veep',
    name: 'veep-project',
    component: () => import('@/container/component/accueil/VeepProject.vue')
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
    path: '/realisations/grh-finance',
    name: 'grh-finance-project',
    component: () => import('@/container/component/accueil/GrhFinanceProject.vue')
  },
  {
    path: '/realisations/asa-pv',
    name: 'asa-pv-project',
    component: () => import('@/container/component/accueil/AsaPvProject.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }

    return { top: 0 }
  }
})

export default router
