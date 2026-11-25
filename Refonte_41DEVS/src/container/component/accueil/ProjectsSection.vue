<script setup lang="ts">
import { RouterLink } from 'vue-router'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'
import remaImage from '@/asset/images/img_rema.webp'

const projects = [
  { name: 'AFG Bank', image: afgBankImage, layout: 'afg-bank' },
  { name: 'Oremi', image: oremiImage, layout: 'oremi' },
  { name: 'Présidence GRH', image: grhImage, layout: 'grh' },
  { name: 'ETCHITÉ', image: etchiteImage, layout: 'etchite', route: 'etchite-project' },
  { name: 'Mon Assurance', image: assuranceImage, layout: 'assurance', route: 'mon-assurance-project' },
]

const projectCategories = ['UX DESIGN', 'AUDIT', 'DÉVELOPPEMENT']

function moveProjectCursor(event: PointerEvent) {
  if (event.pointerType === 'touch') return

  const image = event.currentTarget as HTMLElement
  const bounds = image.getBoundingClientRect()
  image.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  image.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
  image.classList.add('is-pointer-active')
}

function hideProjectCursor(event: PointerEvent) {
  const image = event.currentTarget as HTMLElement
  image.classList.remove('is-pointer-active')
}
</script>

<template>
  <section class="projects-section px-5 pb-8 text-white sm:px-8 sm:pt-16 sm:pb-10 lg:px-10 lg:pt-20 lg:pb-12 pt-30">
    <div class="mx-auto max-w-[1572px]">
      <header class="mb-8 sm:mb-10 lg:mb-14">
        <h2 class="m-0 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Nos réalisations</h2>
        <div class="projects-header-line mt-3 h-px w-4 bg-white/40" aria-hidden="true"></div>
      </header>

      <div class="projects-grid">
        <component
          v-for="project in projects"
          :key="project.name"
          :is="project.route || project.layout === 'oremi' ? RouterLink : 'article'"
          :to="project.route ? { name: project.route } : project.layout === 'oremi' ? { name: 'oremi-project' } : undefined"
          class="project-card"
          :class="project.layout"
        >
          <div
            class="project-image-wrap"
            @pointermove="moveProjectCursor"
            @pointerleave="hideProjectCursor"
          >
            <img
              :src="project.image"
              :alt="`Projet ${project.name}`"
              class="project-image"
              loading="lazy"
            >
            <span class="project-view" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
              </svg>
              <span>Voir</span>
            </span>
          </div>
          <div class="project-caption">
            <h3 class="m-0 text-base font-semibold sm:text-xl lg:text-2xl">{{ project.name }}</h3>
            <div class="project-categories" aria-label="Catégories du projet">
              <template v-for="(category, index) in projectCategories" :key="category">
                <span v-if="index" class="category-dot" aria-hidden="true"></span>
                <span>{{ category }}</span>
              </template>
            </div>
          </div>
          <div v-if="project.layout === 'grh'" class="project-description">
            <div>Hipster ipsum tattooed brunch I'm baby. Rights heard</div>
            <div>kombucha photo roof meh lomo sartorial organic.</div>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background-color: #0c0020;
}

.projects-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 28px;
  align-items: start;
}

.project-card {
  display: block;
  min-width: 0;
  color: inherit;
  text-decoration: none;
}

.project-card:focus-visible {
  outline: 2px solid #a875ed;
  outline-offset: 6px;
}

.project-image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
}

.project-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 500ms ease;
}

.afg-bank .project-image-wrap {
  aspect-ratio: 804 / 653;
}

.oremi .project-image-wrap {
  aspect-ratio: 713 / 754;
}

.grh .project-image-wrap {
  aspect-ratio: 1572 / 732;
}

.etchite .project-image-wrap {
  aspect-ratio: 581 / 741;
}

.assurance .project-image-wrap {
  aspect-ratio: 937 / 653;
}

.rema .project-image-wrap {
  aspect-ratio: 800 / 600;
}

.project-view {
  position: absolute;
  top: var(--pointer-y, 50%);
  left: var(--pointer-x, 50%);
  display: inline-flex;
  width: 88px;
  height: 88px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 50%;
  color: #fff;
  background: rgb(70 70 70 / 0.58);
  backdrop-filter: blur(8px);
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition:
    opacity 500ms ease;
}

.project-view svg {
  width: 1.1rem;
  height: 1.1rem;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.project-image-wrap.is-pointer-active .project-view {
  opacity: 1;
}

.project-card:hover .project-image,
.project-card:focus-within .project-image {
  filter: brightness(0.78);
}

.project-caption {
  margin-top: 8px;
}

.project-caption h3 {
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: 28px;
  font-weight: 600;
  font-style: normal;
  line-height: 1.27;
}

.project-categories {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  margin-top: 4px;
  color: #fff;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.7;
  text-transform: uppercase;
}

.category-dot {
  width: 4px;
  height: 4px;
  flex: 0 0 4px;
  border-radius: 50%;
  background-color: #fff;
}

.project-description {
  margin: 8px 0 0;
  color: #fff;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.7;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 48px;
  }

  .afg-bank {
    grid-column: 1;
    grid-row: 1;
    width: 51.15%;
  }

  .oremi {
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    width: 45.35%;
    margin-top: 7px;
  }

  .grh {
    grid-column: 1;
    grid-row: 2;
  }

  .etchite {
    grid-column: 1;
    grid-row: 3;
    width: 36.96%;
  }

  .assurance {
    grid-column: 1;
    grid-row: 3;
    justify-self: end;
    width: 59.6%;
  }

  .rema {
    grid-column: 1;
    grid-row: 4;
    width: 40%;
  }

  .project-caption {
    margin-top: 12px;
  }

  .project-caption h3 {
    font-size: 36px;
  }

  .project-categories {
    gap: 4px 10px;
    margin-top: 6px;
    font-size: 18px;
  }

  .category-dot {
    width: 6px;
    height: 6px;
    flex-basis: 6px;
  }

  .grh {
    display: grid;
    grid-template-columns: minmax(0, 2.15fr) minmax(0, 1fr);
    align-items: start;
    column-gap: 32px;
  }

  .grh .project-image-wrap {
    grid-column: 1 / -1;
  }

  .grh .project-caption {
    grid-column: 1;
  }

  .project-description {
    grid-column: 2;
    margin: 20px 0 0;
    text-align: left;
    font-size: 20px;
    line-height: 34px;
  }
}

@media (min-width: 1200px) {
  .project-caption h3 {
    font-size: 48px;
  }

  .project-categories {
    font-size: 22.32px;
    line-height: 37.97px;
  }
}

@media (max-width: 767px) {
  .project-card {
    grid-column: 1;
    grid-row: auto;
    width: 100%;
  }

  .project-image-wrap {
    aspect-ratio: auto;
  }

  .project-image {
    height: auto;
  }

  .project-description {
    font-size: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-image,
  .project-view {
    transition: none;
  }
}
</style>
