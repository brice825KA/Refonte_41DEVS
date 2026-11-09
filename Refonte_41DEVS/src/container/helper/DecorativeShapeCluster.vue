<script setup lang="ts">
import DecorativeShape from './DecorativeShape.vue'

withDefaults(defineProps<{
  side: 'left' | 'right'
  variant: 'hero' | 'footer'
  introPending?: boolean
}>(), {
  introPending: false,
})

const shapes = [
  { column: 1, row: 1 },
  { column: 1, row: 2 },
  { column: 2, row: 2 },
  { column: 1, row: 3 },
  { column: 2, row: 3 },
  { column: 3, row: 3 },
]
</script>

<template>
  <div
    class="decorative-shape-cluster"
    :class="[
      `decorative-shape-cluster--${variant}`,
      `decorative-shape-cluster--${side}`,
    ]"
    aria-hidden="true"
  >
    <div
      v-for="(shape, index) in shapes"
      :key="`${shape.column}-${shape.row}`"
      class="decorative-shape-item"
      :class="{
        'home-hero-icon': variant === 'hero',
        'footer-hero-icon': variant === 'footer',
        'decorative-shape-item--intro-pending': variant === 'hero' && introPending,
        'decorative-shape-item--odd': index % 2 === 0,
      }"
      :style="{ gridColumn: shape.column, gridRow: shape.row }"
    >
      <DecorativeShape />
    </div>
  </div>
</template>

<style scoped>
.decorative-shape-cluster {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, var(--shape-size, 5rem));
  gap: var(--shape-gap, 0.75rem);
  width: max-content;
  pointer-events: none;
}

.decorative-shape-cluster--left {
  left: 0;
  margin-left: -1rem;
}

.decorative-shape-cluster--right {
  right: 0;
  margin-right: -1rem;
  transform: scaleX(-1);
}

.decorative-shape-cluster--hero {
  --shape-size: 7.5rem;
  --shape-gap: 1rem;
  bottom: -8rem;
}

.decorative-shape-cluster--footer {
  --shape-size: 7rem;
  --shape-gap: 1rem;
  bottom: -9rem;
}

.decorative-shape-item {
  position: relative;
  width: var(--shape-size, 5rem);
  aspect-ratio: 97 / 99;
  filter: drop-shadow(0 0 1rem rgb(112 35 221 / 0.32));
  transition: filter 300ms ease;
}

.decorative-shape-item--odd {
  rotate: -5deg;
}

.decorative-shape-item:not(.decorative-shape-item--odd) {
  rotate: 4deg;
}

.decorative-shape-item:hover {
  animation: decorative-shape-hover 1.8s ease-in-out infinite;
  filter: brightness(1.25) drop-shadow(0 15px 25px rgb(168 85 247 / 0.55));
}

.decorative-shape-item--intro-pending {
  opacity: 0;
}

@keyframes decorative-shape-hover {
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

@media (min-width: 640px) {
  .decorative-shape-cluster--hero {
    --shape-size: 9.5rem;
  }

  .decorative-shape-cluster--footer {
    --shape-size: 8rem;
  }

  .decorative-shape-cluster--left {
    margin-left: -1.5rem;
  }

  .decorative-shape-cluster--right {
    margin-right: -1.5rem;
  }
}

@media (min-width: 768px) {
  .decorative-shape-cluster--hero {
    --shape-size: 11rem;
  }

  .decorative-shape-cluster--footer {
    --shape-size: 9.5rem;
  }
}

@media (min-width: 1024px) {
  .decorative-shape-cluster--hero {
    --shape-size: 13rem;
  }

  .decorative-shape-cluster--footer {
    --shape-size: 11rem;
    bottom: -10rem;
  }

  .decorative-shape-cluster--left {
    margin-left: -2rem;
  }

  .decorative-shape-cluster--right {
    margin-right: -2rem;
  }
}

@media (max-width: 639px) {
  .decorative-shape-cluster {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .decorative-shape-item {
    transition: none;
  }

  .decorative-shape-item:hover {
    animation: none;
  }
}
</style>
