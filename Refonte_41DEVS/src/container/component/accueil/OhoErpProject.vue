<script setup lang="ts">
import ProjectCarousel from './ProjectCarousel.vue'
import oho1 from '@/asset/images/image_oho1.webp'
import oho2 from '@/asset/images/image_oho2.webp'
import oho3 from '@/asset/images/image_oho3.webp'
import oho4 from '@/asset/images/image_oho4.webp'
import oho5 from '@/asset/images/image_oho5.webp'
import oho6 from '@/asset/images/image_oho6.webp'
import oho7 from '@/asset/images/image_oho7.webp'
import oho8 from '@/asset/images/image_oho8.webp'
import oho9 from '@/asset/images/image_oho9.webp'

const projectFeatures = [
  'Catalogues de produits',
  'Gestion de stock',
  'Comptabilité',
  'Gestion des clients et partenaires',
  'Gestion RH',
]

const projectServices = [
  'Design UI/UX',
  'Développement web',
  'Déploiement',
  'Maintenance',
]

const projectProblem =
  "Face au développement de ses activités et dans le souci de mieux suivre ses points de ventes, OHO Les lunettes avait besoin de se doter d'une solution digitale pour optimiser ses processus de vente."

const projectSolution =
  'L’ERP de OHO Les Lunettes est une solution complète qui assure la gestion intégrée de ses agences et points de ventes.'
</script>

<template>
  <div class="py-25">
    <div><img :src="oho1" alt="Présentation du projet OHO Les lunettes ERP" class="block h-auto w-full object-cover"></div>
    <div class="mx-4 grid gap-2 text-[#000000] sm:mx-8 md:mx-16 lg:mx-50">
      <div class="break-words font-family-[Neue Haas Grotesk Display Pro] text-4xl font-semibold sm:text-5xl md:text-7xl">OHO Les lunettes Erp</div>
      <div class="font-family-[PP Neue Montreal] text-xl font-medium sm:text-2xl md:text-4xl">Objets Hospitaliers et d’Optiques</div>
    </div>
  </div>

  <div class="mx-4 border-t border-[#dedede] pt-8 sm:mx-8 md:mx-16 md:pt-[68px] lg:mx-50" aria-label="Informations du projet OHO ERP">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-x-10">
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Industrie</div>
        <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">Santé</div>
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

  <div class="mx-4 mt-12 grid gap-4 sm:mx-8 md:mx-16 md:mt-16 md:gap-5 lg:mx-50" aria-label="À propos du client">
    <div class="font-[PP_Neue_Montreal] text-4xl font-medium leading-[100%] text-black md:text-[24px]">A propos du client</div>
    <div class="font-[PP_Neue_Montreal] text-2xl font-normal leading-[29px] tracking-[0.03em] text-[#333] md:text-[18px] md:leading-[30px]">
      <div>Leader sur le marché de l’optique depuis 20 ans, OHO Les lunettes dispose de plus de 9 points de ventes à travers</div>
      <div >tout le Bénin, des franchises, des partenariats forts et stratégiques ainsi que des alliances solides bâties au fil du temps.</div>
    </div>
  </div>
  <div class="mx-4 grid min-w-0 py-10 sm:mx-8 md:mx-16 md:py-15 lg:mx-50">
    <div><img :src="oho2" alt="Présentation de l’entreprise OHO Les lunettes" class="block h-auto w-full max-w-full"></div>
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[820px] gap-12 py-8 sm:w-[calc(100%-48px)] md:gap-16 md:py-12">
    <div class="grid gap-4 md:gap-5">
      <div class="font-family-[PP_Neue_Montreal] text-3xl font-medium leading-tight text-[#000000] md:text-[44px] md:leading-[1.15]">Le problème</div>
      <div class="font-family-[PP_Neue_Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-[18px] md:leading-[30px]">{{ projectProblem }}</div>
    </div>
    <div class="grid gap-4 md:gap-5">
      <div class="font-family-[PP_Neue_Montreal] text-3xl font-medium leading-tight text-[#000000] md:text-[44px] md:leading-[1.15]">La solution</div>
      <div class="font-family-[PP_Neue_Montreal] text-lg font-normal leading-[29px] text-[#333333] md:text-[18px] md:leading-[30px]">{{ projectSolution }}</div>
    </div>
  </div>
  <div class="mx-4 grid min-w-0 gap-8 py-8 sm:mx-8 md:mx-16 md:gap-10 lg:mx-50">
    <div><img :src="oho3" alt="Écran de gestion OHO ERP" class="block h-auto w-full max-w-full"></div>
    <div><img :src="oho4" alt="Écran de gestion OHO ERP" class="block h-auto w-full max-w-full"></div>
    <div><img :src="oho5" alt="Écran de gestion OHO ERP" class="block h-auto w-full max-w-full"></div>
    <div class="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
      <div><img :src="oho6" alt="Interface OHO ERP" class="block h-auto w-full max-w-full"></div>
      <div><img :src="oho7" alt="Interface OHO ERP" class="block h-auto w-full max-w-full"></div>
    </div>
    <div><img :src="oho8" alt="Interface OHO ERP" class="block h-auto w-full max-w-full"></div>
    <div class="font-family-[PP Neue Montreal] font-normal text-2xl leading-9 text-[#333333]">
      <div class="">ERP OHO Les lunettes assure la gestion optimisée des opérations de</div>
      <div class="">l’entreprise.</div>
    </div>
    <div><img :src="oho9" alt="Interface OHO ERP" class="block h-auto w-full max-w-full"></div>
  </div>

  <ProjectCarousel current-project="oho-erp-project" />
</template>
