<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavBar from './container/helper/NavBar.vue'
import MyFooter from '@/container/helper/Footer.vue'
import { RouterView } from 'vue-router'

const route = useRoute()
const routeContent = ref<HTMLElement | null>(null)
const footerReveal = ref<HTMLElement | null>(null)
let homeScrollContext: gsap.Context | undefined

gsap.registerPlugin(ScrollTrigger)

function setupHomeScrollAnimations() {
  homeScrollContext?.revert()
  homeScrollContext = undefined

  if (
    route.name !== 'accueil' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return

  const content = routeContent.value
  const sections = content
    ? [...content.querySelectorAll<HTMLElement>('.home-section')]
    : []
  if (!sections.length) return

  homeScrollContext = gsap.context(() => {
    sections.forEach((section, index) => {
      const isLongSection = section.matches(
        '.home-scroll-page--expertise, .home-scroll-page--projects',
      )
      const isMiddleSection = section.matches('.home-scroll-page--middle')
      const isProjectsSection = section.matches('.home-scroll-page--projects')
      const revealTarget = isMiddleSection
        ? section.querySelector<HTMLElement>('.sponsor-showcase-card') ?? section
        : isProjectsSection
          ? section.querySelector<HTMLElement>('.projects-section') ?? section
          : section

      gsap.set(section, {
        position: isLongSection ? 'relative' : 'sticky',
        top: isLongSection ? 'auto' : 0,
        minHeight: isLongSection ? undefined : '100svh',
        zIndex: index + 10,
        willChange: isMiddleSection || isProjectsSection ? 'auto' : 'clip-path',
      })

      if (isMiddleSection || isProjectsSection) gsap.set(section, { clipPath: 'none' })

      gsap.fromTo(
        revealTarget,
        isMiddleSection
          ? { yPercent: 100 }
          : { clipPath: 'inset(100% 0 0)' },
        {
          ...(isMiddleSection
            ? { yPercent: 0 }
            : { clipPath: 'inset(0% 0 0)' }),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top top',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        },
      )
    })

    const footer = footerReveal.value?.querySelector<HTMLElement>('footer')
    if (footer && footerReveal.value) {
      gsap.fromTo(
        footer,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: footerReveal.value,
            start: 'top bottom',
            end: 'top 75%',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        },
      )
    }
  })

  ScrollTrigger.refresh()
}

function scheduleHomeScrollAnimations() {
  requestAnimationFrame(() => {
    void nextTick(setupHomeScrollAnimations)
  })
}

watch(() => route.fullPath, scheduleHomeScrollAnimations)
onMounted(scheduleHomeScrollAnimations)
onBeforeUnmount(() => homeScrollContext?.revert())
</script>

<template>
  <NavBar class="fixed bg-transparent top-0 left-0 z-1000 w-full" />
  <div ref="routeContent">
    <RouterView />
  </div>
  <div ref="footerReveal" class="bg-[#0C0020]">
    <MyFooter />
  </div>
</template>
