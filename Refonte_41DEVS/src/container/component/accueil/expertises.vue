<script lang="ts" setup>
import exp1 from '@/asset/images/img_acceuil1.webp'
import exp2 from '@/asset/images/img_acceuil2.webp'
import exp3 from '@/asset/images/img_acceuil3.webp'

const sente1 = [
    "L’optimisation des processus par le numérique",
    "représente à elle seule le cœur de la transformation",
    "digitale. Notre gamme de services aide votre",
    "organisation à  optimiser et mettre en œuvre de",
    "nouveaux processus pour répondre à vos attentes et",
    "augmenter votre performance et rentabilité."
]

const sente2 = [
    "Nous créons des solutions digitales et innovantes",
    "centrées sur l’utilisateur avec les technologies les",
    "plus récentes sur le marché. Nous mettons un point",
    "d’honneur sur la satisfaction de nos clients et la",
    "durabilité des solutions."
]
const sente3 = [
    "Nous accompagnons nos clients dans la mise en",
    "place de solutions digitales et innovantes pour",
    "répondre à leurs besoins. Nous mettons un point",
    "d’honneur sur la satisfaction de nos clients et la",
    "durabilité des solutions."
]

</script>

<template>
    <div class="mx-65 justify-center py-15 grid gap-25">
        <div class="flex gap-2 font-[Neue Haas Grotesk Display Pro] font-semibold text-6xl text-[#000000]">Nos<div class="text-[#5C308C]">expertises</div></div>
        <!--First Expertise-->
        <div class="">
            <div class="flex items-center gap-15" id="exp1">
                <div class=""><img :src="exp1" alt="Expertise 1" /></div>
                <div class="flex gap-10">
                    <div class="h w-0.5 bg-black " id="div"></div>
                    <div class="">
                    <div class="grid gap-10">
                        <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-5xl text-[#000000] grid gap-2"><div>Etude et optimisation</div><div>de processus</div></div>
                        <div class="font-family-[PP Neue Montreal] font-normal text-xl text-[#171F30] grid gap-1">
                            <div v-for="(line, key) in sente1" :key="key" class="block">
                                {{ line }}
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#5C308C] rounded-2xl w-2xs py-5 font-family-[Helvetica Neue] font-medium text-xl text-[#FFFFFF] text-center mt-10" id="button-plus">En savoir plus</div>
                </div>
                </div>
            </div>
        </div>
        <!--Second Expertise-->
        <div class="">
            <div class="flex items-center gap-25" id="exp2">
                <div class="flex gap-10">
                    <div class="h w-0.5 bg-black " id="div"></div>
                    <div class="">
                        <div class="grid gap-10">
                            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-5xl text-[#000000] grid gap-2"><div>Conception et développement</div><div>de solutions digitales</div></div>
                            <div class="font-family-[PP Neue Montreal] font-normal text-xl text-[#171F30] grid gap-1">
                                <div v-for="(line, key) in sente2" :key="key" class="block">
                                    {{ line }}
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#5C308C] rounded-2xl w-2xs py-5 font-family-[Helvetica Neue] font-medium text-xl text-[#FFFFFF] text-center mt-10" id="button-plus">En savoir plus</div>
                    </div>
                </div>
                <div class="size-170"><img :src="exp2" alt="Expertise 2" /></div>
            </div>
        </div>
        <!--Third Expertise-->
        <div class="">
            <div class="flex items-center gap-25" id="exp3">
                <div class=""><img :src="exp3" alt="Expertise 3" /></div>
                <div class="flex gap-10">
                    <div class="h w-0.5 bg-black " id="div"></div>
                    <div class="">
                        <div class="grid gap-10">
                            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-5xl text-[#000000] grid gap-2"><div>Infrastructure</div><div>informatique</div></div>
                            <div class="font-family-[PP Neue Montreal] font-normal text-xl text-[#171F30] grid gap-1">
                                <div v-for="(line, key) in sente3" :key="key" class="block">
                                    {{ line }}
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#5C308C] rounded-2xl w-2xs py-5 font-family-[Helvetica Neue] font-medium text-xl text-[#FFFFFF] text-center mt-10" id="button-plus">En savoir plus</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
