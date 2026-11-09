<script lang="ts" setup>
import { RouterLink } from 'vue-router'
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

const expertiseDescriptions = [
    "L’optimisation des processus par le numérique représente à elle seule le cœur de la transformation digitale. Notre gamme de services aide votre organisation à optimiser et mettre en œuvre de nouveaux processus pour répondre à vos attentes et augmenter votre performance et rentabilité.",
    "Nous créons des solutions digitales et innovantes centrées sur l’utilisateur avec les technologies les plus récentes sur le marché. Nous mettons un point d’honneur sur la satisfaction de nos clients et la durabilité des solutions.",
    "Nous accompagnons nos clients dans la mise en place de solutions digitales et innovantes pour répondre à leurs besoins. Nous mettons un point d’honneur sur la satisfaction de nos clients et la durabilité des solutions."
]

const expertiseRoutes: Record<number, string> = {
    0: '#',
    1: '/companies/ingenierie-developpement',
    2: '/companies/infrastructure-informatique'
}
</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10">
        <div
            v-for="(item, index) in expert"
            :key="index"
            class="expertise-card relative w-full max-w-sm sm:max-w-md md:w-1/3 md:size-1/4 overflow-hidden"
        >
            <img :src="item" :alt="expertiseTitles[index]" class="expertise-card-image w-full h-auto object-cover"/>
            <div class="expertise-image-shade" aria-hidden="true"></div>
            <h2 class="expertise-image-title">{{ expertiseTitles[index] }}</h2>
            <div class="expertise-card-overlay">
                <p class="expertise-image-description">{{ expertiseDescriptions[index] }}</p>
                <RouterLink
                    v-if="expertiseRoutes[index]"
                    :to="expertiseRoutes[index]"
                    class="expertise-card-button"
                    :aria-label="`En savoir plus sur ${expertiseTitles[index]}`"
                >
                    <span>En savoir plus</span>
                    <svg class="expertise-card-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                </RouterLink>
            </div>
            <RouterLink
                v-if="expertiseRoutes[index]"
                :to="expertiseRoutes[index]"
                class="expertise-card-hit-area"
                tabindex="-1"
                aria-hidden="true"
            />
        </div>
    </div>
</template>

<style scoped>
.expertise-card {
    isolation: isolate;
    border-radius: 0.5rem;
}

.expertise-card-image {
    display: block;
    transition: filter 450ms ease, transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.expertise-image-shade {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.48), transparent 38%);
    pointer-events: none;
    transition: opacity 350ms ease;
}

.expertise-card-overlay {
    position: absolute;
    z-index: 3;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: clamp(1rem, 3vw, 2rem);
    color: #fff;
    background: rgb(12 0 32 / 0.42);
    opacity: 0;
    pointer-events: none;
    transition: opacity 350ms ease, backdrop-filter 450ms ease;
    backdrop-filter: blur(0);
}

.expertise-image-title {
    position: absolute;
    top: 7%;
    left: 7%;
    z-index: 4;
    max-width: 82%;
    margin: 0;
    color: #fff;
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    font-weight: 600;
    line-height: 1.2;
}

.expertise-image-description {
    margin: 0.75rem 0 1.25rem;
    color: rgb(255 255 255 / 0.88);
    font-family: 'PP Neue Montreal', sans-serif;
    font-size: clamp(0.8rem, 1vw, 0.95rem);
    line-height: 1.5;
}

.expertise-card-button {
    display: inline-flex;
    min-height: 2.75rem;
    align-items: center;
    gap: 0.75rem;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    color: #fff;
    background: #5c308c;
    font-family: 'PP Neue Montreal', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    pointer-events: auto;
    transition: background-color 200ms ease;
}

.expertise-card-button:hover,
.expertise-card-button:focus-visible {
    background: #492272;
}

.expertise-card-button:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
}

.expertise-card-arrow {
    width: 1rem;
    height: 1rem;
    opacity: 0;
    transform: translateX(-0.4rem);
    transition: opacity 200ms ease, transform 200ms ease;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.8;
}

.expertise-card-button:hover .expertise-card-arrow,
.expertise-card-button:focus-visible .expertise-card-arrow {
    opacity: 1;
    transform: translateX(0);
}

.expertise-card-hit-area {
    position: absolute;
    z-index: 2;
    inset: 0;
}

.expertise-card:has(.expertise-card-hit-area) {
    cursor: pointer;
}

.expertise-card:hover .expertise-card-image,
.expertise-card:focus-within .expertise-card-image {
    filter: blur(4px);
    transform: scale(1.04);
}

.expertise-card:hover .expertise-image-shade,
.expertise-card:focus-within .expertise-image-shade {
    opacity: 1;
}

.expertise-card:hover .expertise-card-overlay,
.expertise-card:focus-within .expertise-card-overlay {
    opacity: 1;
    backdrop-filter: blur(8px);
    pointer-events: auto;
}

.expertise-card:has(.expertise-card-hit-area):focus-within {
    outline: 2px solid #9c4feb;
    outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
    .expertise-card-image,
    .expertise-card-overlay,
    .expertise-card-arrow {
        transition: none;
    }
}
</style>