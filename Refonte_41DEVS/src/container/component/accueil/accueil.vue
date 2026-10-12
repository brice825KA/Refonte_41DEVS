<script setup lang="ts">
import headerIcon from '@/asset/icons/ic_header_acceuil.svg'
import middlesponsors from './Middle_acceuil_Sponsors.vue'
import expertises from './expertises.vue'

const items = [
  'Entreprises',
  'Institutions',
  'Gouvernement',
]
</script>

<template>
    <div class="relative isolate grid items-center justify-center overflow-hidden text-center font-family-[Neue Haas Grotesk Display Pro] font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gap-y-1 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-[radial-gradient(circle_at_50%_8%,rgba(165,94,255,0.45),transparent_30%),linear-gradient(180deg,#2A0D45_0%,#180819_50%,#09090D_100%)]">
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 sm:opacity-60 lg:opacity-100" aria-hidden="true">
            <div class="absolute bottom-0 inset-y-0 -left-6 w-[calc(var(--icon-size)*3)] [--icon-size:clamp(60px,8vw,105px)] overflow-hidden">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-px)] top-[60%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-0 top-[75%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[75%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-0 top-[90%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[90%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*2-60px)] top-[90%] w-[var(--icon-size)] h-auto" alt="">
            </div>
            <div class="absolute inset-y-0 -right-6 w-[calc(var(--icon-size)*3)] [--icon-size:clamp(60px,8vw,105px)] overflow-hidden scale-x-[-1]">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-px)] top-[60%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-0 top-[75%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[75%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-0 top-[90%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[90%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*2-60px)] top-[90%] w-[var(--icon-size)] h-auto" alt="">
            </div>
        </div>
        <div class="relative z-10 bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-1 sm:py-2 md:py-3 lg:py-5">
            Nous accompagnons la
        </div>
        <div class="relative z-10 bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-1 sm:py-2 md:py-3 lg:py-5">
            transformation digitale des
        </div>
        <div class="relative z-10">
            <UCarousel
                v-slot="{ item }"
                orientation="vertical"
                loop
                :autoplay="{ delay: 2000, pauseOnHover: false }"
                :items="items"
                :ui="{ container: 'h-50' }"
                class="flex justify-center items-center"
            >
                <div class="bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent text-center leading-tight">
                    {{ item }}
                </div>
            </UCarousel>
        </div>
    </div>
    <middlesponsors />
    <expertises />
</template>
