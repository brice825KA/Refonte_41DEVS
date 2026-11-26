<script setup lang="ts">
import ProjectCarousel from './ProjectCarousel.vue'
import afg1 from '@/asset/images/image_afg1.webp'
import afg2 from '@/asset/images/image_afg2.webp'
import afg3 from '@/asset/images/image_afg3.webp'
import afg4 from '@/asset/images/image_afg4.webp'
import afg5 from '@/asset/images/image_afg5.webp'
import afg6 from '@/asset/images/image_afg6.webp'
import afg7 from '@/asset/images/image_afg7.webp'
import afg8 from '@/asset/images/image_afg8.webp'
import afg9 from '@/asset/images/image_afg9.webp'
import afg10 from '@/asset/images/image_afg10.webp' 
const projectFeatures = [
  'Onboarding clients',
  'Gestion des cartes',
  'B2W, W2B, 2WW',
  'Transferts/Virements bancaires',
  'Retrait GAB',
  'Gestion des comptes',
  'Gestion de réclamations/RDV',
]

const projectServices = [
  'Étude et optimisation',
  'Design UI/UX',
  'Développement mobile et web',
  'Déploiement',
  'Maintenance',
]

const aboutClient = [
  'Fondé en 2006, Atlantic Financial Group (AFG Holding) est le pôle financier du groupe panafricain ATLANTIC',
  'GROUP et opère dans les domaines de la banque et de l’assurance. La banque a des filiales dans six (06) pays',
  'en Afrique et poursuit son expansion à grande vitesse.',
]

const projectProblem = [
  'Le challenge AFG E-Bank était de taille : concevoir une banque digitale mobile et un core banking system',
  'évolutifs, déployables dans plusieurs pays et adaptés aux spécificités de chacun, tout en intégrant les normes',
  'strictes de cybersécurité et les exigences de conformité propres au secteur bancaire.',
]

const projectSolution = [
  'AFG E-Bank est un méga projet conçu pour répondre aux besoins des utilisateurs, des plus basiques aux plus',
  'sophistiqués. L’application mobile, fluide et intuitive, offre aux clients une nouvelle expérience et des services',
  'innovants et attractifs. Le core banking system intégré permet à la banque d’optimiser ses processus et',
  'd’améliorer sa performance.',
]

const projectOutcome = [
  'Cette solution place AFG Bank sur l’échiquier des institutions financières les plus innovantes en Afrique.',
]

</script>

<template>


<div class="grid py-10 md:py-0">
    <div><img :src="afg1" alt="Tableau de bord de l’application AFG e-Bank" class="block h-auto w-full object-cover"></div>
    <div class="mx-4 grid gap-3 pt-5 sm:mx-8 md:mx-16 md:gap-5 lg:mx-30">
      <div class="font-family-[Neue Haas Grotesk Display Pro] text-4xl font-semibold text-[#000000] sm:text-5xl md:text-7xl">AFG E-Bank</div>
      <div class="font-family-[PP Neue Montreal] text-xl font-medium text-[#000000] sm:text-2xl md:text-4xl">Atlantic Financial Group Holding</div>
    </div>
  </div>

  <div class="mx-4 border-t border-[#dedede] pt-8 sm:mx-8 md:mx-16 md:pt-[68px] lg:mx-30" aria-label="Informations du projet AFG e-Bank">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-x-10">
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Industrie</div>
        <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">Banque</div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Fonctionnalités</div>
        <div class="mt-3 grid gap-y-0 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="feature in projectFeatures" :key="feature" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-[4px] translate-y-[-3px] bg-[#333]"></div>
            <div>{{ feature }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Services fournis</div>
        <div class="mt-3 grid gap-y-0 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">
          <div v-for="service in projectServices" :key="service" class="grid grid-cols-[8px_minmax(0,1fr)] items-baseline gap-4">
            <div class="size-[4px] translate-y-[-3px] bg-[#333]"></div>
            <div>{{ service }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Plateforme</div>
      </div>
    </div>
  </div>

  <div class="mx-4 mt-8 grid gap-5 sm:mx-8 md:mx-16 md:mt-0 lg:mx-30" aria-label="À propos du client">
    <div class="font-family-[PP Neue Montreal] text-2xl font-medium text-[#000000] md:text-3xl">A propos du client</div>
    <div class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">
      <div v-for="line in aboutClient" :key="line">{{ line }}</div>
    </div>
    <div class="pt-5 md:pt-10">
      <img :src="afg2" alt="Client utilisant les services bancaires AFG" class="block h-auto w-full max-w-full object-cover">
    </div>
  </div>

  <div class="mx-4 mt-8 grid items-center justify-center gap-8 sm:mx-8 md:mx-16 md:mt-0 md:gap-10 lg:mx-30">
    <div class="grid gap-5">
      <div class="font-family-[PP Neue Montreal] text-3xl font-medium leading-tight text-[#000000] md:text-5xl md:leading-14">Le problème</div>
      <div>
        <div v-for="line in projectProblem" :key="line" class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">{{ line }}</div>
      </div>
    </div>
    <div class="grid gap-5">
      <div class="font-family-[PP Neue Montreal] text-3xl font-medium leading-tight text-[#000000] md:text-5xl md:leading-14">La solution</div>
      <div>
        <div v-for="line in projectSolution" :key="line" class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">{{ line }}</div>
        <div v-for="line in projectOutcome" :key="line" class="mt-4 font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">{{ line }}</div>
      </div>
    </div>
  </div>
  <div class="mx-4 my-8 grid grid-cols-1 items-start justify-center gap-6 sm:mx-8 md:mx-16 lg:mx-30 lg:my-12 lg:grid-cols-2 lg:gap-10">
      <div class="grid min-w-0 gap-6 lg:gap-10">
        <div><img :src="afg3" alt="Vue mobile du tableau de bord AFG e-Bank" class="block h-auto w-full object-contain"></div>
        <div><img :src="afg5" alt="Interface de gestion bancaire AFG e-Bank" class="block h-auto w-full object-contain"></div>
      </div>
      <div class="grid min-w-0 gap-6 lg:gap-10">
        <div><img :src="afg4" alt="Espace de gestion des clients AFG e-Bank" class="block h-auto w-full object-contain"></div>
        <div><img :src="afg10" alt="Écran complémentaire AFG e-Bank" class="block h-auto w-full object-contain"></div>
      </div>
    </div>
    <div class="mx-4 grid min-w-0 gap-6 sm:mx-8 md:mx-16 lg:mx-30 lg:gap-10">
      <div><img :src="afg6" alt="Interface web AFG e-Bank" class="block h-auto w-full object-contain"></div>
      <div><img :src="afg7" alt="Services digitaux AFG e-Bank" class="block h-auto w-full object-contain"></div>
      <div class="grid min-w-0 gap-5 lg:gap-10">
        <div><img :src="afg8" alt="Interface de consultation AFG e-Bank" class="block h-auto w-full object-contain"></div>
        <div class="font-family-[PP Neue Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-2xl md:leading-9">
          <div class="">Avec AFG E-Bank, les clients peuvent ouvrir et gérer leurs comptes depuis</div>
          <div class="">leur téléphone en toute simplicité.</div>
        </div>
      </div>
    </div>
    <div class="mx-4 pt-6 sm:mx-8 md:mx-16 md:pt-10 lg:mx-30"><img :src="afg9" alt="Parcours client AFG e-Bank" class="block h-auto w-full object-contain"></div>

    <ProjectCarousel current-project="afg-bank-project" />
</template>
