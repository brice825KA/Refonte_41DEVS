<script lang="ts" setup>
import etude1 from '@/asset/images/img_expertise1.webp'
import etude2 from '@/asset/images/img_expertise2.webp'
import etude3 from '@/asset/images/img_expertise3.webp'

const expert = [
    etude1,
    etude2,
    etude3
]
</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10">
        <div class="items-center justify-center w-full max-w-sm sm:max-w-md md:w-1/3 md:size-1/4 rounded-2xl overflow-hidden shadow-sm" v-for="(item, index) in expert" :key="index">
            <img :src="item" alt="Expertise" class="w-full h-auto rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-300"/>
        </div>
    </div>
</template>