<script setup lang="ts">
import ProjectCarousel from './ProjectCarousel.vue'
import veep1 from '@/asset/images/image_veep1.webp'
import veep2 from '@/asset/images/image_veep2.webp'
import veep3 from '@/asset/images/image_veep3.webp'
import veep4 from '@/asset/images/image_veep4.webp'
import veep5 from '@/asset/images/image_veep5.webp'
import veep6 from '@/asset/images/image_veep6.webp'
import veep7 from '@/asset/images/image_veep7.webp'
import veep8 from '@/asset/images/image_veep8.webp'
import veep9 from '@/asset/images/image_veep9.webp'
import veep10 from '@/asset/images/image_veep10.webp'
import veep11 from '@/asset/images/image_veep11.webp'
import veep12 from '@/asset/images/image_veep12.webp'
import veep13 from '@/asset/images/image_veep13.webp'

const projectFeatures = [
  'Achat et vente de billets en ligne',
  'Gestion des événements',
  'Billets sécurisés par QR code',
  'Suivi des ventes et des participants',
  'Découverte des événements',
]

const projectServices = [
  'Design UI/UX',
  'Développement web',
  'Développement mobile',
  'Déploiement',
  'Maintenance',
]

const platforms = ['Web', 'Mobile']

const introduction = [
  "Que ce soit pour des concerts, des conférences ou des festivals, Veep simplifie l'expérience pour tous les acteurs impliqués dans l'événementiel.",
  'La solution de billetterie tout-en-un qui permet :',
]

const audienceBenefits = [
  {
    title: 'Aux clients',
    description: "d'acheter leurs tickets d'accès à des événements facilement et sans tracas.",
  },
  {
    title: 'Aux organisateurs',
    description: "d'événements de gérer la vente de leurs tickets en ligne et hors ligne, tout en suivant la performance de leurs actions marketing.",
  },
]

const securityDescription = [
  "Veep sécurise les billets grâce à des codes uniques cryptés, réduisant ainsi considérablement les risques de fraude liés aux tickets d'événements.",
  "Cette technologie garantit que chaque billet est authentique et traçable, offrant ainsi une tranquillité d'esprit aux organisateurs comme aux participants.",
]

const securityBenefits = [
  { image: veep5, label: 'Sécurité renforcée' },
  { image: veep7, label: 'Fiabilité assurée' },
  { image: veep6, label: 'Réduction des fraudes' },
  { image: veep8, label: 'unknow'}
]

const organizerDescription = [
  'Les organisateurs disposent d’un espace dédié pour créer leurs événements, suivre les ventes et gérer leurs activités depuis une interface centralisée.',
]

const closingDescription = [
  'Avec Veep, les participants découvrent des événements et obtiennent leurs billets en toute simplicité, tandis que les organisateurs pilotent leur billetterie.',
]
</script>

<template>
  <img :src="veep1" alt="Les pass Veep pour profiter des événements" class="pt-25">
  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[1338px] gap-8 pb-12 pt-24 text-[#111] sm:w-[calc(100%-48px)] md:gap-10 md:pb-16 md:pt-28">
    <div class="grid gap-3 md:gap-4">
      <div class="flex flex-wrap items-baseline gap-x-3 font-[PP_Neue_Montreal] text-4xl leading-[1.05] sm:text-5xl md:text-[52px]">
        <div class="font-semibold">Veep,</div>
        <div class="font-normal">L’accès VIP aux grands rendez-vous</div>
      </div>
      <div class="font-[PP_Neue_Montreal] text-lg font-medium sm:text-xl md:text-[22px]">Groupe 41Devs</div>
    </div>

    <div class="border-t border-[#dedede]"></div>

    <div class="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-8">
      <div>
        <div class="font-[PP_Neue_Montreal] text-lg font-medium md:text-[20px]">Industrie</div>
        <div class="mt-2 font-[PP_Neue_Montreal] text-sm text-[#777] md:text-[16px]">Événementiel</div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-lg font-medium md:text-[20px]">Fonctionnalités</div>
        <div class="mt-2 grid gap-1 font-[PP_Neue_Montreal] text-sm leading-6 text-[#666] md:text-[15px]">
          <div v-for="feature in projectFeatures" :key="feature" class="grid grid-cols-[8px_minmax(0,1fr)] gap-2">
            <div>•</div>
            <div>{{ feature }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-lg font-medium md:text-[20px]">Services fournis</div>
        <div class="mt-2 grid gap-1 font-[PP_Neue_Montreal] text-sm leading-6 text-[#666] md:text-[15px]">
          <div v-for="service in projectServices" :key="service" class="grid grid-cols-[8px_minmax(0,1fr)] gap-2">
            <div>•</div>
            <div>{{ service }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-lg font-medium md:text-[20px]">Plateforme</div>
        <div class="mt-2 grid gap-1 font-[PP_Neue_Montreal] text-sm leading-6 text-[#666] md:text-[15px]">
          <div v-for="platform in platforms" :key="platform" class="grid grid-cols-[8px_minmax(0,1fr)] gap-2">
            <div>•</div>
            <div>{{ platform }}</div>
          </div>
        </div>
      </div>
    </div>

    <img :src="veep2" alt="Page d’accueil Veep et accès aux événements" class="block h-auto w-full rounded-xl object-cover">
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[870px] gap-8 py-8 sm:w-[calc(100%-48px)] md:gap-10 md:py-12">
    <div class="grid gap-2 font-[PP_Neue_Montreal] text-base leading-6 text-[#666] sm:text-lg sm:leading-7">
      <div v-for="line in introduction" :key="line">{{ line }}</div>
    </div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
      <div v-for="benefit in audienceBenefits" :key="benefit.title" class="font-[PP_Neue_Montreal] text-base leading-6 text-[#666] sm:text-lg sm:leading-[27px]">
        <div class="inline font-semibold text-[#333]">{{ benefit.title }}</div>
        <div class="inline">{{ ` ${benefit.description}` }}</div>
      </div>
    </div>
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[1338px] grid-cols-1 gap-4 sm:w-[calc(100%-48px)] sm:grid-cols-2 md:gap-5">
    <img :src="veep3" alt="Participants profitant d’un événement musical" class="block h-full max-h-[560px] w-full rounded-xl object-cover">
    <img :src="veep4" alt="Amies réunies lors d’un événement" class="block h-full max-h-[560px] w-full rounded-xl object-cover">
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[870px] gap-7 py-12 sm:w-[calc(100%-48px)] md:gap-9 md:py-16">
    <div class="grid gap-2 font-[PP_Neue_Montreal] text-base leading-6 text-[#666] sm:text-lg sm:leading-7">
      <div v-for="line in securityDescription" :key="line">{{ line }}</div>
    </div>
    <div class="relative">
      <div class="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[repeat(3,minmax(0,1fr))] sm:gap-2">
        <img
          v-for="benefit in securityBenefits"
          :key="benefit.label"
          :src="benefit.image"
          :alt="benefit.label"
          class="block aspect-[1.394] min-w-0 max-w-full w-full rounded-xl object-cover"
        >
      </div>
    </div>
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[1338px] grid-cols-1 items-stretch gap-4 sm:w-[calc(100%-48px)] sm:grid-cols-[1.2fr_.8fr] md:gap-5">
    <img :src="veep9" alt="Page de découverte des événements sur Veep" class="block h-full min-h-[300px] w-full rounded-xl object-cover">
    <img :src="veep10" alt="Application mobile Veep pour rechercher des événements" class="block h-full min-h-[300px] w-full rounded-xl object-cover">
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[1338px] gap-5 py-12 sm:w-[calc(100%-48px)] md:gap-7 md:py-16">
    <div class="mx-auto grid max-w-[870px] gap-4 font-[PP_Neue_Montreal] text-base leading-6 text-[#666] sm:text-lg sm:leading-7">
      <div v-for="line in organizerDescription" :key="line">{{ line }}</div>
    </div>
    <img :src="veep11" alt="Tableau de bord des événements pour les organisateurs Veep" class="block h-auto w-full rounded-xl object-cover">
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[1338px] gap-5 pb-12 sm:w-[calc(100%-48px)] md:grid-cols-[1.2fr_.8fr] md:gap-6 md:pb-16">
    <img :src="veep12" alt="Pass Veep pour accéder aux événements" class="block h-full min-h-[300px] w-full rounded-xl object-cover">
    <img :src="veep13" alt="Catégories d’événements disponibles sur Veep" class="block h-full min-h-[300px] w-full rounded-xl object-cover">
    <div class="grid gap-2 font-[PP_Neue_Montreal] text-base leading-6 text-[#666] sm:text-lg sm:leading-7 md:col-span-2">
      <div v-for="line in closingDescription" :key="line">{{ line }}</div>
    </div>
  </div>

  <ProjectCarousel current-project="veep-project" />
</template>
