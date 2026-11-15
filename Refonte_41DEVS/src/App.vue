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
let footerScrollContext: gsap.Context | undefined

gsap.registerPlugin(ScrollTrigger)

function setupFooterAnimation() {
  footerScrollContext?.revert()
  footerScrollContext = undefined

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const footer = footerReveal.value?.querySelector<HTMLElement>('footer')
  if (footer && footerReveal.value) {
    footerScrollContext = gsap.context(() => {
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
    })
  }

  ScrollTrigger.refresh()
}

function scheduleFooterAnimation() {
  requestAnimationFrame(() => {
    void nextTick(setupFooterAnimation)
  })
}

watch(() => route.fullPath, scheduleFooterAnimation)
onMounted(scheduleFooterAnimation)
onBeforeUnmount(() => footerScrollContext?.revert())
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
