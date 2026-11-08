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
  <section class="projects-section px-5 pt-12 pb-8 text-white sm:px-8 sm:pt-16 sm:pb-10 lg:px-10 lg:pt-20 lg:pb-12">
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
          <img
            :src="project.image"
            :alt="`Projet ${project.name}`"
            class="project-image"
            loading="lazy"
          >
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

.project-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
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

  .grh .project-image {
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
</style>
