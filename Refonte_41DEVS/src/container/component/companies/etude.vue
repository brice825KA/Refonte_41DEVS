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
    <div class="flex items-center justify-center gap-10 p-10">
        <div class="items-center justify-center size-1/4" v-for="(item, index) in expert" :key="index">
            <img :src="item" alt="" class="w-full h-auto"/>
        </div>
    </div>
</template>

<style scoped>
</style>