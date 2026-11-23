<script setup lang="ts">
import { ref } from 'vue'
import heroImage from '@/asset/images/carex3.webp'
import clientBanner from '@/asset/images/carex2.webp'
import calendarImage from '@/asset/images/carex4.webp'
import onboardingImage from '@/asset/images/carex5.webp'
import forumImage from '@/asset/images/carex6.webp'
import finalScreensImage from '@/asset/images/carex7.webp'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import carexPhoto from '@/asset/images/careX.webp'

const features = ['Forums', 'Messagerie privée', 'Rappels de prise', 'Articles et astuces', 'Calendrier menstruel', 'Suivi personnalisé']
const services = ['Audit', 'Recherche UX', 'Design UI/UX', 'Développement web', 'Développement mobile', 'Maintenance']

const relatedProjects = [
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'Oremi', image: oremiImage, category: 'Assurance', route: 'oremi-project' },
  { name: 'Mon Assurance', image: assuranceImage, category: 'Assurance', route: 'mon-assurance-project' },
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
  const card = track.value?.querySelector<HTMLElement>('.carex-related-project')
  if (!track.value || !card) return
  const gap = Number.parseFloat(getComputedStyle(track.value).columnGap) || 0
  track.value.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}
</script>

<template>
  <main class="min-h-screen pt-[72px] pb-[88px] bg-white text-[#141414] md:pt-[82px]">
    <figure class="w-full m-0 overflow-hidden bg-[#f9afb9]">
      <img :src="heroImage" alt="Carex, l’application de suivi menstruel" class="block w-full aspect-[1920/686] object-cover object-center max-md:min-h-[220px]" fetchpriority="high">
    </figure>

    <div class="w-[calc(100%-32px)] max-w-[1180px] mx-auto md:w-[calc(100%-48px)]">
      <header class="py-[26px] border-b border-[#e8e8e8]">
        <h1 class="m-0 font-sans text-[34px] md:text-[34px] font-semibold leading-[1.15]">Carex</h1>
        <p class="m-0 mt-[7px] text-[16px] text-[#414141]">Application digitale pour le bien-être féminin</p>
      </header>

      <section class="grid grid-cols-2 gap-x-[18px] gap-y-[24px] py-[32px] border-b border-[#e8e8e8] md:grid-cols-[.9fr_1.25fr_1fr_.8fr] md:gap-x-[30px] md:py-[32px_38px]" aria-label="Informations du projet Carex">
        <div>
          <h2 class="m-0 font-sans text-[17px] font-semibold">Industrie</h2>
          <p class="mt-[7px] m-0 font-sans text-[14px] leading-[1.65] text-[#666]">Santé</p>
        </div>
        <div>
          <h2 class="m-0 font-sans text-[17px] font-semibold">Fonctionnalités</h2>
          <ul class="mt-[7px] mb-0 pl-[17px] font-sans text-[14px] leading-[1.65] text-[#666]">
            <li v-for="feature in features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div>
          <h2 class="m-0 font-sans text-[17px] font-semibold">Services fournis</h2>
          <ul class="mt-[7px] mb-0 pl-[17px] font-sans text-[14px] leading-[1.65] text-[#666]">
            <li v-for="service in services" :key="service">{{ service }}</li>
          </ul>
        </div>
        <div>
          <h2 class="m-0 font-sans text-[17px] font-semibold">Plateforme</h2>
          <p class="mt-[7px] m-0 font-sans text-[14px] leading-[1.65] text-[#666]">Application mobile</p>
        </div>
      </section>

      <section class="max-w-[820px] py-[34px_28px]">
        <h2 class="m-0 font-sans text-[17px] font-semibold">À propos du projet</h2>
        <p class="mt-[9px] mb-0 font-sans text-[14px] leading-[1.65] text-[#666]">
          Carex est une plateforme digitale qui accompagne les femmes dans le suivi de leur santé et de leur bien-être intime. Elle centralise les informations utiles, les outils de suivi et les échanges communautaires dans une expérience simple, rassurante et accessible.
        </p>
      </section>

      <img :src="clientBanner" alt="Communauté d’utilisatrices Carex" class="block w-full aspect-[1560/573] rounded-[8px] object-cover" loading="lazy">

      <div class="grid grid-cols-1 gap-[20px] w-full max-w-[760px] mx-auto my-[34px_42px]">
        <section>
          <h2 class="mb-[8px] m-0 font-sans text-[24px] font-semibold leading-[1.25]">Le problème</h2>
          <p class="m-0 font-sans text-[14px] leading-[1.65] text-[#666]">
            L’accès à des informations fiables sur la santé sexuelle et reproductive reste compliqué pour de nombreuses femmes et adolescentes. Les ressources sont souvent dispersées et les outils existants ne permettent pas toujours un accompagnement adapté au quotidien.
          </p>
        </section>
        <section>
          <h2 class="mb-[8px] m-0 font-sans text-[24px] font-semibold leading-[1.25]">La solution</h2>
          <p class="m-0 font-sans text-[14px] leading-[1.65] text-[#666]">
            Carex propose un espace complet pour suivre son cycle menstruel, retrouver des contenus fiables, poser ses questions dans des forums et échanger avec une communauté bienveillante.
          </p>
          <ul class="my-[8px_12px] pl-[17px] font-sans text-[14px] leading-[1.65] text-[#666]">
            <li>Suivi personnalisé du calendrier menstruel</li>
            <li>Rappels et notifications</li>
            <li>Forums thématiques</li>
            <li>Articles et conseils santé</li>
          </ul>
        </section>
      </div>

      <section class="grid grid-cols-1 gap-[24px] min-h-[390px] mt-[24px] md:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]" aria-label="Écrans de l’application Carex">
        <div class="relative min-h-[360px] md:min-h-[390px] overflow-hidden rounded-[7px] bg-[linear-gradient(135deg,#fff2df_0%,#fff2df_58%,#ffdfb9_58%,#ffdfb9_100%)]">
          <img :src="onboardingImage" alt="Création du calendrier menstruel Carex" class="absolute z-[2] block left-[5%] md:left-[8%] bottom-[-26px] w-[48%] md:w-[43%] h-[330px] md:h-[365px] object-cover rounded-[16px] -rotate-[8deg]" loading="lazy">
          <img :src="calendarImage" alt="Mon calendrier dans l’application Carex" class="absolute z-[1] block right-[4%] bottom-[-26px] w-[48%] md:w-[43%] h-[330px] md:h-[365px] object-cover rounded-[16px] -rotate-[12deg]" loading="lazy">
        </div>
        <div class="grid min-h-[380px] md:min-h-[390px] place-items-center overflow-hidden rounded-[7px] bg-[#ddedf5]">
          <img :src="forumImage" alt="Forums de la communauté Carex" class="w-[74%] h-[350px] object-cover rounded-[10px]" loading="lazy">
        </div>
      </section>

      <section class="mt-[32px] overflow-hidden border border-[#7fa8df] bg-[#d9a676]" aria-label="Communauté Carex">
        <img :src="carexPhoto" alt="Une utilisatrice présente l’application Carex sur téléphone" class="block w-full h-auto aspect-[1561/602] object-cover object-center" loading="lazy">
      </section>

      <div class="max-w-[760px] mt-[15px] text-[#666] font-sans text-[13px] leading-[1.55]">
        <div>L’application mobile offre aux jeunes femmes la possibilité de discuter de leurs problèmes</div>
        <div>de sexualité avec des professionnels de santé en toute confidentialité.</div>
      </div>

      <section class="mt-[42px] overflow-hidden rounded-[8px] bg-[#ffe1c8]" aria-label="Présentation complète de l’application Carex">
        <img :src="finalScreensImage" alt="Tableau de bord, quiz, messagerie et profil de l’application Carex" class="block w-full h-auto object-cover" loading="lazy">
      </section>

      <section class="mt-[54px] pt-[30px] border-t border-[#dedede]">
        <h2 class="mb-[8px] m-0 font-sans text-[24px] font-semibold leading-[1.25]">Autres projets</h2>
        <div class="grid grid-cols-[34px_minmax(0,1fr)_34px] md:grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-[8px] md:gap-[12px]">
          <button type="button" class="grid w-[34px] h-[34px] md:w-[40px] md:h-[40px] place-items-center rounded-full border-0 text-[#087ac7] bg-[#edf7ff] cursor-pointer disabled:opacity-[.35] disabled:cursor-default" :disabled="!canBack" aria-label="Voir les projets précédents" @click="scrollProjects(-1)">
            <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7"/></svg>
          </button>
          <div ref="track" class="flex gap-[24px] overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-[#087ac7]" tabindex="0" aria-label="Autres réalisations" @scroll.passive="updateControls">
            <component
              :is="project.route ? 'RouterLink' : 'article'"
              v-for="project in relatedProjects"
              :key="project.name"
              :to="project.route ? { name: project.route } : undefined"
              class="carex-related-project flex-[0_0_clamp(230px,28vw,330px)] min-w-0 text-inherit no-underline snap-start"
            >
              <img :src="project.image" :alt="`Projet ${project.name}`" class="block w-full aspect-[1.35] rounded-[6px] object-cover bg-[#eef0fa]" loading="lazy">
              <div class="flex items-baseline justify-between gap-[8px] pt-[10px]">
                <h3 class="m-0 font-sans text-[15px] font-semibold">{{ project.name }}</h3>
                <span class="text-[11px] text-[#777]">{{ project.category }}</span>
              </div>
            </component>
          </div>
          <button type="button" class="grid w-[34px] h-[34px] md:w-[40px] md:h-[40px] place-items-center rounded-full border-0 text-[#087ac7] bg-[#edf7ff] cursor-pointer disabled:opacity-[.35] disabled:cursor-default" :disabled="!canForward" aria-label="Voir les projets suivants" @click="scrollProjects(1)">
            <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>
