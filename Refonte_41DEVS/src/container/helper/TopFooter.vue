<script lang="js" setup>
import headerIcon from '@/asset/icons/ic_header_acceuil.svg'
</script>

<template>
    <div class="bg-[#0C0020] justify-center items-center">
        <div class="relative isolate overflow-hidden bg-gradient-to-b from-[#0a0314] via-[#1a0736] to-[#5914bd] items-center justify-center text-center rounded-4xl py-50 grid gap-10">
            <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div class="absolute bottom-0 inset-y-0 -left-6 w-[calc(var(--icon-size)*3)] [--icon-size:clamp(75px,9vw,105px)] overflow-hidden">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-px)] top-[70%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-0 top-[80%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[80%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-0 top-[90%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[90%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*2-60px)] top-[90%] w-[var(--icon-size)] h-auto">
            </div>
            <div class="absolute inset-y-0 -right-6 w-[calc(var(--icon-size)*3)] [--icon-size:clamp(75px,9vw,105px)] overflow-hidden scale-x-[-1]">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-px)] top-[70%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-0 top-[80%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[80%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-0 top-[90%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)-30px)] top-[90%] w-[var(--icon-size)] h-auto">
                <img :src="headerIcon" class="absolute left-[calc(var(--icon-size)*2-60px)] top-[90%] w-[var(--icon-size)] h-auto">
            </div>
            </div>
            <div class="relative z-10 justify-center items-center font-family-[Neue Haas Grotesk Display Pro] font-semibold text-7xl text-[#FFFFFF]">Vous avez un projet ?</div>
            <div class="relative z-10 justify-center items-center grid gap-10">
                <div class="font-family-[PP Neue Montreal] font-normal text-xl text-[#FFFFFF]">Les projets nous les aimons, nous serons heureux de le rendre mémorable</div>
                <div class="font-family-[Helvetica Neue] font-medium text-xl text-[#0C0020] mx-150 px-20 py-5 rounded-2xl hover:bg-purple-600" style="background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.88) 100%); backdrop-filter: blur(4px); box-shadow: 0px 3px 20px 4px rgba(248, 245, 255, 0.56);"><router-link to="#">Parlons-en</router-link></div>
            </div>
        </div>
    </div>
</template>