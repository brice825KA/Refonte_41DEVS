<script lang="js" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DecorativeShapeCluster from './DecorativeShapeCluster.vue'

const topFooter = ref(null)
let revealContext

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    if (!topFooter.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    revealContext = gsap.context(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: topFooter.value,
                start: 'top 80%',
                once: true,
            },
        })

        timeline
            .fromTo(
                topFooter.value.querySelectorAll('.top-footer-copy'),
                { autoAlpha: 0, y: 22 },
                { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out' },
            )
            .fromTo(
                topFooter.value.querySelectorAll('.footer-hero-icon'),
                { autoAlpha: 0, y: 24, scale: 0.82 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.12, ease: 'back.out(1.7)' },
                '-=0.25',
            )
    }, topFooter.value)
})

onBeforeUnmount(() => revealContext?.revert())
</script>

<template>
    <div class="bg-[#0C0020] justify-center items-center pt-0 pb-6 sm:pb-8 lg:pb-12">
        <div ref="topFooter" class="relative isolate overflow-hidden bg-gradient-to-b from-[#0a0314] via-[#1a0736] to-[#5914bd] items-center justify-center text-center rounded-2xl sm:rounded-3xl lg:rounded-[24px] py-12 sm:py-16 md:py-20 lg:py-[5.5rem] px-4 sm:px-8 grid gap-5 sm:gap-6">
            <div class="footer-icons absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 sm:opacity-75 lg:opacity-100" aria-hidden="true">
                <DecorativeShapeCluster side="left" variant="footer" />
                <DecorativeShapeCluster side="right" variant="footer" />
            </div>
            <div class="top-footer-title top-footer-copy relative z-10 justify-center items-center text-[#FFFFFF]">
                Vous avez un projet ?
            </div>
            <div class="relative z-10 justify-center items-center grid gap-6 sm:gap-8">
                <div class="top-footer-description top-footer-copy text-[#FFFFFF] max-w-2xl mx-auto px-4">
                    Les projets nous les aimons, nous serons heureux de le rendre mémorable
                </div>
                <div class="top-footer-copy top-footer-button font-family-[Helvetica Neue] font-medium text-xs sm:text-sm lg:text-xs text-[#0C0020] mx-auto flex h-[68px] w-[354px] items-center justify-center gap-[10px] rounded-[16px] bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.88)_100%)] px-[138px] py-[22px] backdrop-blur-[4px] shadow-[0px_3px_20px_4px_rgba(248,245,255,0.56)]">
                    <router-link to="/contact" class="top-footer-button-link flex h-full w-full items-center justify-center rounded-[16px] text-[#0C0020]">Parlons-en</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-footer-title {
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.413;
    letter-spacing: 0.01em;
    text-align: center;
    vertical-align: middle;
}

.top-footer-description {
    font-family: 'PP Neue Montreal', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.03em;
    text-align: center;
}

.top-footer-button {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    transition: scale 300ms ease-out;
}

.top-footer-button::before {
    position: absolute;
    z-index: -1;
    background: #9333ea;
    content: '';
    inset: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms ease-out;
}

.top-footer-button:hover,
.top-footer-button:focus-within {
    scale: 1.05;
}

.top-footer-button:hover::before,
.top-footer-button:focus-within::before {
    transform: scaleX(1);
}

.top-footer-button-link {
    position: relative;
    z-index: 1;
    color: #0c0020;
    transition: color 0ms 300ms;
}

.top-footer-button:hover .top-footer-button-link,
.top-footer-button:focus-within .top-footer-button-link {
    color: #fff;
}

@media (min-width: 640px) {
    .top-footer-title {
        font-size: 3rem;
    }

    .top-footer-description {
        font-size: 1rem;
    }
}

@media (min-width: 768px) {
    .top-footer-title {
        font-size: 4rem;
    }
    .top-footer-description {
        font-size: 1.25rem;
    }
}

@media (min-width: 1024px) {
    .top-footer-title {
        font-size: 92px;
        line-height: 130px;
    }

    .top-footer-description {
        font-size: 20px;
        line-height: 30px;
    }
}
</style>