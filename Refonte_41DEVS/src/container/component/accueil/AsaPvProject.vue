<script setup lang="ts">
import { ref } from 'vue'
import heroImage from '@/asset/images/image_asa-pv2.webp'
import portalImage from '@/asset/images/image_asa-pv1.webp'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'
import remaImage from '@/asset/images/img_rema.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'

const features = [
  'Gestion des PV de sinistres',
  'Consultation des déclarations',
  'Recherche et filtrage des dossiers',
  'Suivi des informations de sinistre',
]
const services = ['Design UI/UX', 'Développement web', 'Déploiement', 'Maintenance']

const otherProjects = [
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'Oremi', image: oremiImage, category: 'Assurance', route: 'oremi-project' },
  { name: 'Mon Assurance', image: assuranceImage, category: 'Assurance', route: 'mon-assurance-project' },
  { name: 'Carex', image: carexImage, category: 'Santé', route: 'carex-project' },
  { name: 'REMA', image: remaImage, category: 'E-commerce', route: 'rema-project' },
  { name: 'GRH Finance', image: grhImage, category: 'Ressources humaines', route: 'grh-finance-project' },
  { name: 'ETCHITÉ', image: etchiteImage, category: 'Application mobile' },
]

const track = ref<HTMLElement | null>(null)
const canGoBack = ref(false)
const canGoForward = ref(true)

function updateCarouselControls() {
  const element = track.value
  if (!element) return
  canGoBack.value = element.scrollLeft > 2
  canGoForward.value = element.scrollLeft + element.clientWidth < element.scrollWidth - 2
}

function scrollProjects(direction: -1 | 1) {
  const element = track.value
  const card = element?.querySelector<HTMLElement>('.asa-pv-project-card')
  if (!element || !card) return
  const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0
  element.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}
</script>

<template>
  <main class="min-h-screen bg-white pb-22 pt-18 text-[#141414] md:pt-20.5">
    <img
      :src="heroImage"
      alt="Portail ASA Bénin de gestion des procès-verbaux de sinistres"
      class="block aspect-3120/1146 w-full object-cover"
      fetchpriority="high"
    >

    <div class="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
      <header class="border-b border-[#e8e8e8] py-7 md:py-8">
        <h1 class="m-0 font-family-[Neue Haas Grotesk Display Pro] text-[44px] font-semibold leading-[1.1] text-black sm:text-[56px] md:text-7xl">ASA-PV</h1>
        <p class="mb-0 mt-3 font-family-[Neue Haas Grotesk Display Pro] text-[22px] leading-[1.2] text-black md:text-[30px]">ASA Bénin | Gestion des PV de sinistres</p>
      </header>

      <section class="mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:mt-[68px] lg:grid-cols-[.9fr_1.25fr_1fr_.85fr] lg:gap-x-10" aria-label="Informations du projet ASA-PV">
        <div>
          <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-none text-black md:text-[32px]">Industrie</div>
          <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-2xl md:leading-9.5">Assurance</div>
        </div>
        <div>
          <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-none text-black md:text-[32px]">Fonctionnalités</div>
          <div class="mt-3 grid font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-2xl md:leading-9.5">
            <div v-for="feature in features" :key="feature" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
              <div class="size-1 -translate-y-0.75 bg-[#333]"></div>
              <div>{{ feature }}</div>
            </div>
          </div>
        </div>
        <div>
          <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-none text-black md:text-[32px]">Services fournis</div>
          <div class="mt-3 grid font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-2xl md:leading-9.5">
            <div v-for="service in services" :key="service" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
              <div class="size-1 -translate-y-0.75 bg-[#333]"></div>
              <div>{{ service }}</div>
            </div>
          </div>
        </div>
        <div>
          <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-none text-black md:text-[32px]">Plateforme</div>
          <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-2xl md:leading-9.5">Portail web</div>
        </div>
      </section>

      <section class="mt-12 grid gap-5 md:mt-16" aria-label="À propos du projet ASA-PV">
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium text-black md:text-3xl">À propos du projet</div>
        <div class="font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:text-2xl md:leading-9.5">
          Le portail ASA-PV permet de consulter et gérer les procès-verbaux de sinistres de l’ASA Bénin depuis une interface web dédiée.
        </div>
      </section>

      <section class="mt-8 overflow-hidden rounded-lg md:mt-12" aria-label="Portail de connexion ASA-PV">
        <img :src="portalImage" alt="Écran de connexion au portail ASA Bénin de gestion des sinistres" class="block h-auto w-full object-cover" loading="lazy">
      </section>

      <section class="mt-12 grid gap-8 md:mt-16" aria-label="Présentation de la solution ASA-PV">
        <div>
          <div class="mb-4 font-[PP_Neue_Montreal] text-[40px] font-medium leading-tight text-black md:text-[60px] md:leading-none">La solution</div>
          <div class="font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:text-2xl md:leading-9.5">
            Le portail centralise la consultation des PV de sinistres et présente les informations de suivi dans un espace sécurisé destiné aux équipes de l’ASA Bénin.
          </div>
        </div>
        <img :src="heroImage" alt="Interface de gestion des PV de sinistres ASA Bénin" class="block h-auto w-full rounded-lg object-cover" loading="lazy">
      </section>

      <section class="mt-16 border-t border-[#dedede] pt-8 md:mt-[54px] md:pt-[30px]" aria-label="Autres projets">
        <h2 class="mb-5 mt-0 font-family-[Neue Haas Grotesk Display Pro] text-[40px] font-semibold leading-12 tracking-[-0.02em] text-black md:text-[70px] md:leading-20">Autres projets</h2>
        <div class="grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-2 md:grid-cols-[40px_minmax(0,1fr)_40px] md:gap-3">
          <button type="button" class="grid size-9 place-items-center rounded-full border-0 bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white disabled:cursor-default disabled:opacity-40 md:size-10" :disabled="!canGoBack" aria-label="Afficher les projets précédents" @click="scrollProjects(-1)">
            <svg viewBox="0 0 24 24" class="size-4.5 fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
          </button>
          <div ref="track" class="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-[#5c308c]" role="region" aria-label="Autres réalisations" tabindex="0" @scroll.passive="updateCarouselControls">
            <component
              :is="project.route ? 'RouterLink' : 'article'"
              v-for="project in otherProjects"
              :key="project.name"
              :to="project.route ? { name: project.route } : undefined"
              class="asa-pv-project-card flex-[0_0_min(78vw,633.69px)] snap-start text-inherit no-underline md:flex-[0_0_633.69px]"
            >
              <img :src="project.image" :alt="`Projet ${project.name}`" class="block h-[280px] w-full rounded-2xl bg-[#eef4fa] object-cover md:h-[501px]" loading="lazy">
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pt-3">
                <h3 class="m-0 font-[PP_Neue_Montreal] text-[28px] font-medium leading-tight text-black md:text-[32px] md:leading-none">{{ project.name }}</h3>
                <span class="font-[PP_Neue_Montreal] text-xs leading-tight text-[#777] md:text-sm">{{ project.category }}</span>
              </div>
            </component>
          </div>
          <button type="button" class="grid size-9 place-items-center rounded-full border-0 bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white disabled:cursor-default disabled:opacity-40 md:size-10" :disabled="!canGoForward" aria-label="Afficher les projets suivants" @click="scrollProjects(1)">
            <svg viewBox="0 0 24 24" class="size-4.5 fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>
