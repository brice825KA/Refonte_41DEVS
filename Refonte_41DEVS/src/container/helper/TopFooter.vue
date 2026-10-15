<script lang="js" setup>
import headerIcon from '@/asset/icons/ic_header_acceuil.svg'
</script>

<template>
    <div class="bg-[#0C0020] justify-center items-center py-6 sm:py-10">
        <div class="relative isolate overflow-hidden bg-gradient-to-b from-[#0a0314] via-[#1a0736] to-[#5914bd] items-center justify-center text-center rounded-2xl sm:rounded-3xl lg:rounded-4xl py-14 sm:py-24 md:py-36 lg:py-50 px-4 sm:px-8 grid gap-6 sm:gap-8 lg:gap-10">
            <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 sm:opacity-75 lg:opacity-100" aria-hidden="true">
                <!-- Left icons cluster (staircase grid from edge inwards) -->
                <div class="absolute bottom-0 left-0 -ml-4 sm:-ml-6 lg:-ml-8 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-max pointer-events-none">
                    <!-- Row 1: 1 cube on the edge -->
                    <div class="col-start-1 row-start-1 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <!-- Row 2: 2 cubes -->
                    <div class="col-start-1 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <div class="col-start-2 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <!-- Row 3: 3 cubes -->
                    <div class="col-start-1 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <div class="col-start-2 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <div class="col-start-3 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                </div>
                <!-- Right icons cluster (mirrored staircase grid) -->
                <div class="absolute bottom-0 right-0 -mr-4 sm:-mr-6 lg:-mr-8 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-max pointer-events-none scale-x-[-1]">
                    <!-- Row 1: 1 cube on the edge -->
                    <div class="col-start-1 row-start-1 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <!-- Row 2: 2 cubes -->
                    <div class="col-start-1 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <div class="col-start-2 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <!-- Row 3: 3 cubes -->
                    <div class="col-start-1 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <div class="col-start-2 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
                    <div class="col-start-3 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                        <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                    </div>
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