<script lang="js" setup>

import sponsors1 from '@/asset/icons/ic_sponnsor1.svg'
import sponsors2 from '@/asset/icons/ic_sponnsor2.svg'
import sponsors3 from '@/asset/icons/ic_sponnsor3.svg'
import sponsors4 from '@/asset/icons/ic_sponnsor4.svg'
import sponsors5 from '@/asset/icons/ic_sponnsor5.svg'

const sponsors = [
    sponsors1,
    sponsors2,
    sponsors3,
    sponsors4,
    sponsors5
]

const sente = [
    "L'innovation est au coeur de notre métier. Grâce aux meilleures",
    "technologies sur le marché et aux expertises acquises sur des",
    "années, nous accompagnons la transformation digitale des",
    "entreprises de tous secteurs."
]


</script>

<template>
    <div class="text-black grid justify-center items-center gap-8 py-15 mx-70 bg-[rgba(255,255,255,1)] border-none shadow-xl">
        <div class="flex justify-center items-center gap-10">
            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-5xl">
                <div class="flex flex-wrap items-center gap-x-2">
                    <span>Avec l'</span>
                    <span class="text-purple-900">innovation,</span>
                    <span>nous</span>
                </div>
                <div>nous façonnons l'Afrique de</div>
                <div>demain</div>
            </div>

            <div class="font-family-[Neue Haas Grotesk Display Pro] font-normal text-xl">
                <div v-for="(line, key) in sente" :key="key" class="block">
                    {{ line }}
                </div>
            </div>
        </div>

        <div class="flex flex-wrap items-center gap-30">
            <div v-for="sponsor in sponsors" 
            :key="sponsor"
            class="flex items-center justify-center"
            >
                <img :src="sponsor" alt="Sponsor Logo" class="h-12 w-auto object-contain">
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>