<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import sponsors1 from '@/asset/icons/ic_sponnsor1.svg'
import sponsors2 from '@/asset/icons/ic_sponnsor2.svg'
import sponsors3 from '@/asset/icons/ic_sponnsor3.svg'
import sponsors4 from '@/asset/icons/ic_sponnsor4.svg'
import sponsors5 from '@/asset/icons/ic_sponnsor5.svg'

const sponsorCard = ref<HTMLElement | null>(null)
let revealContext: gsap.Context | undefined

gsap.registerPlugin(ScrollTrigger)

const sponsors = [
    sponsors1,
    sponsors2,
    sponsors3,
    sponsors4,
    sponsors5
]

// Distribution aléatoire au chargement pour une variété constante
const shuffledSponsors = [...sponsors].sort(() => Math.random() - 0.5)

// Matrice en carré latin : garantit que chaque colonne affiche TOUJOURS un logo différent sur la même ligne
const patterns: number[][] = [
    [0, 1, 2, 3, 4],
    [2, 3, 4, 0, 1],
    [4, 0, 1, 2, 3],
    [1, 2, 3, 4, 0],
    [3, 4, 0, 1, 2],
]

// Légers décalages pour un effet de cascade naturel et asynchrone
const delays = ['0.12s', '0.45s', '0s', '0.3s', '0.6s']

const sponsorCarousels = patterns.map((pattern, index) => {
    // 2 cycles complets + premier élément répété pour une boucle infinie parfaitement fluide
    const wrapItem = pattern[0] ?? 0
    const sequence = [...pattern, ...pattern, wrapItem]
    return {
        id: index,
        delay: delays[index] ?? '0s',
        items: sequence.map((sponsorIdx: number) => ({
            src: shuffledSponsors[sponsorIdx] ?? sponsors[0],
        })),
    }
})

onMounted(() => {
    if (!sponsorCard.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    revealContext = gsap.context(() => {
        const content = sponsorCard.value?.querySelectorAll<HTMLElement>('.sponsor-card-content') ?? []
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sponsorCard.value,
                start: 'top bottom',
                end: 'top top',
                scrub: 0.5,
                invalidateOnRefresh: true,
            },
        })

        timeline.fromTo(
            content,
            { y: 40, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power2.out' },
        )
    }, sponsorCard.value)
})

onBeforeUnmount(() => revealContext?.revert())

</script>

<template>
    <div ref="sponsorCard" class="sponsor-showcase-card relative z-10 flex flex-col justify-center bg-white shadow-2xl px-5 sm:px-8 md:px-12 lg:mx-5 lg:px-30 py-8 sm:py-12">
        <!-- Top text row: Title on left, Paragraph on right -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10 xl:gap-16">
            <!-- Left Headline -->
            <div class="sponsor-card-content font-['Neue_Haas_Grotesk_Display_Pro',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] leading-[1.12] text-black shrink-0 tracking-tight">
                <div class="sm:whitespace-nowrap">
                    Avec l'<span class="text-[#5C308C]">innovation,</span> nous
                </div>
                <div class="sm:whitespace-nowrap">façonnons l'Afrique de</div>
                <div>demain.</div>
            </div>

            <!-- Right Paragraph (608px width as shown in design) -->
            <p class="sponsor-card-content font-['PP_Neue_Montreal',sans-serif] font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[32px] text-[#222222] max-w-[608px]">
                L'innovation est au coeur de notre métier. Grâce aux meilleures technologies sur le marché et aux expertises acquises sur des années, nous accompagnons la transformation digitale des entreprises de tous secteurs.
            </p>
        </div>

        <div class="sponsor-carousels sponsor-card-content" role="region" aria-label="Logos des entreprises partenaires">
            <div
                v-for="carousel in sponsorCarousels"
                :key="carousel.id"
                class="sponsor-carousel"
            >
                <div class="sponsor-carousel-track" :style="{ animationDelay: carousel.delay }">
                    <div
                        v-for="(item, itemIndex) in carousel.items"
                        :key="`${carousel.id}-${itemIndex}`"
                        class="sponsor-carousel-item"
                        aria-hidden="true"
                    >
                        <img :src="item.src" alt="" class="h-8 sm:h-10 lg:h-12 w-auto max-w-full object-contain">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sponsor-showcase-card {
    margin-inline: clamp(7.5rem, 7.4vw, 6rem);
}

.sponsor-carousels {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
    margin-top: 2.5rem;
}

.sponsor-carousel {
    height: 3.5rem;
    overflow: hidden;
}

.sponsor-carousel-track {
    display: flex;
    flex-direction: column;
    animation: sponsor-carousel-scroll 20s infinite;
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
}

.sponsor-carousel-item {
    display: flex;
    flex: 0 0 3.5rem;
    align-items: center;
    justify-content: center;
}

@keyframes sponsor-carousel-scroll {
    0%,
    15% {
        transform: translateY(0);
    }

    20%,
    35% {
        transform: translateY(-3.5rem);
    }

    40%,
    55% {
        transform: translateY(-7rem);
    }

    60%,
    75% {
        transform: translateY(-10.5rem);
    }

    80%,
    95% {
        transform: translateY(-14rem);
    }

    100% {
        transform: translateY(-17.5rem);
    }
}

@media (min-width: 640px) {
    .sponsor-carousels {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .sponsor-carousels {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}

@media (prefers-reduced-motion: reduce) {
    .sponsor-carousel-track {
        animation: none;
    }
}
</style>