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
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 sm:opacity-75 lg:opacity-100" aria-hidden="true">
            <!-- Left icons cluster (staircase from edge inwards) -->
            <div class="absolute bottom-0 inset-y-0 left-0 w-[calc(var(--icon-size)*2.6)] [--icon-size:clamp(120px,16vw,260px)] overflow-hidden">
                <!-- Top row (1 cube on the edge) -->
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[42%] w-[var(--icon-size)] h-auto" alt="">
                <!-- Middle row (2 cubes: edge + inward) -->
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[67%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[67%] w-[var(--icon-size)] h-auto" alt="">
                <!-- Bottom row (3 cubes: edge + middle + inner) -->
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*1.06)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
            </div>
            <!-- Right icons cluster (mirrored) -->
            <div class="absolute inset-y-0 right-0 w-[calc(var(--icon-size)*2.6)] [--icon-size:clamp(120px,16vw,260px)] overflow-hidden scale-x-[-1]">
                <!-- Top row (1 cube on the edge) -->
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[42%] w-[var(--icon-size)] h-auto" alt="">
                <!-- Middle row (2 cubes: edge + inward) -->
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[67%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[67%] w-[var(--icon-size)] h-auto" alt="">
                <!-- Bottom row (3 cubes: edge + middle + inner) -->
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*1.06)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
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
