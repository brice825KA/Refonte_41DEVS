<script lang="js" setup>
import indus1 from '@/asset/icons/ic_industries3.svg'
import indus2 from '@/asset/icons/ic_industries1.svg'
import indus3 from '@/asset/icons/ic_industries2.svg'

import indus4 from '@/asset/icons/ic_industries4.svg'
import indus5 from '@/asset/icons/ic_industries5.svg'
import indus6 from '@/asset/icons/ic_industries6.svg'

const textligne1 = [
    ['Assurance'],
    ['Banque et', 'Finances'],
    ['Secteur public'],
]

const textligne2_and_color = [
    ['Santé et Industrie', 'pharmaceutique'],
    ['Divertissement'],
    ['Sécurité'],
]

const color_ligne1 = [
    'rgba(196, 161, 239, 1)',
    'rgba(173, 221, 254, 1)',
    'rgba(243, 222, 120, 1)'
]

const color_ligne2 = [
    'rgba(99, 198, 119, 1)',
    'rgba(255, 226, 238, 1)',
    'rgba(95, 1, 211, 1)'
]
</script>

<template>
    <div class="grid gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-10 px-4 sm:px-8 md:px-14 lg:px-25">
        <div id="first-line">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-center items-center">
                <div 
                    v-for="(text, index) in textligne1" 
                    :key="index" 
                    class="flex aspect-auto sm:aspect-square flex-row items-center justify-between gap-4 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-[4px] shadow-[0px_3px_20px_4px_rgba(248,245,255,0.56)] min-h-[140px]" 
                    :style="{ backgroundColor: color_ligne1[index], color: index === 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }"
                >
                    <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[38.89px] leading-tight lg:leading-[44.72px] text-left">
                        <div v-for="(line, lineIndex) in text" :key="lineIndex">{{ line }}</div>
                    </div>
                    <img :src="index === 0 ? indus1 : index === 1 ? indus2 : indus3" alt="" class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 object-contain" />
                </div>
            </div>
        </div>

        <div id="second-line">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-center items-center">
                <div 
                    v-for="(text, index) in textligne2_and_color" 
                    :key="index" 
                    class="flex aspect-auto sm:aspect-square flex-row items-center justify-between gap-4 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-[4px] shadow-[0px_3px_20px_4px_rgba(248,245,255,0.56)] min-h-[140px]" 
                    :style="{ backgroundColor: color_ligne2[index], color: index === 1 ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)' }"
                >
                    <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[38.89px] leading-tight lg:leading-[44.72px] text-left">
                        <div v-for="(line, lineIndex) in text" :key="lineIndex">{{ line }}</div>
                    </div>
                    <img :src="index === 0 ? indus4 : index === 1 ? indus5 : indus6" alt="" class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 object-contain" />
                </div>
            </div>
        </div>
    </div>
</template>