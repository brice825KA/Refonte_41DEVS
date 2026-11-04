<script lang="ts" setup>
import etude1 from '@/asset/images/img_expertise1.webp'
import etude2 from '@/asset/images/img_expertise2.webp'
import etude3 from '@/asset/images/img_expertise3.webp'

const expert = [
    etude1,
    etude2,
    etude3
]

const expertiseTitles = [
    'Etude et optimisation de processus',
    'Ingénierie et Développement de logiciels',
    'Infrastructure informatique'
]
</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10">
        <div
            v-for="(item, index) in expert"
            :key="index"
            class="expertise-card relative w-full max-w-sm sm:max-w-md md:w-1/3 md:size-1/4 overflow-hidden"
        >
            <img :src="item" :alt="expertiseTitles[index]" class="w-full h-auto object-cover"/>
            <div class="expertise-image-shade" aria-hidden="true"></div>
            <h2 class="expertise-image-title">{{ expertiseTitles[index] }}</h2>
        </div>
    </div>
</template>

<style scoped>
.expertise-image-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.48), transparent 38%);
    pointer-events: none;
}

.expertise-image-title {
    position: absolute;
    top: 7%;
    left: 7%;
    z-index: 1;
    max-width: 82%;
    margin: 0;
    color: #fff;
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    font-weight: 600;
    line-height: 1.2;
}
</style>