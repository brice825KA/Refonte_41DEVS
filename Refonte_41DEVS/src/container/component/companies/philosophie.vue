<script lang="ts" setup>
import philo1 from '@/asset/icons/ic_experises2.svg'
import philo2 from '@/asset/icons/ic_experises1.svg'
import philo3 from '@/asset/icons/ic_experises3.svg'

const philo = [
    philo1,
    philo2,
    philo3
]

const firstText = [
    'Agilité',
    'Craftmanship',
    'Innovation'
]

const secondtext = [
    [
        "Nous préconsions une approche",
        "d’amélioration continue et centrée sur le",
        "client afin d’encourager une réponse rapide",
        "et souple au changement."
    ],
    [
        "Nous créons le bon produit en mettant",
        "au cœur de nos réalisations la fiabilité",
        "et la qualité."   
    ],
    [
        "Nous utilisons les technologies et les",
        "connaissances les plus récentes pour",
        "concevoir des services sur-mesure les",
        "plus innovants"
    ]
]

</script>

<template>
    <div class="bg-[#F7F7FC] grid gap-15">
        <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-6xl text-[#000000] px-55">Notre philosophie</div>
        <div class="flex justify-center gap-40">
            <div class="size-" v-for="(item, index) in firstText" :key="index">
                <div class=""><img :src="philo[index]" alt="" class="w-full h-auto"/></div>
                <div class="grid gap-5">
                    <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-3xl text-[#000000]">{{ item }}</div>
                    <div class="">
                        <div class="font-family-[PP Neue Montreal] font-normal text-xl text-[#000000]" v-for="(text, textIndex) in secondtext[index]" :key="textIndex">{{ text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>