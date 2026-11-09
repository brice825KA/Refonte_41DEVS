<script setup lang="ts">
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'

const projects = [
  { name: 'AFG Bank', image: afgBankImage, layout: 'afg-bank' },
  { name: 'Oremi', image: oremiImage, layout: 'oremi' },
  { name: 'Présidence GRH', image: grhImage, layout: 'grh' },
  { name: 'ETCHITÉ', image: etchiteImage, layout: 'etchite' },
  { name: 'Mon Assurance', image: assuranceImage, layout: 'assurance' },
]

const projectCategories = ['UX DESIGN', 'AUDIT', 'DÉVELOPPEMENT']
</script>

<template>
  <section class="projects-section px-5 pb-8 text-white sm:px-8 sm:pt-16 sm:pb-10 lg:px-10 lg:pt-20 lg:pb-12 pt-30">
    <div class="mx-auto max-w-6xl">
      <header class="mb-8 sm:mb-10 lg:mb-14">
        <h2 class="m-0 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Nos réalisations</h2>
        <div class="mt-3 h-px w-4 bg-white/40" aria-hidden="true"></div>
      </header>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.name"
          class="project-card"
          :class="project.layout"
        >
          <div class="project-image-wrap">
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
          <p v-if="project.layout === 'grh'" class="project-description">
            Hipster ipsum tattooed brunch I'm baby. Rights heard kombucha photo roof meh lomo sartorial organic.
          </p>
        </article>
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 14px;
  row-gap: 28px;
  align-items: start;
}

.project-card {
  min-width: 0;
}

.project-image-wrap {
  position: relative;
  overflow: hidden;
}

.project-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: filter 500ms ease;
}

.project-view {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 999px;
  color: #fff;
  background: rgb(70 70 70 / 0.58);
  backdrop-filter: blur(8px);
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transform: translate(180%, -50%);
  transition:
    transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
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

.project-card:hover .project-view,
.project-card:focus-within .project-view {
  opacity: 1;
  transform: translate(-50%, -50%);
}

.project-card:hover .project-image,
.project-card:focus-within .project-image {
  filter: brightness(0.78);
}

.project-caption {
  margin-top: 8px;
}

.project-categories {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: #fff;
  font-size: 7px;
  line-height: 1.4;
  white-space: nowrap;
}

.category-dot {
  width: 3px;
  height: 3px;
  flex: 0 0 3px;
  border-radius: 50%;
  background-color: #fff;
}

.project-description {
  margin: 8px 0 0;
  color: #fff;
  font-size: 8px;
  line-height: 1.5;
}

.grh {
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 24px;
    row-gap: 48px;
  }

  .afg-bank {
    grid-column: 1 / 7;
  }

  .oremi {
    grid-column: 7 / -1;
    margin-top: 18px;
  }

  .grh {
    grid-column: 1 / -1;
  }

  .etchite {
    grid-column: 1 / 5;
  }

  .assurance {
    grid-column: 5 / -1;
    margin-top: 10px;
  }

  .project-caption {
    margin-top: 12px;
  }

  .project-categories {
    gap: 10px;
    margin-top: 6px;
    font-size: 10px;
  }

  .category-dot {
    width: 6px;
    height: 6px;
    flex-basis: 6px;
  }

  .grh {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
    column-gap: 24px;
  }

  .grh .project-image-wrap {
    grid-column: 1 / -1;
  }

  .grh .project-caption {
    grid-column: 1;
  }

  .project-description {
    grid-column: 2;
    margin: 12px 0 0;
    text-align: right;
    font-size: 10px;
  }
}

@media (max-width: 420px) {
  .project-categories {
    gap: 4px;
    font-size: 6px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-image,
  .project-view {
    transition: none;
  }
}
</style>
