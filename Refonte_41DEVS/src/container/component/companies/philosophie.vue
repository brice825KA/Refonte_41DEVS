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
    <div class="bg-[#F7F7FC] grid gap-8 sm:gap-12 lg:gap-15 py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-55">
        <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#000000]">
            Notre philosophie
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div 
                v-for="(item, index) in firstText" 
                :key="index"
                class="grid gap-6 sm:gap-8 lg:gap-10 rounded-2xl bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 transition-colors duration-300 ease-in hover:bg-purple-400 shadow-sm"
            >
                <div class="w-20 sm:w-25.25 h-auto">
                    <img :src="philo[index]" alt="" class="w-full h-auto"/>
                </div>
                <div class="grid gap-3 sm:gap-5">
                    <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-2xl sm:text-3xl text-[#000000]">
                        {{ item }}
                    </div>
                    <div>
                        <div class="font-family-[PP Neue Montreal] font-normal text-base sm:text-lg lg:text-xl text-[#000000]" v-for="(text, textIndex) in secondtext[index]" :key="textIndex">
                            {{ text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>