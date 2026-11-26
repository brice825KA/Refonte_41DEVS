<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import afgImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'
import remaImage from '@/asset/images/img_rema.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import asaPvImage from '@/asset/images/image_asa-pv2.webp'
import ohoImage from '@/asset/images/image_oho2.webp'
import expertSecuImage from '@/asset/images/image_exp_secu2.webp'
import veepImage from '@/asset/images/image_veep2.webp'

type ProjectId =
  | 'afg-bank-project'
  | 'oremi-project'
  | 'mon-assurance-project'
  | 'carex-project'
  | 'rema-project'
  | 'grh-finance-project'
  | 'etchite-project'
  | 'asa-pv-project'
  | 'oho-erp-project'
  | 'expert-secu-project'
  | 'veep-project'

const props = defineProps<{ currentProject: ProjectId }>()
const router = useRouter()

const projects: { name: string; category: string; image: string; route: ProjectId }[] = [
  { name: 'AFG e-Bank', category: 'Banque et finance', image: afgImage, route: 'afg-bank-project' },
  { name: 'Oremi', category: 'Assurance', image: oremiImage, route: 'oremi-project' },
  { name: 'Mon Assurance', category: 'Assurance', image: assuranceImage, route: 'mon-assurance-project' },
  { name: 'Carex', category: 'Santé', image: carexImage, route: 'carex-project' },
  { name: 'REMA', category: 'E-commerce', image: remaImage, route: 'rema-project' },
  { name: 'GRH Finance', category: 'Ressources humaines', image: grhImage, route: 'grh-finance-project' },
  { name: 'ETCHITÉ', category: 'Application mobile', image: etchiteImage, route: 'etchite-project' },
  { name: 'ASA-PV', category: 'Assurance', image: asaPvImage, route: 'asa-pv-project' },
  { name: 'OHO Les lunettes ERP', category: 'ERP et gestion commerciale', image: ohoImage, route: 'oho-erp-project' },
  { name: 'ExpertSecu', category: 'Sécurité', image: expertSecuImage, route: 'expert-secu-project' },
  { name: 'Veep', category: 'Divertissement', image: veepImage, route: 'veep-project' },
]

const track = ref<HTMLElement | null>(null)
const canScrollBack = ref(false)
const canScrollForward = ref(false)

const otherProjects = () => projects.filter((project) => project.route !== props.currentProject)

function updateControls() {
  const element = track.value
  if (!element) return

  canScrollBack.value = element.scrollLeft > 2
  canScrollForward.value = element.scrollLeft + element.clientWidth < element.scrollWidth - 2
}

function scrollProjects(direction: -1 | 1) {
  const element = track.value
  const card = element?.querySelector<HTMLElement>('.project-carousel-card')
  if (!element || !card) return

  const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0
  element.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}

function handleCardKeydown(event: KeyboardEvent, route: ProjectId) {
  if (event.key !== 'Enter' && event.key !== ' ') return
  event.preventDefault()
  void router.push({ name: route })
}

function handleControlKeydown(event: KeyboardEvent, direction: -1 | 1) {
  if (event.key !== 'Enter' && event.key !== ' ') return
  event.preventDefault()
  scrollProjects(direction)
}

onMounted(() => {
  updateControls()
  window.addEventListener('resize', updateControls)
})

onBeforeUnmount(() => window.removeEventListener('resize', updateControls))
</script>

<template>
  <div class="min-h-[55vh] bg-white pb-16 pt-[90px] text-[#141414] sm:pb-20">
    <div class="mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]">
      <div class="mt-4 border-t border-[#dedede] pt-8 md:mt-[54px] md:pt-[30px]" aria-label="Autres projets">
        <div class="mb-5 font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] text-black md:text-[32px]">Autres projets</div>

        <div class="grid grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-2 md:grid-cols-[40px_minmax(0,1fr)_40px] md:gap-3">
          <div
            class="grid size-9 cursor-pointer place-items-center rounded-full bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white md:size-10"
            :class="{ 'cursor-default opacity-40': !canScrollBack }"
            role="button"
            :aria-disabled="!canScrollBack"
            aria-label="Afficher les projets précédents"
            tabindex="0"
            @click="scrollProjects(-1)"
            @keydown="handleControlKeydown($event, -1)"
          >
            <svg viewBox="0 0 24 24" class="size-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
          </div>

          <div
            ref="track"
            class="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-[#5c308c] sm:gap-6"
            role="region"
            aria-label="Autres réalisations"
            tabindex="0"
            @scroll.passive="updateControls"
          >
            <div
              v-for="project in otherProjects()"
              :key="project.route"
              class="project-carousel-card flex-[0_0_min(82vw,633px)] snap-start cursor-pointer text-inherit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5c308c] sm:flex-[0_0_min(78vw,633px)] md:flex-[0_0_633px]"
              role="link"
              :aria-label="`Voir le projet ${project.name}`"
              tabindex="0"
              @click="router.push({ name: project.route })"
              @keydown="handleCardKeydown($event, project.route)"
            >
              <img
                :src="project.image"
                :alt="`Projet ${project.name}`"
                class="block aspect-[1.62] w-full rounded-2xl bg-[#eef4fa] object-cover sm:aspect-[1.42]"
                loading="lazy"
              >
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pt-3">
                <div class="font-[PP_Neue_Montreal] text-lg font-medium leading-[100%] text-black sm:text-xl md:text-[24px]">{{ project.name }}</div>
                <div class="font-[PP_Neue_Montreal] text-sm font-normal leading-6 tracking-[0.03em] text-[#777] md:text-[18px]">{{ project.category }}</div>
              </div>
            </div>
          </div>

          <div
            class="grid size-9 cursor-pointer place-items-center rounded-full bg-[#f7f0ff] text-[#5c308c] transition-colors hover:bg-[#5c308c] hover:text-white md:size-10"
            :class="{ 'cursor-default opacity-40': !canScrollForward }"
            role="button"
            :aria-disabled="!canScrollForward"
            aria-label="Afficher les projets suivants"
            tabindex="0"
            @click="scrollProjects(1)"
            @keydown="handleControlKeydown($event, 1)"
          >
            <svg viewBox="0 0 24 24" class="size-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
