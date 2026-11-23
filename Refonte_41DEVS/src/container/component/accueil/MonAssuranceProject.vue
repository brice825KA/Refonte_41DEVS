<script setup lang="ts">
import { ref } from 'vue'
import dashboardImage from '@/asset/images/Mockupddf 1(1).png'
import clientBanner from '@/asset/images/monassurance-client-banner.jpg'
import quoteImage from '@/asset/images/Style_06.png'
import contractsImage from '@/asset/images/Style_16(1).png'
import managementImage from '@/asset/images/Style_16(2).png'
import dashboardDetailImage from '@/asset/images/Style_16.png'
import tabletImage from '@/asset/images/Frame 1000002185.png'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import carexImage from '@/asset/images/carex7.webp'
import remaImage from '@/asset/images/img_rema.webp'

const features = [
  'Comparateur de devis',
  'Estimation des devis',
  'Souscription en ligne',
  'Configuration des produits',
  'Gestion des contrats',
  'Gestion des sinistres',
  'Statistiques',
  'Campagnes publicitaires',
]

const services = [
  'Étude et optimisation',
  'Branding',
  'Design UI/UX',
  'Développement mobile et web',
  'Déploiement',
  'Maintenance',
  'Infrastructure cloud',
]

const relatedProjects = [
  { name: 'OHO Les lunettes', image: contractsImage, category: 'Gestion commerciale' },
  { name: 'AFG Bank', image: afgBankImage, category: 'Banque et finance' },
  { name: 'Oremi', image: oremiImage, category: 'Assurance', route: 'oremi-project' },
  { name: 'ETCHITÉ', image: etchiteImage, category: 'Application mobile' },
  { name: 'Carex', image: carexImage, category: 'Santé', route: 'carex-project' },
  { name: 'Rema', image: remaImage, category: 'Santé', route: 'rema-project' },
]

const relatedTrack = ref<HTMLElement | null>(null)
const canScrollBack = ref(false)
const canScrollForward = ref(true)

function updateCarouselControls() {
  const track = relatedTrack.value
  if (!track) return
  canScrollBack.value = track.scrollLeft > 2
  canScrollForward.value = track.scrollLeft + track.clientWidth < track.scrollWidth - 2
}

function scrollRelatedProjects(direction: -1 | 1) {
  const track = relatedTrack.value
  const card = track?.querySelector<HTMLElement>('.related-project')
  if (!track || !card) return
  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
  track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}
</script>

<template>
  <main class="assurance-page">
    <figure class="assurance-hero">
      <img :src="dashboardImage" alt="Monassurance.bj, une plateforme digitale d’assurance" fetchpriority="high">
    </figure>

    <div class="assurance-container">
      <header class="project-heading">
        <h1>Monassurance.bj</h1>
        <p>Azur Solutions SAS</p>
      </header>

      <section class="project-facts" aria-label="Informations du projet Monassurance.bj">
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
          <a href="https://monassurance.bj" target="_blank" rel="noreferrer">
            monassurance.bj
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M9 2h5v5M14 2 7 9M12 9v4H3V4h4" />
            </svg>
          </a>
        </div>
      </section>

      <section class="client-about">
        <h2>À propos du client</h2>
        <p>
          Azur Solutions est la branche tech du courtier en assurance Azur Courtage, qui opère au Bénin et dans la sous-région depuis plusieurs années. L’entreprise a dans son portefeuille des dizaines de compagnies d’assurance partenaires et des milliers de clients.
        </p>
      </section>

      <img
        :src="clientBanner"
        alt="Monassurance.bj accompagne ses assurés dans leurs démarches"
        class="client-banner"
        loading="lazy"
      >

      <div class="project-story">
        <section>
          <h2>Le problème</h2>
          <p>
            Malgré la forte croissance du secteur des assurances au Bénin et dans la sous-région ouest-africaine, le retard de digitalisation de l’offre des assureurs maintient les difficultés d’accès pour les souscripteurs, une absence de visibilité et de clarté sur l’offre globale assurantielle disponible et des difficultés courantes des usagers pour gérer leurs contrats ou déclarer et suivre leurs sinistres.
          </p>
        </section>

        <section>
          <h2>La solution</h2>
          <p>
            Monassurance.bj est une plateforme unique qui permet aux utilisateurs de comparer, souscrire et gérer en toute simplicité leurs contrats d’assurance.
          </p>
          <p>La plateforme comprend :</p>
          <ul>
            <li>Un site internet vitrine</li>
            <li>Une application web pour les clients</li>
            <li>Une application web pour les partenaires</li>
            <li>Un back-office de gestion</li>
          </ul>
        </section>
      </div>

      <section class="dashboard-showcase" aria-label="Tableau de bord Monassurance.bj">
        <img :src="dashboardDetailImage" alt="Tableau de bord et statistiques Monassurance.bj" loading="lazy">
      </section>

      <section class="product-screens" aria-label="Écrans des services Monassurance.bj">
        <img :src="quoteImage" alt="Sélection d’un produit pour déclarer un sinistre" loading="lazy">
        <img :src="contractsImage" alt="Gestion des contrats et des offres d’assurance" loading="lazy">
        <img :src="managementImage" alt="Consultation des assurances depuis un téléphone" loading="lazy">
      </section>

      <section class="closing-showcase" aria-label="L’expérience Monassurance.bj sur tablette">
        <img :src="tabletImage" alt="Une utilisatrice présente l’application Monassurance.bj sur tablette" loading="lazy">
        <p>La plateforme permet aux utilisateurs de comparer les offres, souscrire et gérer leurs assurances simplement.</p>
      </section>

      <section class="related-projects">
        <h2>Autres projets</h2>
        <div class="related-projects-carousel">
          <button type="button" class="carousel-arrow" :disabled="!canScrollBack" aria-label="Voir les projets précédents" @click="scrollRelatedProjects(-1)">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
          </button>
          <div
            ref="relatedTrack"
            class="related-projects-track"
            role="region"
            aria-label="Autres réalisations"
            tabindex="0"
            @scroll.passive="updateCarouselControls"
          >
            <component
              :is="project.route ? 'RouterLink' : 'article'"
              v-for="project in relatedProjects"
              :key="project.name"
              :to="project.route ? { name: project.route } : undefined"
              class="related-project"
              role="listitem"
            >
              <img :src="project.image" :alt="`Projet ${project.name}`" loading="lazy">
              <div class="related-project-caption">
                <h3>{{ project.name }}</h3>
                <span>{{ project.category }}</span>
                <span v-if="project.route" class="related-project-more">Voir plus</span>
              </div>
            </component>
          </div>
          <button type="button" class="carousel-arrow" :disabled="!canScrollForward" aria-label="Voir les projets suivants" @click="scrollRelatedProjects(1)">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.assurance-page {
  min-height: 100vh;
  padding-top: 82px;
  padding-bottom: 88px;
  background: #fff;
  color: #141414;
}

.assurance-hero {
  position: relative;
  isolation: isolate;
  width: 100%;
  aspect-ratio: 1920 / 686;
  margin: 0;
  overflow: hidden;
  background-color: #5657d5;
  background-image:
    linear-gradient(132deg, transparent 0 9%, rgb(111 91 235 / 0.72) 9.1% 22%, transparent 22.1%),
    linear-gradient(48deg, transparent 0 23%, rgb(111 114 231 / 0.48) 23.1% 44%, transparent 44.1%),
    linear-gradient(246deg, transparent 0 37%, rgb(79 83 209 / 0.62) 37.1% 57%, transparent 57.1%),
    linear-gradient(180deg, #5758d8, #5053d2);
}

.assurance-hero img {
  display: block;
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
}

.assurance-container {
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
.related-projects h2,
.related-project-caption h3 {
  margin: 0;
}

.project-heading h1,
.project-story h2,
.related-projects h2 {
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
  aspect-ratio: 672 / 242;
  margin: 0;
  border: 1px solid #78b9e8;
  border-radius: 4px;
  object-fit: cover;
}

.project-story {
  display: grid;
  gap: 38px;
  width: min(100%, 760px);
  margin: 38px auto 42px;
}

.project-story h2,
.related-projects h2 {
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 1.25;
}

.project-story p,
.project-story li {
  color: #666;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 14px;
  line-height: 1.65;
}

.project-story p + p {
  margin-top: 12px;
}

.project-story ul {
  margin: 8px 0 12px;
}

.dashboard-showcase {
  margin-top: 40px;
}

.dashboard-showcase img,
.product-screens img,
.closing-showcase img {
  display: block;
  width: 100%;
  height: auto;
}

.product-screens {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: 22px;
  margin-top: 24px;
}

.product-screens img {
  border-radius: 8px;
}

.product-screens img:nth-child(3) {
  grid-column: 1 / -1;
}

.closing-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.65fr);
  align-items: end;
  gap: 24px;
  margin-top: 32px;
}

.closing-showcase img {
  border-radius: 8px;
}

.closing-showcase p {
  max-width: 360px;
  margin: 0 0 8px;
  color: #777;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 13px;
  line-height: 1.6;
}

.related-projects {
  margin-top: 54px;
  padding-top: 30px;
  border-top: 1px solid #dedede;
}

.related-projects-carousel {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) 40px;
  align-items: center;
  gap: 12px;
}

.carousel-arrow {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  color: #6741c7;
  background: #f1edff;
  cursor: pointer;
}

.carousel-arrow:disabled {
  opacity: 0.35;
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

.related-projects-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  padding: 8px 0 12px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  outline: none;
}

.related-projects-track::-webkit-scrollbar {
  display: none;
}

.related-projects-track:focus-visible {
  outline: 2px solid #5c308c;
  outline-offset: 5px;
}

.related-project {
  flex: 0 0 clamp(230px, 28vw, 330px);
  color: inherit;
  text-decoration: none;
  scroll-snap-align: start;
}

.related-project:focus-visible {
  outline: 2px solid #5c308c;
  outline-offset: 4px;
}

.related-project > img {
  display: block;
  width: 100%;
  aspect-ratio: 1.35;
  border-radius: 6px;
  background: #eef0fa;
  object-fit: cover;
}

.related-project-caption {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding-top: 10px;
}

.related-project-caption h3 {
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: 15px;
  font-weight: 600;
}

.related-project-caption span {
  color: #777;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 11px;
}

.related-project-caption .related-project-more {
  margin-left: auto;
  padding: 5px 12px;
  border-radius: 999px;
  background: #f5f5f5;
  color: #222;
  white-space: nowrap;
}

@media (max-width: 760px) {
  .assurance-container {
    width: min(100% - 32px, 560px);
  }

  .project-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 18px;
  }

  .product-screens {
    gap: 14px;
  }

  .closing-showcase {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .closing-showcase p {
    max-width: 620px;
  }

  .related-projects-track {
    gap: 16px;
  }

  .related-project {
    flex-basis: min(78vw, 320px);
  }
}

@media (max-width: 480px) {
  .assurance-page {
    padding-top: 72px;
  }

  .assurance-hero img {
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

  .product-screens {
    grid-template-columns: 1fr;
  }

  .product-screens img:nth-child(3) {
    grid-column: auto;
  }

  .client-about p,
  .project-story p,
  .project-story li {
    font-size: 13px;
  }
}
</style>