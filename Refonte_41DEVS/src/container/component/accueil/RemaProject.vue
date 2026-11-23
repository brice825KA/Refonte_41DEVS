<script setup lang="ts">
import { ref } from 'vue'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'

const otherProjects = [
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'Oremi', image: oremiImage, category: 'Assurance', route: 'oremi-project' },
  { name: 'Mon Assurance', image: assuranceImage, category: 'Assurance', route: 'mon-assurance-project' },
  { name: 'Carex', image: carexImage, category: 'Santé', route: 'carex-project' },
  { name: 'ETCHITÉ', image: etchiteImage, category: 'Application mobile' },
]

const track = ref<HTMLElement | null>(null)
const canBack = ref(false)
const canForward = ref(true)

function updateControls() {
  if (!track.value) return
  canBack.value = track.value.scrollLeft > 2
  canForward.value = track.value.scrollLeft + track.value.clientWidth < track.value.scrollWidth - 2
}

function scrollProjects(direction: -1 | 1) {
  const card = track.value?.querySelector<HTMLElement>('.rema-related-project')
  if (!track.value || !card) return
  const gap = Number.parseFloat(getComputedStyle(track.value).columnGap) || 0
  track.value.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}
</script>

<template>
  <main class="min-h-screen pt-[82px] pb-[88px] bg-white text-[#141414]">
    <div class="w-[calc(100%-32px)] max-w-[1180px] mx-auto md:w-[calc(100%-48px)]">
      <section class="mt-[54px] pt-[30px] border-t border-[#dedede]">
        <h1 class="mb-[20px] m-0 font-sans text-[24px] font-semibold leading-[1.25]">Autres projets</h1>
        <div class="grid grid-cols-[34px_minmax(0,1fr)_34px] md:grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-[8px] md:gap-[12px]">
          <button
            type="button"
            class="grid w-[34px] h-[34px] md:w-[40px] md:h-[40px] place-items-center rounded-full border-0 text-[#087ac7] bg-[#edf7ff] cursor-pointer disabled:opacity-[.35] disabled:cursor-default"
            :disabled="!canBack"
            aria-label="Voir les projets précédents"
            @click="scrollProjects(-1)"
          >
            <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
          </button>

          <div
            ref="track"
            class="flex gap-[24px] overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            tabindex="0"
            aria-label="Autres réalisations"
            @scroll.passive="updateControls"
          >
            <component
              :is="project.route ? 'RouterLink' : 'article'"
              v-for="project in otherProjects"
              :key="project.name"
              :to="project.route ? { name: project.route } : undefined"
              class="rema-related-project flex-[0_0_clamp(230px,28vw,330px)] min-w-0 text-inherit no-underline snap-start"
            >
              <img :src="project.image" :alt="`Projet ${project.name}`" class="block w-full aspect-[1.35] rounded-[6px] object-cover bg-[#eef0fa]" loading="lazy">
              <div class="flex items-baseline justify-between gap-[8px] pt-[10px]">
                <h2 class="m-0 font-sans text-[15px] font-semibold">{{ project.name }}</h2>
                <span class="text-[11px] text-[#777]">{{ project.category }}</span>
              </div>
            </component>
          </div>

          <button
            type="button"
            class="grid w-[34px] h-[34px] md:w-[40px] md:h-[40px] place-items-center rounded-full border-0 text-[#087ac7] bg-[#edf7ff] cursor-pointer disabled:opacity-[.35] disabled:cursor-default"
            :disabled="!canForward"
            aria-label="Voir les projets suivants"
            @click="scrollProjects(1)"
          >
            <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>
