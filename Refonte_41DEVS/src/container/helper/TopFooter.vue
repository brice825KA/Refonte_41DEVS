<script lang="js" setup>
import headerIcon from '@/asset/icons/ic_header_acceuil.svg'
</script>

<template>
    <div class="bg-[#0C0020] justify-center items-center py-6 sm:py-10">
        <div class="relative isolate overflow-hidden bg-gradient-to-b from-[#0a0314] via-[#1a0736] to-[#5914bd] items-center justify-center text-center rounded-2xl sm:rounded-3xl lg:rounded-4xl py-14 sm:py-24 md:py-36 lg:py-50 px-4 sm:px-8 grid gap-6 sm:gap-8 lg:gap-10">
            <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 sm:opacity-75 lg:opacity-100" aria-hidden="true">
                <!-- Left icons cluster (staircase from edge inwards) -->
                <div class="absolute bottom-0 inset-y-0 left-0 w-[calc(var(--icon-size)*2.6)] [--icon-size:clamp(110px,14vw,230px)] overflow-hidden">
                    <!-- Top row (1 cube on the edge) -->
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[44%] w-[var(--icon-size)] h-auto" alt="">
                    <!-- Middle row (2 cubes: edge + inward) -->
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[68%] w-[var(--icon-size)] h-auto" alt="">
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[68%] w-[var(--icon-size)] h-auto" alt="">
                    <!-- Bottom row (3 cubes: edge + middle + inner) -->
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*1.06)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                </div>
                <!-- Right icons cluster (mirrored) -->
                <div class="absolute inset-y-0 right-0 w-[calc(var(--icon-size)*2.6)] [--icon-size:clamp(110px,14vw,230px)] overflow-hidden scale-x-[-1]">
                    <!-- Top row (1 cube on the edge) -->
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[44%] w-[var(--icon-size)] h-auto" alt="">
                    <!-- Middle row (2 cubes: edge + inward) -->
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[68%] w-[var(--icon-size)] h-auto" alt="">
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[68%] w-[var(--icon-size)] h-auto" alt="">
                    <!-- Bottom row (3 cubes: edge + middle + inner) -->
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*-0.18)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*0.44)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                    <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*1.06)] top-[91%] w-[var(--icon-size)] h-auto" alt="">
                </div>
            </div>
            <div class="relative z-10 justify-center items-center font-family-[Neue Haas Grotesk Display Pro] font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFFFFF]">
                Vous avez un projet ?
            </div>
            <div class="relative z-10 justify-center items-center grid gap-6 sm:gap-8 lg:gap-10">
                <div class="font-family-[PP Neue Montreal] font-normal text-base sm:text-lg md:text-xl text-[#FFFFFF] max-w-2xl mx-auto px-4">
                    Les projets nous les aimons, nous serons heureux de le rendre mémorable
                </div>
                <div class="font-family-[Helvetica Neue] font-medium text-base sm:text-lg lg:text-xl text-[#0C0020] mx-auto px-8 sm:px-14 lg:px-20 py-3.5 sm:py-4 lg:py-5 rounded-2xl hover:bg-purple-600 hover:text-white transition-all bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.88)_100%)] backdrop-blur-[4px] shadow-[0px_3px_20px_4px_rgba(248,245,255,0.56)]">
                    <router-link to="/contact">Parlons-en</router-link>
                </div>
            </div>
        </div>
    </div>
</template>