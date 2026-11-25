<script setup lang="ts">
import { ref } from 'vue'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import rema1Image from '@/asset/images/img_rema1.webp'
import rema2Image from '@/asset/images/img_rema.webp'
import rema3Image from '@/asset/images/image_rema8.webp'
import rema4Image from '@/asset/images/image_rema5.webp'
import rema5Image from '@/asset/images/image_rema4.webp'
import rema6Image from '@/asset/images/image_rema7.webp'
import rema7Image from '@/asset/images/image_rema9.webp'
import rema8Image from '@/asset/images/image_rema10.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'
import asaPvImage from '@/asset/images/image_asa-pv2.webp'

const otherProjects = [
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'Oremi', image: oremiImage, category: 'Assurance', route: 'oremi-project' },
  { name: 'Mon Assurance', image: assuranceImage, category: 'Assurance', route: 'mon-assurance-project' },
  { name: 'Carex', image: carexImage, category: 'Santé', route: 'carex-project' },
  { name: 'ETCHITÉ', image: etchiteImage, category: 'Application mobile' },
  { name: 'GRH Finance', image: grhImage, category: 'Finance', route: 'grh-finance-project' },
  { name: 'ASA-PV', image: asaPvImage, category: 'Assurance', route: 'asa-pv-project' },
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

const features = ['Réseau social', 'E-learning', 'Jobboard', 'Bibliothèque', 'Campagnes publicitaires']
const services = ['Branding', 'Design UI/UX', 'Développement mobile et web', 'Déploiement', 'Maintenance', 'Infrastructure cloud']

const a_propos =[
  "REMA Medical Technologies est une Health tech béninoise ayant mis en place le premier réseau social pour",
  "professionnels de santé en Afrique. L’entreprise présente dans la plusieurs pays de la région africaine ",
  "africaine a remporté de nombreux prix d’innovation au plan international."
]

const probleme = [
  "Le défi à relever était de concrétiser la vision de l’entreprise à doter les professionnels de santé",
  "d’un ensemble de solutions digitales pour renforcer leurs compétences et lutter contre les",
  "erreurs médicales."
]

const solution = [
  "En 2018 nous avons conçu l’application Rema, 1er réseau social pour professionnels de santé",
  "en Afrique. Le succès de cette innovation a permis la mise en place de plusieurs autres",
  "applications:"
]

const dot_solution = [
  "Une application web de cours en ligne : Rema Learning",
  "Une application web d’offres d’emploi : Rema Jobs",
  "Une application web de téléconseil en pharmacie: Rema Pharma",
  "Un Dashboard administrateur"
]

</script>

<template>
  <div class="overflow-hidden bg-white">
    <div class="pt-20 md:pt-25"><img :src="rema1Image" alt="Projet Rema1" class="block w-full object-cover"></div>
    <div class="pt-8 px-4 sm:px-8 md:px-16 lg:px-30 gap-5 grid">
      <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-7xl text-[#000000]">Rema</div>
      <div class="font-family-[Neue Haas Grotesk Display Pro] font-normal text-3xl text-[#000000]">REMA Medical Technologies</div>
    </div>
    <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-5 h-px bg-[#CECECE]"></div>
    <section class="mx-4 sm:mx-8 md:mx-16 lg:mx-30 mt-10 md:mt-[68px] grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-x-10" aria-label="Informations du projet Rema">
      <div>
        <h2 class="m-0 font-sans text-[32px] font-medium leading-none text-[#000000]">Industrie</h2>
        <p class="mt-5 mb-0 font-sans text-[24px] font-normal leading-[38px] tracking-[0.03em] text-[#333333]">
          Santé et Industrie<br>pharmaceutique
        </p>
      </div>
      <div>
        <h2 class="m-0 font-sans text-[32px] font-medium leading-none text-[#000000]">Fonctionnalités</h2>
        <ul class="mt-5 mb-0 list-[square] pl-7 font-sans text-[24px] font-normal leading-[38px] tracking-[0.03em] text-[#333333]">
          <li v-for="feature in features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
      <div>
        <h2 class="m-0 font-sans text-[32px] font-medium leading-none text-[#000000]">Services fournis</h2>
        <ul class="mt-5 mb-0 list-[square] pl-7 font-sans text-[24px] font-normal leading-[38px] tracking-[0.03em] text-[#333333]">
          <li v-for="service in services" :key="service">{{ service }}</li>
        </ul>
      </div>
      <div>
        <h2 class="m-0 font-sans text-[32px] font-medium leading-none text-[#000000]">Plateforme</h2>
        <a href="https://remaapp.com" target="_blank" rel="noreferrer" class="mt-5 inline-flex items-center gap-3 font-sans text-[24px] font-normal leading-[38px] tracking-[0.03em] text-[#333333] underline underline-offset-2">
          remaapp.com
          <svg viewBox="0 0 16 16" class="h-5 w-5 shrink-0 fill-none stroke-current stroke-[1.4]" aria-hidden="true">
            <path d="M9 2h5v5M14 2 7 9M12 9v4H3V4h4" />
          </svg>
        </a>
      </div>
    </section>
    <div class="grid pt-5">
      <div class="mx-30 font-family-[PP Neue Montreal] font-medium text-3xl leading-[100%] text-[#000000]">A propos du client</div>
      <div class="mx-30 mt-5 grid gap-y-2 font-sans text-[24px] font-normal leading-[38px] tracking-[0.03em] text-[#333333]">
        <div v-for="(line, index) in a_propos" :key="index">{{ line }}</div>
      </div>
    </div>
    <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-40 pt-12 md:pt-20 items-center grid justify-center">
      <img :src="rema2Image" alt="Projet Rema2" class="block w-full h-auto object-cover">
    </div>
    <div class="pt-10" id="Probleme-Solution">
      
      <div class="justify-center items-center grid gap-5">
        <div class="font-familly-[PP Neue Montreal] font-medium text-6xl text-[#000000]">Le problème</div>
        <div class="font-family-[PP Neue Montreal] font-normal text-2xl text-[#333333]">
          <div v-for="(line, index) in probleme" :key="index">{{ line }}</div>
        </div>
      </div>

      <div class="justify-center items-center grid gap-5 pt-10">
        <div class="font-familly-[PP Neue Montreal] font-medium text-6xl text-[#000000]">La solution</div>
        <div class="font-family-[PP Neue Montreal] font-normal text-2xl text-[#333333]">
          <div v-for="(line, index) in solution" :key="index">{{ line }}</div>
        </div>
        <ul class="mt-5 list-disc pl-7 font-family-[PP Neue Montreal] font-normal text-2xl leading-[38px] tracking-[0.03em] text-[#333333]">
          <li v-for="(line, index) in dot_solution" :key="index">{{ line }}</li>
        </ul>
      </div>

      <div class="flex justify-center gap-5 pt-10">
        <div class="pt-20 grid gap-10">
          <img :src="rema4Image" alt="Projet Rema4" class="">
          <img :src="rema5Image" alt="Projet Rema5" class="">
        </div>
        <div class="pt-20 grid gap-10">
          <img :src="rema3Image" alt="Projet Rema3" class="">
          <img :src="rema6Image" alt="Projet Rema6" class="">
        </div>
      </div>
      <div class="mx-40 pt-20 items-center grid justify-center">
        <img :src="rema7Image" alt="Projet Rema7" class="">
        <div class="pt-5 font-family-[PP Neue Montreal] font-normal text-2xl text-[#333333]">
          <div class="">Des dizaines de milliers de professionnels de santés en Afrique échangent</div>
          <div class="">chaque jour sur des cas cliniques grâce à Rema.</div>
        </div>
        </div>
        <div class="mx-40 pt-20 items-center grid justify-center">
          <img :src="rema8Image" alt="Projet Rema8" class="block w-[1560px] h-[861.1597290039062px] object-cover">
        </div>
      </div>

  </div>



  <main class="min-h-screen pt-[82px] pb-[88px] bg-white text-[#141414]">
    <div class="w-[calc(100%-32px)] max-w-[1180px] mx-auto md:w-[calc(100%-48px)]">
      <section class="mt-[54px] pt-[30px] border-t border-[#dedede]">
        <h1 class="mb-[20px] m-0 font-[Neue_Haas_Grotesk_Display_Pro] text-[40px] md:text-[70px] font-semibold leading-[48px] md:leading-[80px] tracking-[-0.02em] text-[#000000]">Autres projets</h1>
        <div class="relative grid grid-cols-[34px_minmax(0,1fr)_34px] md:grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-[8px] md:gap-[12px]">
          <button
            type="button"
            class="z-10 grid w-[34px] h-[34px] md:w-[40px] md:h-[40px] place-items-center rounded-full border-0 text-[#087ac7] bg-[#edf7ff] cursor-pointer disabled:opacity-[.35] disabled:cursor-default"
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
              class="rema-related-project flex-[0_0_633.6906127929688px] max-md:flex-[0_0_calc(100%-16px)] min-w-0 text-inherit no-underline snap-start"
            >
              <img :src="project.image" :alt="`Projet ${project.name}`" class="block w-full h-[501px] max-md:h-[280px] rounded-[16px] object-cover bg-[#eef0fa]" loading="lazy">
              <div class="flex items-baseline justify-between gap-[8px] pt-[12px]">
                <h2 class="m-0 font-[PP_Neue_Montreal] text-[32px] font-medium leading-none text-[#000000]">{{ project.name }}</h2>
                <span class="text-[16px] text-[#333333]">{{ project.category }}</span>
              </div>
            </component>
          </div>

          <button
            type="button"
            class="z-10 grid w-[34px] h-[34px] md:w-[40px] md:h-[40px] place-items-center rounded-full border-0 text-[#087ac7] bg-[#edf7ff] cursor-pointer disabled:opacity-[.35] disabled:cursor-default"
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
