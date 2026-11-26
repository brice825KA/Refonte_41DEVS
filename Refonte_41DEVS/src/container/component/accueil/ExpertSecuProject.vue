<script setup lang="ts">
import ProjectCarousel from './ProjectCarousel.vue'
import expertSecu1 from '@/asset/images/image_exp_secu1.webp'
import expertSecu2 from '@/asset/images/image_exp_secu2.webp'
import expertSecu3 from '@/asset/images/image_exp_secu3.webp'
import expertSecu4 from '@/asset/images/image_exp_secu4.webp'
import expertSecu5 from '@/asset/images/image_exp_secu5.webp'
import expertSecu6 from '@/asset/images/image_exp_secu6.webp'
import expertSecu7 from '@/asset/images/image_exp_secu7.webp'

const projectFeatures = [
  'Gestion des sites et des agents',
  'Suivi des incidents',
  'Gestion des présences',
  'Suivi des équipements',
  'Requêtes et instructions',
]

const projectServices = [
  'Étude et optimisation',
  'Design UI/UX',
  'Développement web et mobile',
  'Déploiement',
  'Maintenance',
]

const aboutClient =[
  'Leader sur le marché de l’optique depuis 20 ans, OHO Les lunettes dispose de plus de 9 points de ventes à travers tout',
  'le Bénin, des franchises  des partenariats forts et stratégiques ainsi que des alliances solides bâties au fil du temps.'
]
const projectProblem = [
  "Dans sa proposition de valeur sur le marché béninois, Atlantique Assurances Bénin IARDT fait face à de",
  "nombreux défis au nombre desquels: l’accessibilité insuffisante à ses offres disponibles, la lourdeur ",
  "administrative dans la gestion des contrats. Consciente de l’apport du digital dans l’amélioration de",
  "ses offres et processus, elle nous a fait appel pour lui concevoir une solution innovante et sur-mesure."
]

const projectSolution = [
  "L’ERP de OHO Les Lunettes est une solution complète qui assure la gestion intégrée de ses agences et",
  "points de ventes."
]

</script>

<template>
  <div class="grid pb-10 pt-20 md:pb-14 md:pt-24">
    <div>
      <img :src="expertSecu1" alt="Tableau de bord de la plateforme ExpertSecu" class="">
    </div>
    <div class="mx-4 grid gap-3 pt-5 sm:mx-8 md:mx-16 md:gap-5 lg:mx-30">
      <div class="font-family-[Neue_Haas_Grotesk_Display_Pro] text-4xl font-semibold text-black sm:text-5xl md:text-7xl">ExpertSecu</div>
      <div class="font-family-[PP_Neue_Montreal] text-xl font-medium text-black sm:text-2xl md:text-4xl">Solutions numériques de sécurité</div>
    </div>
  </div>

  <div class="mx-4 border-t border-[#dedede] pt-8 sm:mx-8 md:mx-16 md:pt-[68px] lg:mx-30" aria-label="Informations du projet ExpertSecu">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.25fr_1fr_.85fr] lg:gap-x-10">
      <div>
        <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] tracking-[0] text-black md:text-[32px]">Industrie</div>
        <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">Sécurité</div>
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
        <div class="mt-3 font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:mt-5 md:text-[24px] md:leading-[38px]">Web et mobile</div>
      </div>
    </div>

    <div class="mt-12 grid gap-4 md:mt-16 md:gap-5">
      <div class="font-[PP_Neue_Montreal] text-2xl font-medium leading-[100%] text-black md:text-[32px]">À propos du client</div>
      <div class="font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] tracking-[0.03em] text-[#333] md:text-[18px] md:leading-[30px]">
        <div class="" v-for="line in aboutClient" :key="line">{{ line }}</div>
      </div>
      <div class="pt-4 md:pt-8">
        <img :src="expertSecu2" alt="Identité visuelle ExpertSecu et agent de sécurité" class="block h-auto w-full rounded-lg object-cover">
      </div>
    </div>
  </div>

  <div class="mx-auto grid w-[calc(100%-32px)] max-w-[820px] gap-12 py-10 sm:w-[calc(100%-48px)] md:gap-16 md:py-14">
    <div class="grid gap-4 md:gap-5">
      <div class="font-[PP_Neue_Montreal] text-3xl font-medium leading-tight text-black md:text-[44px] md:leading-[1.15]">Le problème</div>
      <div class="font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] text-[#333] md:text-[18px] md:leading-[30px]">
        <div v-for="line in projectProblem" :key="line">{{ line }}</div>
      </div>
    </div>
    <div class="grid gap-4 md:gap-5">
      <div class="font-[PP_Neue_Montreal] text-3xl font-medium leading-tight text-black md:text-[44px] md:leading-[1.15]">La solution</div>
      <div class="font-[PP_Neue_Montreal] text-lg font-normal leading-[29px] text-[#333] md:text-[18px] md:leading-[30px]">
        <div class="" v-for="line in projectSolution" :key="line">{{ line }}</div>
      </div>
    </div>
  </div>

  <div class="mx-4 grid gap-5 sm:mx-8 md:mx-16 md:gap-8 lg:mx-30 lg:pb-10">
    <div class="grid grid-cols-1 items-start gap-5 md:grid-cols-[1.2fr_.8fr] md:gap-8">
      <div><img :src="expertSecu3" alt="Application mobile ExpertSecu pour les agents" class="block h-full max-h-[560px] w-full rounded-xl object-cover"></div>
      <div><img :src="expertSecu4" alt="Agent de sécurité utilisant sa radio" class="block h-full max-h-[560px] w-full rounded-xl object-cover"></div>
    </div>
    <div class="grid grid-cols-1 items-start gap-5 md:grid-cols-[.8fr_1.2fr] md:gap-8">
      <div><img :src="expertSecu5" alt="Prise de service par QR code dans l’application ExpertSecu" class="block h-full max-h-[560px] w-full rounded-xl object-cover"></div>
      <div><img :src="expertSecu6" alt="Gestion des sites dans la plateforme ExpertSecu" class="block h-full max-h-[560px] w-full rounded-xl object-cover"></div>
    </div>
    <div class="mx-auto w-full md:w-[82%] relative -right-40">
      <img :src="expertSecu7" alt="Agent de sécurité sur le terrain" class="block h-auto w-full rounded-xl object-cover">
    </div>
  </div>

  <ProjectCarousel current-project="expert-secu-project" />
</template>
