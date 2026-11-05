<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import exp1 from '@/asset/images/img_acceuil1.webp'
import exp2 from '@/asset/images/img_acceuil2.webp'
import exp3 from '@/asset/images/img_acceuil3.webp'

const expertiseLabels = ['Conseil', 'Audit', 'Gestion et suivi']
const rotatingLabels = [...expertiseLabels, ...expertiseLabels]
const activeLabelIndex = ref(0)
const animateLabels = ref(true)
const labelTrackStyle = computed(() => ({
    transform: `translateY(-${activeLabelIndex.value * 2.2}rem)`,
}))
let labelInterval: ReturnType<typeof setInterval> | undefined

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    labelInterval = setInterval(() => {
        activeLabelIndex.value += 1
    }, 2600)
})

onUnmounted(() => {
    if (labelInterval) clearInterval(labelInterval)
})

function resetLabelRotation(event: TransitionEvent) {
    if (event.target !== event.currentTarget || activeLabelIndex.value < expertiseLabels.length) return

    animateLabels.value = false
    activeLabelIndex.value = 0
    requestAnimationFrame(() => {
        animateLabels.value = true
    })
}

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
    <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-65 justify-center py-8 sm:py-12 lg:py-15 grid gap-12 sm:gap-16 lg:gap-25">
        <div class="flex flex-wrap gap-2 font-[Neue Haas Grotesk Display Pro] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#000000]">
            Nos<div class="text-[#5C308C]">expertises</div>
        </div>

        <!--First Expertise-->
        <div>
            <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-25" id="exp1">
                <div class="expertise-image w-full max-w-lg lg:max-w-none lg:w-1/2">
                    <img :src="exp1" alt="Expertise 1" class="w-full h-auto object-cover" />
                    <div class="expertise-image-overlay" aria-hidden="true">
                        <div class="expertise-label-window">
                            <div
                                class="expertise-labels"
                                :class="{ 'is-moving': animateLabels }"
                                :style="labelTrackStyle"
                                @transitionend="resetLabelRotation"
                            >
                                <span
                                    v-for="(label, index) in rotatingLabels"
                                    :key="`${label}-${index}`"
                                    class="expertise-label"
                                    :class="{ 'is-active': index === activeLabelIndex + 2 }"
                                >
                                    {{ label }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 sm:gap-6 lg:gap-10 w-full lg:w-1/2">
                    <div class="expertise-divider hidden sm:block self-stretch shrink-0"></div>
                    <div class="expertise-copy w-full">
                        <div class="grid gap-6 lg:gap-10">
                            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#000000] grid gap-1 sm:gap-2">
                                <div>Etude et optimisation</div>
                                <div>de processus</div>
                            </div>
                            <div class="font-family-[PP Neue Montreal] font-normal text-base sm:text-lg lg:text-xl text-[#171F30] grid gap-1">
                                <div v-for="(line, key) in sente1" :key="key" class="block">
                                    {{ line }}
                                </div>
                            </div>
                        </div>
                        <router-link to="/companies" class="inline-block bg-[#5C308C] hover:bg-[#492272] transition-colors rounded-2xl w-full sm:w-fit sm:px-10 lg:w-2xs py-3.5 sm:py-4 lg:py-5 font-family-[Helvetica Neue] font-medium text-base sm:text-lg lg:text-xl text-[#FFFFFF] text-center mt-6 lg:mt-10 cursor-pointer" id="button-plus">
                            En savoir plus
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!--Second Expertise-->
        <div>
            <div class="flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-8 lg:gap-25" id="exp2">
                <div class="flex gap-4 sm:gap-6 lg:gap-10 w-full lg:w-1/2">
                    <div class="expertise-divider hidden sm:block self-stretch shrink-0"></div>
                    <div class="expertise-copy w-full">
                        <div class="grid gap-6 lg:gap-10">
                            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#000000] grid gap-1 sm:gap-2">
                                <div>Conception et développement</div>
                                <div>de solutions digitales</div>
                            </div>
                            <div class="font-family-[PP Neue Montreal] font-normal text-base sm:text-lg lg:text-xl text-[#171F30] grid gap-1">
                                <div v-for="(line, key) in sente2" :key="key" class="block">
                                    {{ line }}
                                </div>
                            </div>
                        </div>
                        <router-link to="/companies" class="inline-block bg-[#5C308C] hover:bg-[#492272] transition-colors rounded-2xl w-full sm:w-fit sm:px-10 lg:w-2xs py-3.5 sm:py-4 lg:py-5 font-family-[Helvetica Neue] font-medium text-base sm:text-lg lg:text-xl text-[#FFFFFF] text-center mt-6 lg:mt-10 cursor-pointer" id="button-plus">
                            En savoir plus
                        </router-link>
                    </div>
                </div>
                <div class="expertise-image w-full max-w-lg lg:max-w-none lg:w-1/2">
                    <img :src="exp2" alt="Expertise 2" class="w-full h-auto object-cover" />
                    <div class="expertise-image-overlay" aria-hidden="true">
                        <div class="expertise-label-window">
                            <div
                                class="expertise-labels"
                                :class="{ 'is-moving': animateLabels }"
                                :style="labelTrackStyle"
                                @transitionend="resetLabelRotation"
                            >
                                <span
                                    v-for="(label, index) in rotatingLabels"
                                    :key="`${label}-${index}`"
                                    class="expertise-label"
                                    :class="{ 'is-active': index === activeLabelIndex + 2 }"
                                >
                                    {{ label }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Third Expertise-->
        <div>
            <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-25" id="exp3">
                <div class="expertise-image w-full max-w-lg lg:max-w-none lg:w-1/2">
                    <img :src="exp3" alt="Expertise 3" class="w-full h-auto object-cover" />
                    <div class="expertise-image-overlay" aria-hidden="true">
                        <div class="expertise-label-window">
                            <div
                                class="expertise-labels"
                                :class="{ 'is-moving': animateLabels }"
                                :style="labelTrackStyle"
                                @transitionend="resetLabelRotation"
                            >
                                <span
                                    v-for="(label, index) in rotatingLabels"
                                    :key="`${label}-${index}`"
                                    class="expertise-label"
                                    :class="{ 'is-active': index === activeLabelIndex + 2 }"
                                >
                                    {{ label }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 sm:gap-6 lg:gap-10 w-full lg:w-1/2">
                    <div class="expertise-divider hidden sm:block self-stretch shrink-0"></div>
                    <div class="expertise-copy w-full">
                        <div class="grid gap-6 lg:gap-10">
                            <div class="font-family-[Neue Haas Grotesk Display Pro] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#000000] grid gap-1 sm:gap-2">
                                <div>Infrastructure</div>
                                <div>informatique</div>
                            </div>
                            <div class="font-family-[PP Neue Montreal] font-normal text-xl text-[#171F30] grid gap-1">
                                <div v-for="(line, key) in sente3" :key="key" class="block">
                                    {{ line }}
                                </div>
                            </div>
                        </div>
                        <router-link to="/companies" class="inline-block bg-[#5C308C] hover:bg-[#492272] transition-colors rounded-2xl w-full sm:w-fit sm:px-10 lg:w-2xs py-3.5 sm:py-4 lg:py-5 font-family-[Helvetica Neue] font-medium text-base sm:text-lg lg:text-xl text-[#FFFFFF] text-center mt-6 lg:mt-10 cursor-pointer" id="button-plus">
                            En savoir plus
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.expertise-divider {
    width: 1px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.19);
}

.expertise-image {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgb(0 0 0 / 0.1);
}

.expertise-image-overlay {
    position: absolute;
    inset: 34% 0 0;
    display: flex;
    align-items: flex-end;
    padding: 1.25rem 1.375rem;
    background: linear-gradient(180deg, transparent 0%, rgb(0 0 0 / 0.82) 100%);
    pointer-events: none;
}

.expertise-label-window {
    display: flex;
    height: 6.6rem;
    overflow: hidden;
}

.expertise-labels {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.expertise-labels.is-moving {
    transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
}

.expertise-label {
    display: flex;
    flex: 0 0 2.2rem;
    align-items: center;
    color: rgb(255 255 255 / 0.48);
    font-family: 'PP Neue Montreal', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0;
    transition: color 500ms ease, font-size 500ms ease, font-weight 500ms ease;
}

.expertise-label.is-active {
    color: #fff;
    font-size: 41.16px;
    font-weight: 700;
    line-height: 34.73px;
}

@media (min-width: 1024px) {
    .expertise-copy {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

@media (prefers-reduced-motion: reduce) {
    .expertise-label,
    .expertise-labels.is-moving {
        transition: none;
    }
}
</style>
