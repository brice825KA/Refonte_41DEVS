<script setup lang="ts">
import { ref } from 'vue'
import asa1 from '@/asset/images/image_asa-pv1.webp'
import asa2 from '@/asset/images/image_asa-pv2.webp'
import asa3 from '@/asset/images/image_asa-pv3.webp'
import asa4 from '@/asset/images/image_asa-pv4.webp'
import asa5 from '@/asset/images/image_asa-pv5.webp'
import asa6 from '@/asset/images/image_asa-pv6.webp'
import asa7 from '@/asset/images/image_asa-pv7.webp'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'
import remaImage from '@/asset/images/img_rema.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'

const features = [
  'Transmission des PV de sinistres',
  'Gestion des PV',
  'Comptabilité',
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

const client = [
  "L’Association des Sociétés d’Assurance du Bénin (ASA-Bénin) a été créée le 12 février 1999 à Cotonou. Elle",
  "est une organisation professionnelle qui réunit plus de treize (13) compagnies d’assurance dont 7 compagnies",
  "de la branche non-Vie et 6 de la branche Vie."
]

const problems = [
  "La gestion des sinistres fait partie des services offerts par les compagnies d’assurance à leurs",
  "clients. Afin de faciliter la transmission des procès-verbaux (PV) et optimiser les délais de",
  "traitement des sinistres, l’ASA Benin a voulu doter ses membres d’une solution digitale qui",
  "centralise la gestion desdits PV."
]

const solutions = [
  "Asa-PV est une application web complète qui offre aux commissariats, compagnies",
  "d’assurance une plateforme unique pour assurer en quelques clics la transmission des PV, les",
  "règlements financiers ainsi que des statistiques en temps réels."
]

const unknow = [
  "Avec Asa-PV les agents de constats d’accidents peuvent transmettre en quelques",
  "secondes leurs PV aux assureurs et obtenir leurs règlements financiers."
]

</script>

<template>

<div class="overflow-hidden bg-white">
  <div class="pt-18 md:pt-25"><img :src="asa1" alt="Présentation du portail ASA-PV" class="block h-auto w-full object-cover"></div>
  <div class="mx-4 py-8 sm:mx-8 md:mx-16 md:py-10 lg:mx-30">
    <div class="grid gap-5">
      <div class="font-family-[Neue Haas Grotesk Display Pro] text-[44px] font-semibold leading-[1.1] text-[#000000] sm:text-[56px] md:text-7xl">Asa-PV</div>
      <div class="font-family-[PP Neue Montreal] text-[24px] font-medium leading-[1.15] text-[#000000] sm:text-[30px] md:text-4xl md:leading-[100%]">Association des Sociétés d’Assurance Bénin</div>
    </div>
  </div>

  <div id="Description" class="mx-4 mt-8 border-t border-[#d9d9d9] pt-8 sm:mx-8 md:mx-16 md:mt-10 md:pt-12 lg:mx-30 lg:mt-14 lg:pt-16">
    <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-x-10">
      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Industrie</div>
        <div class="mt-3 font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:mt-5 md:text-[24px] md:leading-[38px]">Assurance</div>
      </div>

      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Fonctionnalités</div>
        <div class="mt-3 grid font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="feature in features" :key="feature" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-1 -translate-y-0.75 bg-[#333333]"></div>
            <div>{{ feature }}</div>
          </div>
        </div>
      </div>

      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Services fournis</div>
        <div class="mt-3 grid font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="service in services" :key="service" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-1 -translate-y-0.75 bg-[#333333]"></div>
            <div>{{ service }}</div>
          </div>
        </div>
      </div>

      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Plateforme</div>
        <div class="mt-3 inline-flex items-center gap-2 font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div>pv.asabenin.org</div>
          <svg viewBox="0 0 16 16" class="size-4 shrink-0 fill-none stroke-current stroke-[1.4]" aria-hidden="true">
            <path d="M9 2h5v5M14 2 7 9M12 9v4H3V4h4" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="grid gap-5 px-4 py-5 sm:px-8 md:px-16 lg:px-30">
      <div class="font-family-[PP Neue Montreal] text-[24px] font-medium text-[#000000] md:text-3xl">A propos du client</div>
      <div class="font-family-[PP Neue Montreal] text-[18px] font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">
        <div v-for="line in client" :key="line">{{ line }}</div>
      </div>
    </div>
    <div class="px-4 py-5 sm:px-8 md:px-16 lg:px-30">
      <div><img :src="asa2" alt="Présentation du portail ASA-PV" class="block h-auto w-full object-cover"></div>
    </div>

    <div class="mx-4 grid gap-10 sm:mx-8 md:mx-16 lg:mx-30">
      <div class="mx-auto grid w-full max-w-[1100px] gap-5">
        <div class="font-family-[PP Neue Montreal] text-[40px] font-medium leading-tight text-[#000000] md:text-6xl md:leading-16">Le problème</div>
        <div class="font-family-[PP Neue Montreal] text-[18px] font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">
          <div class="" v-for="line in problems" :key="line">{{ line }}</div>
        </div>
      </div>

      <div class="mx-auto grid w-full max-w-[1100px] gap-5">
        <div class="font-family-[PP Neue Montreal] text-[40px] font-medium leading-tight text-[#000000] md:text-6xl md:leading-16">La solution</div>
        <div class="font-family-[PP Neue Montreal] text-[18px] font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">
          <div class="" v-for="line in solutions" :key="line">{{ line }}</div>
        </div>
      </div>
    </div>

    <div class="mx-4 grid items-center justify-center gap-8 py-8 sm:mx-8 md:mx-16 md:gap-10 md:py-10 lg:mx-30">
      <div><img :src="asa3" alt="Écran de gestion ASA-PV" class="block h-auto w-full object-cover"></div>
      <div class="gap-5 md:gap-10 flex">
        <div><img :src="asa4" alt="Écran du portail ASA-PV" class=""></div>
        <div><img :src="asa5" alt="Écran du portail ASA-PV" class=""></div>
      </div>
    </div>

    <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-100">
      <div class="relative left-0 lg:left-60"><img class="" :src="asa6" alt="Vue d’ensemble ASA-PV"></div>
      <div class="relative left-0 pt-5 font-family-[PP Neue Montreal] text-[18px] font-normal leading-[29px] text-[#333333] md:pt-10 md:text-2xl md:leading-9 lg:left-60">
        <div v-for="line in unknow" :key="line">{{ line }}</div>
      </div>
    </div>
    <div class="mx-4 flex items-center justify-center pt-8 sm:mx-8 md:mx-16 md:pt-10 lg:mx-30"><img :src="asa7" alt="Vue complémentaire du portail ASA-PV" class="block h-auto w-full object-cover"></div>
  </div>

</div>


  <main class="min-h-screen bg-white pb-22 pt-18 text-[#141414] md:pt-20.5">
    <div class="mx-auto w-[calc(100%-32px)] max-w-[1572px] md:w-[calc(100%-48px)]">
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
