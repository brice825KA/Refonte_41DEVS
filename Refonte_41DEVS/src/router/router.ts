import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/home.vue'
//import particular from '../component/conteneur/particular/particular.vue'
//import companies from '../component/conteneur/companies/companies.vue'
//import prices from '../component/conteneur/prices/prices.vue'

const routes = [
  {
    path: '/',
    //component: companies
  },
  {
    path: '/particular',
    //component: particular
  },
  {
    path: '/prices',
    //component: prices
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
