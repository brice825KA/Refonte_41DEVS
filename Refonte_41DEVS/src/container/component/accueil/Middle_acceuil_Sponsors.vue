<script lang="js" setup>
import sponsors1 from '@/asset/icons/ic_sponnsor1.svg'
import sponsors2 from '@/asset/icons/ic_sponnsor2.svg'
import sponsors3 from '@/asset/icons/ic_sponnsor3.svg'
import sponsors4 from '@/asset/icons/ic_sponnsor4.svg'
import sponsors5 from '@/asset/icons/ic_sponnsor5.svg'

import acc from '@/asset/images/img_acceuil.webp' 

const sponsors = [
    sponsors1,
    sponsors2,
    sponsors3,
    sponsors4,
    sponsors5
]
</script>

<template>
    <div class="justify-center items-center flex w-full">
        <img :src="acc" alt="" class="w-full h-auto object-contain">
    </div>
    <div class="relative -top-20 mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-65 bg-white shadow-xl rounded-2xl md:rounded-3xl px-6 sm:px-10 md:px-14 lg:px-18 py-10 sm:py-14 lg:py-16 my-8 sm:my-12">
        <!-- Top text row: Title on left, Paragraph on right -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 xl:gap-16">
            <!-- Left Headline -->
            <div class="font-['Neue_Haas_Grotesk_Display_Pro',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] leading-[1.12] text-black shrink-0 tracking-tight">
                <div class="sm:whitespace-nowrap">
                    Avec l'<span class="text-[#5C308C]">innovation,</span> nous
                </div>
                <div class="sm:whitespace-nowrap">façonnons l'Afrique de</div>
                <div>demain.</div>
            </div>

            <!-- Right Paragraph (608px width as shown in design) -->
            <p class="font-['PP_Neue_Montreal',sans-serif] font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[32px] text-[#222222] max-w-[608px]">
                L'innovation est au coeur de notre métier. Grâce aux meilleures technologies sur le marché et aux expertises acquises sur des années, nous accompagnons la transformation digitale des entreprises de tous secteurs.
            </p>
        </div>

        <!-- Sponsors logos row -->
        <div class="flex flex-wrap items-center justify-between gap-6 sm:gap-8 lg:gap-10 w-full pt-10 sm:pt-14 lg:pt-16">
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