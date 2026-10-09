<script lang="js" setup>
import indus1 from '@/asset/icons/ic_industries3.svg'
import indus2 from '@/asset/icons/ic_industries1.svg'
import indus3 from '@/asset/icons/ic_industries2.svg'

import indus4 from '@/asset/icons/ic_industries4.svg'
import indus5 from '@/asset/icons/ic_industries5.svg'
import indus6 from '@/asset/icons/ic_industries6.svg'

const textligne1= [
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
    <div class=" grid  gap-10 py-10 px-25">
        <div class="" id="first-line">
            <div class="grid grid-cols-3 gap-10 justify-center items-center">
                <div v-for="(text, index) in textligne1" :key="index" class="industry-column flex aspect-square flex-row items-center justify-between gap-2.5 px-2.5" :style="{ backgroundColor: color_ligne1[index], color: index === 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }">
                    <div class="industry-label text-left">
                        <div v-for="(line, lineIndex) in text" :key="lineIndex">{{ line }}</div>
                    </div>
                    <img :src="index === 0 ? indus1 : index === 1 ? indus2 : indus3" alt="" class="shrink-0 object-contain" />
                </div>
            </div>
        </div>
        <div class="" id="second-line">
            <div class="grid grid-cols-3 gap-10 justify-center items-center">
                <div v-for="(text, index) in textligne2_and_color" :key="index" class="industry-column flex aspect-square flex-row items-center justify-between gap-2.5 px-2.5" :style="{ backgroundColor: color_ligne2[index], color: index === 1 ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)' }">
                    <div class="industry-label text-left">
                        <div v-for="(line, lineIndex) in text" :key="lineIndex">{{ line }}</div>
                    </div>
                    <img :src="index === 0 ? indus4 : index === 1 ? indus5 : indus6" alt="" class="shrink-0 object-contain" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.industry-column {
    backdrop-filter: blur(4px);
    box-shadow: 0px 3px 20px 4px rgba(248, 245, 255, 0.56);
}

.industry-label {
    font-family: 'Neue Haas Grotesk Display Pro';
    font-weight: 600;
    font-size: 38.89px;
    line-height: 44.72px;
    letter-spacing: 0;
}
</style>