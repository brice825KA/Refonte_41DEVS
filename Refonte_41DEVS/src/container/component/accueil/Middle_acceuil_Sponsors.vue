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
    <div class="text-black grid justify-center items-center gap-8 py-8 sm:py-12 lg:py-15 px-4 sm:px-8 md:px-12 lg:px-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-70 bg-[rgba(255,255,255,1)] border-none shadow-xl rounded-2xl md:rounded-3xl">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 lg:gap-10">
            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl shrink-0">
                <div class="flex flex-wrap items-center gap-x-2">
                    <span>Avec l'</span>
                    <span class="text-purple-900">innovation,</span>
                    <span>nous</span>
                </div>
                <div>nous façonnons l'Afrique de</div>
                <div>demain</div>
            </div>

            <div class="font-family-[Neue Haas Grotesk Display Pro] font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                <div v-for="(line, key) in sente" :key="key" class="block">
                    {{ line }}
                </div>
            </div>
        </div>

        <div class="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-10 md:gap-16 lg:gap-30 pt-4">
            <div 
                v-for="sponsor in sponsors" 
                :key="sponsor"
                class="flex items-center justify-center"
            >
                <img :src="sponsor" alt="Sponsor Logo" class="h-8 sm:h-10 lg:h-12 w-auto object-contain">
            </div>
        </div>
    </div>
</template>