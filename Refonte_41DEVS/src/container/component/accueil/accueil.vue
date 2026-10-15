<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import headerIcon from '@/asset/icons/ic_header_acceuil.svg'
import middlesponsors from './Middle_acceuil_Sponsors.vue'
import expertises from './expertises.vue'

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

function getCenterOutOrder(word: string): number[] {
  const len = word.length
  const mid = Math.floor(len / 2)
  const order: number[] = [mid]
  let offset = 1
  while (order.length < len) {
    if (mid - offset >= 0) order.push(mid - offset)
    if (mid + offset < len) order.push(mid + offset)
    offset++
  }
  return order
}

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
  const order = getCenterOutOrder(word)
  let currentStep = 0

  timer = setTimeout(() => {
    stepTimer = setInterval(() => {
      if (currentStep < order.length) {
        const nextCharIdx = order[currentStep]
        if (nextCharIdx !== undefined) {
          const currentSet = new Set(revealedIndices.value[slideIndex])
          currentSet.add(nextCharIdx)
          revealedIndices.value[slideIndex] = currentSet
        }
        currentStep++
      } else {
        if (stepTimer) {
          clearInterval(stepTimer)
          stepTimer = null
        }
      }
    }, 55)
  }, 120)
}

function onSlideSelect(index: number) {
  activeIndex.value = index
  startReveal(index)
}

onMounted(() => {
  onSlideSelect(0)
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
  if (stepTimer) clearInterval(stepTimer)
})
</script>

<template>
    <div class="relative isolate grid items-center justify-center overflow-hidden text-center font-family-[Neue Haas Grotesk Display Pro] font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gap-y-1 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-[radial-gradient(circle_at_50%_8%,rgba(165,94,255,0.45),transparent_30%),linear-gradient(180deg,#2A0D45_0%,#180819_50%,#09090D_100%)]">
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 sm:opacity-75 lg:opacity-100" aria-hidden="true">
            <!-- Left icons cluster (staircase grid from edge inwards) -->
            <div class="absolute bottom-0 left-0 -ml-4 sm:-ml-6 lg:-ml-8 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-max pointer-events-none">
                <!-- Row 1: 1 cube on the edge -->
                <div class="col-start-1 row-start-1 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 2: 2 cubes -->
                <div class="col-start-1 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 3: 3 cubes -->
                <div class="col-start-1 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-3 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
            </div>
            <!-- Right icons cluster (mirrored staircase grid) -->
            <div class="absolute bottom-0 right-0 -mr-4 sm:-mr-6 lg:-mr-8 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-max pointer-events-none scale-x-[-1]">
                <!-- Row 1: 1 cube on the edge -->
                <div class="col-start-1 row-start-1 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 2: 2 cubes -->
                <div class="col-start-1 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-2 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <!-- Row 3: 3 cubes -->
                <div class="col-start-1 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-2 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
                <div class="col-start-3 row-start-3 w-20 sm:w-28 md:w-36 lg:w-40 h-auto">
                    <img :src="headerIcon" class="w-full h-auto pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_15px_25px_rgba(168,85,247,0.55)] select-none" alt="">
                </div>
            </div>
        </div>
        <div class="relative z-10 bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-1 sm:py-2 md:py-3 lg:py-5">
            Nous accompagnons la
        </div>
        <div class="relative z-10 bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-1 sm:py-2 md:py-3 lg:py-5">
            transformation digitale des
        </div>
        <div class="relative z-10">
            <UCarousel
                v-slot="{ item, index }"
                orientation="vertical"
                loop
                :autoplay="{ delay: 3000, pauseOnHover: false }"
                :items="items"
                :ui="{ container: 'h-50' }"
                class="flex justify-center items-center"
                @select="onSlideSelect"
            >
                <div class="bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent text-center leading-tight">
                    <span
                        v-for="(char, charIndex) in item"
                        :key="charIndex"
                        class="inline-block transition-all duration-300 transform"
                        :class="revealedIndices[index]?.has(charIndex)
                            ? 'opacity-100 scale-100 translate-y-0 filter-none'
                            : 'opacity-0 scale-50 translate-y-3 blur-xs'"
                    >
                        {{ char }}
                    </span>
                </div>
            </UCarousel>
        </div>
    </div>
    <middlesponsors />
    <expertises />
</template>
