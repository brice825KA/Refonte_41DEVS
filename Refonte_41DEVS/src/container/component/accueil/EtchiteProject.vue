<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'
import remaImage from '@/asset/images/img_rema.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'
import asaPvImage from '@/asset/images/image_asa-pv2.webp'

import etchite1 from '@/asset/images/image_etchite1.webp'
import etchite2 from '@/asset/images/image_etchite2.webp'
import etchite3 from '@/asset/images/image_etchite3.webp'
import etchite4 from '@/asset/images/image_etchite4.webp'
import etchite5 from '@/asset/images/image_etchite5.webp'


const otherProjects = [
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'Oremi', image: oremiImage, category: 'Assurance', route: 'oremi-project' },
  { name: 'Mon Assurance', image: assuranceImage, category: 'Assurance', route: 'mon-assurance-project' },
  { name: 'Carex', image: carexImage, category: 'Santé', route: 'carex-project' },
  { name: 'REMA', image: remaImage, category: 'E-commerce', route: 'rema-project' },
  { name: 'GRH Finance', image: grhImage, category: 'Ressources humaines', route: 'grh-finance-project' },
  { name: 'ASA-PV', image: asaPvImage, category: 'Assurance', route: 'asa-pv-project' },
]

const otherProjectsTrack = ref<HTMLElement | null>(null)
const canScrollBack = ref(false)
const canScrollForward = ref(true)

function updateCarouselControls() {
  const track = otherProjectsTrack.value
  if (!track) return

  canScrollBack.value = track.scrollLeft > 2
  canScrollForward.value = track.scrollLeft + track.clientWidth < track.scrollWidth - 2
}

function scrollOtherProjects(direction: -1 | 1) {
  const track = otherProjectsTrack.value
  const card = track?.querySelector<HTMLElement>('.etchite-related-project')
  if (!track || !card) return

  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
  track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}

const about_client = [
  "La Chambre de Commerce et d’Industrie du Bénin (CCI Bénin) a été créée le 12 avril 1908. Elle assure la",
  "représentation, la protection, et la promotion des intérêts communs des Opérateurs Economiques de la",
  "République du Bénin dans les domaines du Commerce, l’Industrie et des Prestations de services."
]


const problems = [
  "Dans le cadre du projet de digitalisation des Micros, Petites et Moyennes Entreprises au Bénin",
  "dénommé « E-Tchité » fiancé par l’Union Européenne, la CCI Bénin a pris le challenge de doter",
  "les entrepreneurs d’une solution qui permet une meilleure gestion de leurs business."
]

const solutions1 = [
  "E-Tchité Gestion, c’est une application mobile et web qui facilite la gestion du stock, de la",
  "facturation, des paiements, de la comptabilité, les recettes, les clients etc"
]

const solutions2 = [
  "L’application est utilisée aujourd’hui par des milliers de micros, petits et moyens entrepreneurs",
  "à travers tout le Bénin."
]


const another = [
 "E-tchité Gestion offre aux entrepreneurs une plateforme simplifiée pour",
 "gérer leurs entreprises et suivre leurs activités." 
]


</script>

<template>
  <div class="py-25 grid">
    <div class=""><img :src="etchite1" alt=""></div>
    <div class="">
      <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-7xl text-[#000000]">E-Tchité</div>
      <div class="font-family-[PP Neue Montreal] font-medium text-4xl text-[#000000]">Chambre du Commerce et d’Industrie du Bénin</div>
    </div>
  </div>





  <main class="min-h-screen bg-white pb-20 pt-[72px] text-[#141414] md:pt-[82px]">
    <div class="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
      <section class="mt-14 border-t border-[#dedede] pt-8 md:mt-[54px] md:pt-[30px]" aria-label="Autres projets">
        <h1 class="mb-5 mt-0 font-family-[Neue Haas Grotesk Display Pro] text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-black md:text-[70px]">
          Autres projets
        </h1>

        <div class="grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-2 md:grid-cols-[40px_minmax(0,1fr)_40px] md:gap-3">
          <button
            type="button"
            class="grid size-9 place-items-center rounded-full border-0 bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white disabled:cursor-default disabled:opacity-40 md:size-10"
            :disabled="!canScrollBack"
            aria-label="Afficher les projets précédents"
            @click="scrollOtherProjects(-1)"
          >
            <svg viewBox="0 0 24 24" class="size-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
          </button>

          <div
            ref="otherProjectsTrack"
            class="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-[#5c308c]"
            role="region"
            aria-label="Autres réalisations"
            tabindex="0"
            @scroll.passive="updateCarouselControls"
          >
            <component
              :is="project.route ? RouterLink : 'article'"
              v-for="project in otherProjects"
              :key="project.name"
              :to="project.route ? { name: project.route } : undefined"
              class="etchite-related-project flex-[0_0_min(78vw,633px)] snap-start text-inherit no-underline md:flex-[0_0_633px]"
            >
              <img
                :src="project.image"
                :alt="`Projet ${project.name}`"
                class="block h-[280px] w-full rounded-2xl bg-[#eef4fa] object-cover md:h-[501px]"
                loading="lazy"
              >
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pt-3">
                <h2 class="m-0 font-[PP_Neue_Montreal] text-[28px] font-medium leading-tight text-black md:text-[32px]">{{ project.name }}</h2>
                <span class="font-[PP_Neue_Montreal] text-[12px] leading-tight text-[#777] md:text-[14px]">{{ project.category }}</span>
              </div>
            </component>
          </div>

          <button
            type="button"
            class="grid size-9 place-items-center rounded-full border-0 bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white disabled:cursor-default disabled:opacity-40 md:size-10"
            :disabled="!canScrollForward"
            aria-label="Afficher les projets suivants"
            @click="scrollOtherProjects(1)"
          >
            <svg viewBox="0 0 24 24" class="size-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>
