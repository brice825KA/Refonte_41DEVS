<script setup lang="ts">
import { ref } from 'vue'
import heroImage from '@/asset/images/Rectangle 9017.png'
import clientBanner from '@/asset/images/Group 1000001213.png'
import quoteScreen from '@/asset/images/Frame 1000002122.svg'
import contractScreen from '@/asset/images/Img lines grp i 3.svg'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'

const features = [
  'Estimation de devis',
  'Souscription à un contrat',
  'Configuration des produits',
  'Gestion des contrats',
  'Gestion des sinistres',
  'Statistiques',
  'Campagnes publicitaires',
]

const services = [
  'Design UI/UX',
  'Développement mobile et web',
  'Déploiement',
  'Maintenance',
]

const otherProjects = [
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'ETCHITÉ', image: etchiteImage, category: 'Application mobile' },
  { name: 'Mon Assurance', image: assuranceImage, category: 'Assurance', route: 'mon-assurance-project' },
]

const otherProjectsTrack = ref<HTMLElement | null>(null)
const canScrollProjectsBack = ref(false)
const canScrollProjectsForward = ref(true)

function updateProjectCarouselControls() {
  const track = otherProjectsTrack.value
  if (!track) return

  canScrollProjectsBack.value = track.scrollLeft > 2
  canScrollProjectsForward.value = track.scrollLeft + track.clientWidth < track.scrollWidth - 2
}

function scrollOtherProjects(direction: -1 | 1) {
  const track = otherProjectsTrack.value
  const firstCard = track?.querySelector<HTMLElement>('.other-project')
  if (!track || !firstCard) return

  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
  track.scrollBy({
    left: direction * (firstCard.offsetWidth + gap),
    behavior: 'smooth',
  })
}
</script>

<template>
  <main class="oremi-page">
    <div class="oremi-hero">
      <img :src="heroImage" alt="Aperçu de l’application mobile Oremi" fetchpriority="high">
    </div>

    <div class="oremi-container">
      <header class="project-heading">
        <h1>Oremi</h1>
        <p>Atlantiques Assurances Bénin IARDT</p>
      </header>

      <section class="project-facts" aria-label="Informations du projet Oremi">
        <div class="project-fact">
          <h2>Industrie</h2>
          <p>Assurance</p>
        </div>
        <div class="project-fact">
          <h2>Fonctionnalités</h2>
          <ul>
            <li v-for="feature in features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div class="project-fact">
          <h2>Services fournis</h2>
          <ul>
            <li v-for="service in services" :key="service">{{ service }}</li>
          </ul>
        </div>
        <div class="project-fact">
          <h2>Plateforme</h2>
          <a href="https://oremi.abj.bj" target="_blank" rel="noreferrer">
            oremi.abj.bj
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M9 2h5v5M14 2 7 9M12 9v4H3V4h4" />
            </svg>
          </a>
        </div>
      </section>

      <section class="client-about">
        <h2>À propos du client</h2>
        <p>
          Atlantiques Assurances Bénin IARDT, filiale de Atlantic Group, est une compagnie d’assurance qui opère au Bénin depuis plusieurs années. Dans un souci d’attractivité et de consolidation de sa position sur le marché assurantiel, elle a entrepris une transformation digitale de ses offres et de son processus de gestion des assurances.
        </p>
      </section>

      <img
        :src="clientBanner"
        alt="Oremi, une expérience d’assurance pensée pour ses clients"
        class="client-banner"
        loading="lazy"
      >

      <div class="project-story">
        <section>
          <h2>Le problème</h2>
          <p>
            Dans sa proposition de valeur sur le marché béninois, Atlantiques Assurances Bénin IARDT faisait face à plusieurs défis, notamment l’accessibilité insuffisante de ses offres et la lourdeur administrative dans la gestion des contrats. Consciente de l’apport du digital pour améliorer ses offres et ses processus, l’entreprise nous a sollicités pour concevoir une solution innovante et sur mesure.
          </p>
        </section>

        <section>
          <h2>La solution</h2>
          <p>
            Oremi est un ensemble de solutions digitales qui intervient sur toute la chaîne de valeur de l’assurance, de l’estimation de devis à la gestion des contrats, en passant par la souscription et la gestion des sinistres.
          </p>
          <p>Oremi, c’est :</p>
          <ul>
            <li>Un site internet vitrine</li>
            <li>Une application mobile et web pour les clients</li>
            <li>Une application web pour les partenaires</li>
            <li>Un tableau de bord de gestion en back-office</li>
          </ul>
          <p>
            La mise en place de cette solution a permis à l’entreprise d’améliorer considérablement ses indicateurs de performance et de rentabilité.
          </p>
        </section>
      </div>

      <section class="product-screens" aria-label="Écrans de l’application Oremi">
        <img :src="quoteScreen" alt="Écran de sélection des produits d’assurance Oremi" loading="lazy">
        <img :src="contractScreen" alt="Écran de consultation d’un contrat d’assurance Oremi" loading="lazy">
      </section>

      <section class="other-projects">
        <div class="other-projects-heading">
          <h2>Autres projets</h2>
        </div>
        <div class="other-projects-carousel">
          <button
            type="button"
            class="carousel-arrow"
            aria-label="Afficher les projets précédents"
            :disabled="!canScrollProjectsBack"
            @click="scrollOtherProjects(-1)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
            </svg>
          </button>
          <div
            ref="otherProjectsTrack"
            class="other-projects-track"
            role="region"
            aria-label="Autres projets"
            tabindex="0"
            @scroll.passive="updateProjectCarouselControls"
          >
          <component
            :is="project.route ? 'RouterLink' : 'article'"
            v-for="project in otherProjects"
            :key="project.name"
            :to="project.route ? { name: project.route } : undefined"
            class="other-project"
          >
            <img :src="project.image" :alt="`Projet ${project.name}`" loading="lazy">
            <div class="other-project-caption">
              <h3>{{ project.name }}</h3>
              <span>{{ project.category }}</span>
            </div>
          </component>
          </div>
          <button
            type="button"
            class="carousel-arrow"
            aria-label="Afficher les projets suivants"
            :disabled="!canScrollProjectsForward"
            @click="scrollOtherProjects(1)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.oremi-page {
  min-height: 100vh;
  padding-top: 82px;
  padding-bottom: 88px;
  background: #fff;
  color: #141414;
}

.oremi-hero {
  width: 100%;
  overflow: hidden;
  background: #c3e2ff;
}

.oremi-hero img {
  display: block;
  width: 100%;
  aspect-ratio: 1920 / 686;
  object-fit: cover;
  object-position: center;
}

.oremi-container {
  width: min(100% - 48px, 1180px);
  margin-inline: auto;
}

.project-heading {
  padding: 26px 0 24px;
  border-bottom: 1px solid #e8e8e8;
}

.project-heading h1,
.project-heading p,
.project-fact h2,
.project-fact p,
.client-about h2,
.client-about p,
.project-story h2,
.project-story p,
.other-projects h2,
.other-project-caption h3 {
  margin: 0;
}

.project-heading h1,
.project-story h2,
.other-projects h2 {
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-weight: 600;
}

.project-heading h1 {
  font-size: 34px;
  line-height: 1.15;
}

.project-heading p {
  margin-top: 7px;
  color: #414141;
  font-size: 16px;
}

.project-facts {
  display: grid;
  grid-template-columns: 0.9fr 1.25fr 1fr 0.8fr;
  gap: 30px;
  padding: 32px 0 38px;
  border-bottom: 1px solid #e8e8e8;
}

.project-fact h2,
.client-about h2 {
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
}

.project-fact p,
.project-fact ul,
.project-fact a {
  margin-top: 7px;
  color: #777;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 13px;
  line-height: 1.55;
}

.project-fact ul,
.project-story ul {
  padding-left: 17px;
}

.project-fact ul {
  margin-bottom: 0;
}

.project-fact a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
}

.project-fact a:hover {
  color: #5c308c;
}

.project-fact a svg {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.2;
}

.client-about {
  max-width: 820px;
  padding: 34px 0 28px;
}

.client-about p,
.project-story p,
.project-story li {
  color: #666;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 14px;
  line-height: 1.65;
}

.client-about p {
  margin-top: 9px;
}

.client-banner {
  display: block;
  width: 100%;
  aspect-ratio: 1560 / 573;
  border-radius: 8px;
  object-fit: cover;
}

.project-story {
  display: grid;
  gap: 38px;
  width: min(100%, 760px);
  margin: 34px auto 42px;
}

.project-story h2,
.other-projects h2 {
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 1.25;
}

.project-story p + p {
  margin-top: 12px;
}

.project-story ul {
  margin: 8px 0 12px;
}

.product-screens {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 44px;
}

.product-screens img {
  display: block;
  width: 100%;
  border-radius: 12px;
  background: #e7f4ff;
}

.other-projects {
  padding-top: 52px;
  border-top: 1px solid #dedede;
}

.other-projects-heading {
  margin-bottom: 20px;
}

.other-projects-carousel {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) 40px;
  align-items: center;
  gap: 12px;
}

.other-projects-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  outline: none;
}

.other-projects-track::-webkit-scrollbar {
  display: none;
}

.other-projects-track:focus-visible {
  outline: 2px solid #8a45cf;
  outline-offset: 5px;
}

.carousel-arrow {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  color: #5c308c;
  background: #f7f0ff;
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease, opacity 180ms ease;
}

.carousel-arrow:hover:not(:disabled) {
  color: #fff;
  background: #5c308c;
}

.carousel-arrow:disabled {
  opacity: 0.4;
  cursor: default;
}

.carousel-arrow svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.other-project {
  flex: 0 0 clamp(240px, 28vw, 340px);
  min-width: 0;
  scroll-snap-align: start;
}

.other-project > img {
  display: block;
  width: 100%;
  aspect-ratio: 1.35;
  border-radius: 6px;
  background: #eef4fa;
  object-fit: cover;
}

.other-project-caption {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  padding-top: 10px;
}

.other-project-caption h3 {
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: 15px;
  font-weight: 600;
}

.other-project-caption span {
  color: #777;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 11px;
  text-align: right;
}

@media (max-width: 760px) {
  .oremi-container {
    width: min(100% - 32px, 560px);
  }

  .oremi-hero img {
    min-height: 220px;
    object-position: center;
  }

  .project-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 18px;
  }

  .product-screens {
    gap: 12px;
  }

  .other-projects-grid {
    gap: 16px;
  }

  .other-projects-carousel {
    grid-template-columns: 34px minmax(0, 1fr) 34px;
    gap: 8px;
    margin-inline: 0;
  }

  .carousel-arrow {
    width: 34px;
    height: 34px;
  }

  .other-project {
    flex-basis: min(78vw, 320px);
  }

  .other-project-caption {
    align-items: flex-start;
    flex-direction: column;
    gap: 3px;
  }

  .other-project-caption span {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .oremi-page {
    padding-top: 72px;
  }

  .oremi-hero img {
    min-height: 190px;
    aspect-ratio: 1.5;
  }

  .project-heading h1 {
    font-size: 30px;
  }

  .project-facts {
    grid-template-columns: 1fr 1fr;
    gap: 22px 12px;
  }

  .project-fact h2 {
    font-size: 15px;
  }

  .project-fact p,
  .project-fact ul,
  .project-fact a {
    font-size: 12px;
  }

  .client-about p,
  .project-story p,
  .project-story li {
    font-size: 13px;
  }

  .product-screens {
    grid-template-columns: 1fr;
  }

}
</style>