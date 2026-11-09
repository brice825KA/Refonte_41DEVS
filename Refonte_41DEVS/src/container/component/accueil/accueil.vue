<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import headerIcon from '@/asset/icons/ic_header_acceuil.svg'
import acc from '@/asset/images/img_acceuil.webp'
import middlesponsors from './Middle_acceuil_Sponsors.vue'
import expertises from './expertises.vue'
import ProjectsSection from './ProjectsSection.vue'

const hero = ref<HTMLElement | null>(null)
const curtain = ref<HTMLDivElement | null>(null)
const introComplete = ref(false)
const carouselAutoplay = ref<boolean | { delay: number; pauseOnHover: boolean }>(false)
let introContext: gsap.Context | undefined

const items = [
  'Entreprises',
  'Institutions',
  'Gouvernement',
]

const activeIndex = ref(0)
const revealedIndices = ref<Record<number, Set<number>>>({
  0: new Set(),
  1: new Set(),
  2: new Set(),
})

let timer: ReturnType<typeof setTimeout> | null = null
let stepTimer: ReturnType<typeof setInterval> | null = null

function startReveal(slideIndex: number) {
  if (stepTimer) {
    clearInterval(stepTimer)
    stepTimer = null
  }
  if (timer) {
    clearTimeout(timer)
    timer = null
  }

  revealedIndices.value[slideIndex] = new Set()

  const word = items[slideIndex]
  if (!word) return
  let visibleCharacters = 0

  timer = setTimeout(() => {
    stepTimer = setInterval(() => {
      if (visibleCharacters < word.length) {
        const currentSet = new Set(revealedIndices.value[slideIndex])
        currentSet.add(visibleCharacters)
        revealedIndices.value[slideIndex] = currentSet
        visibleCharacters++
      } else {
        if (stepTimer) {
          clearInterval(stepTimer)
          stepTimer = null
        }
      }
    }, 85)
  }, 200)
}

function onSlideSelect(index: number) {
  activeIndex.value = index
  startReveal(index)
}

onMounted(() => {
  if (!hero.value || !curtain.value) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    introComplete.value = true
    gsap.set(curtain.value, { yPercent: -105 })
    startReveal(0)
    carouselAutoplay.value = { delay: 3000, pauseOnHover: false }
    return
  }

  introContext = gsap.context(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        introComplete.value = true
        startReveal(0)
        carouselAutoplay.value = { delay: 3000, pauseOnHover: false }
      },
    })

    timeline
      .to(curtain.value, {
        yPercent: -105,
        duration: 1.8,
        ease: 'power3.inOut',
      })
      .fromTo(
        hero.value?.querySelectorAll('.home-hero-copy') ?? [],
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.28, ease: 'power3.out' },
      )
      .fromTo(
        hero.value?.querySelectorAll('.home-hero-icon') ?? [],
        { autoAlpha: 0, y: 24, scale: 0.82 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.18, ease: 'back.out(1.7)' },
        '+=0.2',
      )
      .fromTo(
        hero.value?.querySelector('.home-hero-word') ?? [],
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power2.out' },
      )
  })
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
  if (stepTimer) clearInterval(stepTimer)
  introContext?.revert()
})
</script>

<template>
    <div>
    <section class="home-section home-scroll-page--hero">
    <div
        ref="hero"
        class="home-hero relative isolate grid min-h-[100svh] content-center items-center justify-center overflow-hidden text-center font-family-[Neue Haas Grotesk Display Pro] font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gap-y-0 py-20 sm:py-24 md:py-24 lg:py-24 px-4 sm:px-6 bg-[linear-gradient(180deg,#2A0D45_0%,#180819_50%,#09090D_100%)]"
        :class="{ 'home-intro-pending': !introComplete, 'home-intro-complete': introComplete }"
    >
        <div class="home-hero-light" aria-hidden="true"></div>
        <div class="home-hero-rings" aria-hidden="true">
            <div class="home-hero-ring home-hero-ring--small"></div>
            <div class="home-hero-ring home-hero-ring--medium"></div>
            <div class="home-hero-ring home-hero-ring--large"></div>
        </div>
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 sm:opacity-75 lg:opacity-100" aria-hidden="true">
            <!-- Left icons cluster (staircase grid from edge inwards) -->
            <div class="home-icon-cluster absolute left-0 -ml-4 sm:-ml-6 lg:-ml-8 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-max pointer-events-none">
                <!-- Row 1: 1 cube on the edge -->
                <div class="col-start-1 row-start-1 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 2: 2 cubes -->
                <div class="col-start-1 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 3: 3 cubes -->
                <div class="col-start-1 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-3 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
            </div>
            <!-- Right icons cluster (mirrored staircase grid) -->
            <div class="home-icon-cluster absolute right-0 -mr-4 sm:-mr-6 lg:-mr-8 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-max pointer-events-none scale-x-[-1]">
                <!-- Row 1: 1 cube on the edge -->
                <div class="col-start-1 row-start-1 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 2: 2 cubes -->
                <div class="col-start-1 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 3: 3 cubes -->
                <div class="col-start-1 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-3 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="home-hero-icon w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
            </div>
        </div>
        <div ref="curtain" class="home-curtain" aria-hidden="true">
            <div class="home-curtain-folds"></div>
            <div class="home-curtain-hem"></div>
        </div>
        <div class="home-hero-copy relative z-10 leading-[0.95] bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-0 sm:py-1 md:py-1 lg:py-2">
            Nous accompagnons la
        </div>
        <div class="home-hero-copy relative z-10 leading-[0.95] bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-0 sm:py-1 md:py-1 lg:py-2">
            transformation digitale des
        </div>
        <div class="home-hero-word relative z-10">
            <UCarousel
                v-slot="{ item, index }"
                orientation="vertical"
                loop
                :autoplay="carouselAutoplay"
                :items="items"
                :ui="{ container: 'h-28' }"
                class="flex justify-center items-center"
                @select="onSlideSelect"
            >
                <div class="bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent text-center leading-tight">
                    <span
                        v-for="(char, charIndex) in item"
                        :key="charIndex"
                        class="inline-block transition-opacity duration-150"
                        :class="revealedIndices[index]?.has(charIndex)
                            ? 'opacity-100'
                            : 'opacity-0'"
                    >
                        {{ char }}
                    </span>
                </div>
            </UCarousel>
        </div>
    </div>
    </section>
    <section class="home-section home-scroll-page--image">
        <img :src="acc" alt="" class="home-showcase-image" fetchpriority="high">
    </section>
    <section class="home-section home-scroll-page--middle">
        <middlesponsors />
    </section>
    <section class="home-section home-scroll-page--expertise">
        <expertises />
    </section>
    <section class="home-section home-scroll-page--projects">
        <ProjectsSection />
    </section>
    </div>
</template>

<style scoped>
.home-curtain {
    position: absolute;
    z-index: 20;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    background: #0c0020;
    will-change: transform;
}

.home-hero-light {
    position: absolute;
    z-index: 0;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 8%, rgba(165, 94, 255, 0.45), transparent 30%);
}

.home-hero-rings {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    width: min(120vw, 1100px);
    aspect-ratio: 1;
    pointer-events: none;
    transform: translateX(-50%);
}

.home-hero-ring {
    position: absolute;
    top: 0;
    left: 50%;
    aspect-ratio: 1;
    border: 1px solid rgb(226 204 255 / 0.16);
    border-radius: 50%;
    transform: translate(-50%, -50%) scaleX(1.35);
}

.home-hero-ring::after {
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: conic-gradient(
        from 0deg,
        transparent 0deg 300deg,
        rgb(213 173 255 / 0.08) 320deg,
        rgb(255 255 255 / 0.8) 345deg,
        rgb(213 173 255 / 0.08) 360deg
    );
    content: '';
    mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px));
    animation: home-ring-light-sweep 12s linear infinite;
}

.home-hero-ring--small {
    width: 26%;
}

.home-hero-ring--medium {
    width: 53%;
}

.home-hero-ring--large {
    width: 80%;
}

@keyframes home-ring-light-sweep {
    to {
        rotate: 360deg;
    }
}

.home-intro-complete .home-hero-light {
    animation: home-lighthouse-light 8s ease-in-out infinite;
}

@keyframes home-lighthouse-light {
    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.08;
    }
}

.home-curtain-folds {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
        90deg,
        rgb(255 255 255 / 0.025) 0,
        rgb(255 255 255 / 0.025) 2px,
        transparent 2px,
        transparent 9%
    );
}

.home-curtain-hem {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 14px;
    background: linear-gradient(180deg, rgb(0 0 0 / 0.3), transparent);
}

.home-intro-pending .home-hero-copy,
.home-intro-pending .home-hero-word {
    visibility: hidden;
    opacity: 0;
}

.home-intro-pending .home-hero-icon {
    opacity: 0;
}

.home-hero-icon {
    will-change: transform, opacity;
}

.home-icon-cluster > div:nth-child(odd) {
    rotate: -5deg;
}

.home-icon-cluster > div:nth-child(even) {
    rotate: 4deg;
}

.home-icon-cluster {
    translate: 0 -20px;
    bottom: -9rem;
}

.home-hero-icon:hover {
    animation: home-icon-hover 1.8s ease-in-out infinite;
    translate: none !important;
    scale: none !important;
}

@keyframes home-icon-hover {
    0%,
    100% {
        transform: translate(0, 0) rotate(0) scale(1);
    }

    16% {
        transform: translate(-12px, -16px) rotate(-5deg) scale(1.04);
    }

    33% {
        transform: translate(16px, -10px) rotate(5deg) scale(1.06);
    }

    50% {
        transform: translate(14px, 16px) rotate(-4deg) scale(1.04);
    }

    67% {
        transform: translate(-16px, 12px) rotate(5deg) scale(1.06);
    }

    84% {
        transform: translate(-10px, -14px) rotate(-4deg) scale(1.03);
    }
}

.home-hero-word {
    will-change: transform, opacity;
}

.home-section {
    width: 100%;
    background: #fff;
}

.home-scroll-page--hero,
.home-scroll-page--image,
.home-scroll-page--projects {
    background: #0c0020;
}

.home-scroll-page--image {
    overflow: hidden;
}

.home-showcase-image {
    display: block;
    width: 100%;
    height: 100svh;
    object-fit: cover;
    object-position: center;
}

.home-scroll-page--middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
}

.home-scroll-page--expertise {
    background: #f7f7fc;
}


@media (prefers-reduced-motion: reduce) {
    .home-intro-complete .home-hero-light {
        animation: none;
    }

    .home-hero-icon:hover {
        animation: none;
    }

    .home-hero-ring::after {
        animation: none;
    }

}
</style>
