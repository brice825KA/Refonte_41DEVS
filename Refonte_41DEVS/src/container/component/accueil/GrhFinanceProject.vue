<script setup lang="ts">
import { ref } from 'vue'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'
import remaImage from '@/asset/images/img_rema.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'
import asaPvImage from '@/asset/images/image_asa-pv2.webp'

import grh1 from '@/asset/images/image_grh1.webp'
import grh2 from '@/asset/images/image_grh2.webp'
import grh3 from '@/asset/images/image_grh3.webp'
import grh4 from '@/asset/images/image_grh4.webp'
import grh5 from '@/asset/images/image_grh5.webp'
import grh6 from '@/asset/images/image_grh6.webp'
import grh7 from '@/asset/images/image_grh7.webp'


const projects = [
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'Oremi', image: oremiImage, category: 'Assurance', route: 'oremi-project' },
  { name: 'Mon Assurance', image: assuranceImage, category: 'Assurance', route: 'mon-assurance-project' },
  { name: 'Carex', image: carexImage, category: 'Santé', route: 'carex-project' },
  { name: 'REMA', image: remaImage, category: 'E-commerce', route: 'rema-project' },
  { name: 'ETCHITÉ', image: etchiteImage, category: 'Application mobile' },
  { name: 'ASA-PV', image: asaPvImage, category: 'Assurance', route: 'asa-pv-project' },
]

const features = [
  'Gestion du personnel',
  'Gestion des congés et absences',
  'Gestion de la paie',
  'Gestion des marchés publics',
  'Comptabilité',
  'Statistiques',
]

const services = ['Design UI/UX', 'Développement web', 'Déploiement', 'Maintenance']

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
  const card = element?.querySelector<HTMLElement>('.grh-project-card')
  if (!element || !card) return
  const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0
  element.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}

const probleme = [
    "En 2016, le Gouvernement du Bénin a amorcé la transformation digitale de l’administration",
    "publique à travers des projets innovants comme le e-services publics. Logiquement, la",
    "Présidence se devait de digitaliser ses opérations administratives et financières en vue de",
    "mieux les optimiser."
]

const solutions1 = [
    "La plateforme GRH Finances a constitué un projet assez challengeant de par sa complexité et ",
    "aussi des normes de qualité et de sécurité requises pour un client de cette envergure."
]

const solutions2 = [
    "Nos équipes ont oeuvré à mettre en place un ensemble de solutions interopérables qui",
    "permettent aux différents services de la présidence d’optimiser leurs processus."
]


</script>

<template>


<div class="pt-18 md:pt-25">
      <img
        :src="grhImage"
        alt="Tableau de bord de la plateforme de gestion des ressources humaines"
        class="block aspect-[3144/1464] w-full object-cover"
        fetchpriority="high"
      >
    </div>
    <div class="mx-4 grid gap-2 sm:mx-8 md:mx-16 md:gap-3 lg:mx-30">
      <div class="font-family-[Neue Haas Grotesk Display Pro] text-[44px] font-semibold leading-[1.1] text-[#000000] sm:text-[56px] md:text-7xl">GRH Finances</div>
      <div class="font-family-[Neue Haas Grotesk Display Pro] text-[20px] leading-[1.2] text-black sm:text-[24px] md:text-[30px]">Présidence de la République du Bénin</div>
    </div>
    <div class="mx-4 mt-12 h-px bg-[#d9d9d9] sm:mx-8 md:mx-16 lg:mx-30 md:mt-[68px]"></div>
    <div class="mx-4 mt-10 grid grid-cols-1 gap-y-8 sm:mx-8 md:mx-16 md:grid-cols-2 md:gap-x-8 lg:mx-30 lg:mt-[68px] lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-x-10">
      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Industrie</div>
        <div class="mt-3 font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:mt-5 md:text-[24px] md:leading-[38px]">Secteur public</div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Fonctionnalités</div>
        <div class="mt-3 grid gap-y-0 font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="feature in features" :key="feature" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-[4px] translate-y-[-3px] bg-[#333333]"></div>
            <div>{{ feature }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Services fournis</div>
        <div class="mt-3 grid gap-y-0 font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="service in services" :key="service" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-[4px] translate-y-[-3px] bg-[#333333]"></div>
            <div>{{ service }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium leading-none text-[#000000] md:text-[32px]">Plateforme</div>
      </div>
    </div>

    <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-30">
      <div class="grid justify-center gap-5 md:gap-5 lg:gap-5">
        <div class="font-[PP_Neue_Montreal] text-[24px] font-medium text-[#000000] md:text-3xl">A propos du client</div>
        <div class="font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:text-[24px] md:leading-[38px]">
                <div>La Présidence est la plus haute structure publique de l’Etat Béninois. Elle dispose en son sein de multiples</div>
                <div>services opérationnels en charge de son bon fonctionnement.</div>
            </div>
            <img
                :src="grh2"
                alt="Tableau de bord de la plateforme de gestion des ressources humaines"
                class="block h-auto w-full object-cover"
                fetchpriority="high">
        </div>
        <div class="mt-10 grid min-w-0 justify-center gap-5">
          <div class="font-[PP_Neue_Montreal] text-[24px] font-medium text-[#000000] md:text-3xl">Problématique</div>
          <div class="min-w-0 break-words font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:text-[24px] md:leading-[38px]">
                <div v-for="line in probleme" :key="line">{{ line }}</div>
            </div>
            <div class="mt-10 grid min-w-0 justify-center gap-5">
              <div class="font-[PP_Neue_Montreal] text-[24px] font-medium text-[#000000] md:text-3xl">Solutions</div>
              <div class="min-w-0 break-words font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] tracking-[0.03em] text-[#333333] md:text-[24px] md:leading-[38px]">
                    <div v-for="line in solutions1" :key="line">{{ line }}</div>
                <div class="mt-10">
                    <div v-for="line in solutions2" :key="line" class="">{{ line }}</div>
                </div>
                </div>
            </div>
            <img
                    :src="grh3"
                    alt="Tableau de bord de la plateforme de gestion des ressources humaines"
                    class="block h-auto w-full object-cover"
                    fetchpriority="high">
        </div>
        <div class="mt-10 grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 md:gap-10">
          <div><img :src="grh4" alt="Tableau de bord de la plateforme de gestion des ressources humaines" class="block h-auto w-full"></div>
          <div><img :src="grh5" alt="Tableau de bord de la plateforme de gestion des ressources humaines" class="block h-auto w-full"></div>
        </div>
        <div class="mx-4 grid gap-5 py-10 sm:mx-8 md:mx-16 lg:mx-90 lg:gap-10">
          <div><img :src="grh6" alt="" class="block h-auto w-full"></div>
          <div class="mt-5 font-[PP_Neue_Montreal] text-[18px] font-normal leading-[29px] text-[#000000] md:mt-10 md:text-2xl md:leading-[38px]">
            <div>GRH Finances optimise la gestion administrative, financière et des </div>
            <div>ressources humaines en se conformant aux normes propres à </div>
            <div>l’administration publique.</div>
            </div>
        </div>
        <div class="mx-4 grid gap-5 py-10 sm:mx-8 md:mx-16 lg:mx-50 lg:gap-10">
          <div><img :src="grh7" alt="" class="block h-auto w-full"></div>
            </div>
    </div>


  <main class="min-h-screen bg-white pb-22 pt-[72px] text-[#141414] md:pt-[82px]">
    <div class="mx-auto w-[calc(100%-32px)] max-w-[1180px] md:w-[calc(100%-48px)]">

      <section class="mt-12 border-t border-[#dedede] pt-8 md:mt-[54px] md:pt-[30px]" aria-label="Autres projets">
        <h2 class="mb-5 mt-0 font-family-[Neue Haas Grotesk Display Pro] text-[40px] font-semibold leading-[48px] tracking-[-0.02em] text-black md:text-[70px] md:leading-[80px]">Autres projets</h2>

        <div class="grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-2 md:grid-cols-[40px_minmax(0,1fr)_40px] md:gap-3">
          <button
            type="button"
            class="grid size-9 place-items-center rounded-full border-0 bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white disabled:cursor-default disabled:opacity-40 md:size-10"
            :disabled="!canGoBack"
            aria-label="Afficher les projets précédents"
            @click="scrollProjects(-1)"
          >
            <svg viewBox="0 0 24 24" class="size-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
          </button>

          <div
            ref="track"
            class="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-[#5c308c]"
            role="region"
            aria-label="Autres réalisations"
            tabindex="0"
            @scroll.passive="updateCarouselControls"
          >
            <component
              :is="project.route ? 'RouterLink' : 'article'"
              v-for="project in projects"
              :key="project.name"
              :to="project.route ? { name: project.route } : undefined"
              class="grh-project-card flex-[0_0_min(78vw,633.69px)] snap-start text-inherit no-underline md:flex-[0_0_633.69px]"
            >
              <img :src="project.image" :alt="`Projet ${project.name}`" class="block h-[280px] w-full rounded-2xl bg-[#eef4fa] object-cover md:h-[501px]" loading="lazy">
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pt-3">
                <h3 class="m-0 font-[PP_Neue_Montreal] text-[28px] font-medium leading-tight text-black md:text-[32px] md:leading-none">{{ project.name }}</h3>
                <span class="font-[PP_Neue_Montreal] text-[12px] leading-tight text-[#777] md:text-[14px]">{{ project.category }}</span>
              </div>
            </component>
          </div>

          <button
            type="button"
            class="grid size-9 place-items-center rounded-full border-0 bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white disabled:cursor-default disabled:opacity-40 md:size-10"
            :disabled="!canGoForward"
            aria-label="Afficher les projets suivants"
            @click="scrollProjects(1)"
          >
            <svg viewBox="0 0 24 24" class="size-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>
