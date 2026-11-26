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
  { name: 'AFG e-Bank', image: afgBankImage, category: 'Banque et finance', route: 'afg-bank-project' },
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
  <div class="grid py-12 md:py-25">
    <div><img :src="etchite1" alt="Présentation de l’application E-Tchité" class="block h-auto w-full object-cover"></div>
    <div class="mx-4 grid gap-3 pt-5 sm:mx-8 md:mx-16 md:gap-5 lg:mx-30">
      <div class="font-family-[Neue Haas Grotesk Display Pro] text-4xl font-semibold text-[#000000] sm:text-5xl md:text-7xl">E-Tchité</div>
      <div class="font-family-[PP Neue Montreal] text-xl font-medium text-[#000000] sm:text-2xl md:text-4xl">Chambre du Commerce et d’Industrie du Bénin</div>
    </div>
  </div>

  <div class="mx-4 border-t border-[#dedede] pt-8 sm:mx-8 md:mx-16 md:pt-[68px] lg:mx-30" aria-label="Informations du projet E-Tchité">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-x-10">
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Industrie</div>
        <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">Commerce et services</div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Fonctionnalités</div>
        <div class="mt-3 grid gap-y-0 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="feature in ['Gestion des clients', 'Catalogue de produits', 'Facturation', 'Comptabilité', 'Gestion de stock', 'Statistiques']" :key="feature" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-[4px] translate-y-[-3px] bg-[#333]"></div>
            <div>{{ feature }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Services fournis</div>
        <div class="mt-3 grid gap-y-0 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="service in ['Étude et optimisation', 'Design UI/UX', 'Développement mobile et web', 'Déploiement', 'Maintenance']" :key="service" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-[4px] translate-y-[-3px] bg-[#333]"></div>
            <div>{{ service }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Plateforme</div>
        <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">e-tchite.bj</div>
      </div>
    </div>

    <div class="mt-8 grid gap-5 md:mt-0">
      <div class="font-family-[PP Neue Montreal] text-2xl font-medium text-[#000000] md:text-3xl">A propos du client</div>
      <div class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">
        <div v-for="line in about_client" :key="line">{{ line }}</div>
      </div>
      <div class="pt-5 md:pt-10"><img :src="etchite2" alt="Identité visuelle E-Tchité" class="block h-auto w-full max-w-full object-cover"></div>

      <div class="grid items-center justify-center gap-8 md:gap-10">
        <div class="grid gap-5">
          <div class="font-family-[PP Neue Montreal] text-3xl font-medium leading-tight text-[#000000] md:text-5xl md:leading-14">Le problème</div>
          <div class="">
            <div v-for="line in problems" :key="line" class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">{{ line }}</div>
          </div>
        </div>
        <div class="grid gap-5">
          <div class="font-family-[PP Neue Montreal] text-3xl font-medium leading-tight text-[#000000] md:text-5xl md:leading-14">La solution</div>
          <div class="grid">
          <div v-for="line in solutions1" :key="line" class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">{{ line }}</div>
          <div v-for="line in solutions2" :key="line" class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">{{ line }}</div>
          </div>
        </div>
      </div>
      <div class="pt-5 md:pt-10"><img :src="etchite3" alt="Présentation de l’application E-Tchité" class="block h-auto w-full max-w-full object-cover"></div>
      <div class="grid gap-10">
        <div><img :src="etchite4" alt="Écran de gestion E-Tchité" class="block h-auto w-full max-w-full object-cover"></div>
        <div class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">
          <div v-for="line in another" :key="line">{{ line }}</div>
        </div>
        <div><img :src="etchite5" alt="Écrans de l’application E-Tchité" class="block h-auto w-full max-w-full object-cover"></div>
      </div>
    </div>

  </div>


  <main class="min-h-screen bg-white pb-20 pt-10 text-[#141414] md:pt-[82px]">
    <div class="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">
      <section class="mt-14 border-t border-[#dedede] pt-8 md:mt-[54px] md:pt-[30px]" aria-label="Autres projets">
        <div class="mb-5 mt-0 font-family-[PP_Neue_Montreal] text-[32px] font-medium leading-[100%] tracking-[0] text-black">
          Autres projets
        </div>

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
                class="block h-[220px] w-full rounded-2xl bg-[#eef4fa] object-cover sm:h-[280px] md:h-[501px]"
                loading="lazy"
              >
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pt-3">
                <div class="m-0 font-[PP_Neue_Montreal] text-lg font-medium leading-[100%] tracking-[0] text-black md:text-[24px]">{{ project.name }}</div>
                <div class="font-[PP_Neue_Montreal] text-sm font-normal leading-6 tracking-[0.03em] text-[#777] md:text-[24px] md:leading-[38px]">{{ project.category }}</div>
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
