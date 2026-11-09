<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import insuranceIcon from '@/asset/icons/ic_industries3.svg'
import financeIcon from '@/asset/icons/ic_industries1.svg'
import publicIcon from '@/asset/icons/ic_industries2.svg'
import healthIcon from '@/asset/icons/ic_industries4.svg'
import entertainmentIcon from '@/asset/icons/ic_industries5.svg'
import securityIcon from '@/asset/icons/ic_industries6.svg'
import afgBankImage from '@/asset/images/img_AFG_Bank_accuil_realise.webp'
import oremiImage from '@/asset/images/img_oremi_acceuil_realise.webp'
import grhImage from '@/asset/images/img_presidence_grh_acceuil_realise.webp'
import etchiteImage from '@/asset/images/img_etchite_acceuil_realise.webp'
import assuranceImage from '@/asset/images/img_assurance_acceuil_realise.webp'

type Solution = {
  title: string
  description: string
}

type IndustryDetail = {
  title: string
  icon: string
  solutions: Solution[]
}

const route = useRoute()
const showAllProjects = ref(false)
const expandedProject = ref<string | null>(null)

const industryDetails: Record<string, IndustryDetail> = {
  'banque-finance': {
    title: 'Banque et finance',
    icon: financeIcon,
    solutions: [
      { title: 'Core Banking', description: 'Des solutions de cœur bancaire modernes, fiables et sécurisées, conçues pour répondre aux besoins des institutions financières.' },
      { title: 'Onboarding Clients', description: 'Un parcours client digital simple et personnalisé pour faciliter l’inscription et la souscription aux services bancaires.' },
      { title: 'Banque mobile', description: 'Une expérience bancaire mobile intuitive pour gérer ses comptes et effectuer ses opérations au quotidien.' },
      { title: 'Bank to Wallet', description: 'Des passerelles de paiement qui relient les comptes bancaires aux portefeuilles électroniques.' },
      { title: 'Crédits en ligne', description: 'Un parcours de demande et de suivi de crédit accessible en ligne, de la simulation à la décision.' },
      { title: 'Monétique', description: 'Des solutions de paiement électronique sécurisées pour les commerçants et leurs clients.' },
    ],
  },
  assurance: {
    title: 'Assurance',
    icon: insuranceIcon,
    solutions: [
      { title: 'Onboarding Clients', description: 'Un parcours digital pour découvrir les offres, souscrire et transmettre les documents nécessaires.' },
      { title: 'Comparateur', description: 'Comparez les offres et garanties afin de trouver la couverture adaptée à chaque besoin.' },
      { title: 'Gestion des contrats', description: 'Des outils pour administrer les polices, suivre les échéances et gérer les contrats.' },
      { title: 'Gestion des sinistres', description: 'Déclarez et suivez les sinistres grâce à un parcours simple et transparent.' },
      { title: 'Gestion des PV', description: 'Centralisez le suivi des procès-verbaux et des pièces liées aux dossiers d’assurance.' },
      { title: 'Statistiques', description: 'Des tableaux de bord pour analyser les activités et visualiser les indicateurs clés.' },
    ],
  },
  'secteur-public': {
    title: 'Secteur public',
    icon: publicIcon,
    solutions: [
      { title: 'Gestion RH', description: 'Une solution centralisée pour gérer les agents, les dossiers et les parcours professionnels.' },
      { title: 'Gestion des marchés', description: 'Suivez les marchés publics, de la planification à l’exécution et à leur clôture.' },
      { title: 'Comptabilité', description: 'Des outils pour piloter les opérations comptables et produire des rapports fiables.' },
      { title: 'Gestion de la paie', description: 'Automatisez le calcul des salaires, les déclarations sociales et les états de paie.' },
      { title: 'Missions', description: 'Organisez les missions, les ordres de déplacement et le suivi des dépenses associées.' },
      { title: 'Gestion des opérations', description: 'Coordonnez les opérations et suivez leur avancement depuis un espace unique.' },
    ],
  },
  'sante-pharmaceutique': {
    title: 'Santé et Industrie pharmaceutique',
    icon: healthIcon,
    solutions: [
      { title: 'SI Hospitalier', description: 'Une plateforme intégrée pour coordonner les activités, les dossiers patients et les services hospitaliers.' },
      { title: 'ERP clinique', description: 'Optimisez la gestion administrative, financière et opérationnelle de votre établissement de santé.' },
      { title: 'Assurance santé', description: 'Suivez les contrats, remboursements et prestations de santé dans un espace dédié.' },
      { title: 'E-ordonnance', description: 'Dématérialisez les prescriptions et simplifiez leur transmission aux professionnels de santé.' },
      { title: 'E-learning médical', description: 'Proposez des formations en ligne adaptées aux professionnels de santé.' },
      { title: 'Stock pharma', description: 'Suivez les stocks pharmaceutiques, les approvisionnements et les dates de péremption.' },
    ],
  },
  divertissement: {
    title: 'Divertissement',
    icon: entertainmentIcon,
    solutions: [
      { title: 'Plateforme Événements', description: 'Organisez et gérez vos événements depuis une plateforme simple et accessible.' },
      { title: 'Billetterie électronique', description: 'Vendez et contrôlez vos billets grâce à un parcours de billetterie digital.' },
      { title: 'Cartes', description: 'Proposez des cartes personnalisées pour gérer les accès, avantages ou paiements.' },
    ],
  },
  securite: {
    title: 'Sécurité',
    icon: securityIcon,
    solutions: [
      { title: 'Gestion RH', description: 'Centralisez les dossiers du personnel, les affectations et les informations de formation.' },
      { title: 'Gestion de présence', description: 'Suivez les présences et les horaires des équipes sur différents sites.' },
      { title: 'Gestion de stock', description: 'Gérez les équipements, les entrées et sorties ainsi que les niveaux de stock.' },
    ],
  },
}

const industry = computed(() => industryDetails[String(route.params.slug)])

const projects = [
  {
    name: 'AFG Bank',
    image: afgBankImage,
    client: 'Client : Atlantique Assurance',
    description: 'Une expérience mobile claire et intuitive pour accéder aux services bancaires.',
    layout: 'afg-bank',
  },
  {
    name: 'Oremi',
    image: oremiImage,
    client: 'Une expérience digitale dédiée aux assurances.',
    description: 'Une interface mobile pour consulter les contrats et les produits d’assurance.',
    layout: 'oremi',
  },
  {
    name: 'Présidence GRH',
    image: grhImage,
    client: 'Une plateforme de gestion des ressources humaines.',
    description: 'Un outil centralisé pour faciliter le suivi des équipes et des opérations RH.',
    layout: 'grh',
  },
  {
    name: 'ETCHITÉ',
    image: etchiteImage,
    client: 'Une application de gestion accessible sur mobile.',
    description: 'Des fonctionnalités essentielles réunies dans une expérience simple.',
    layout: 'etchite',
  },
  {
    name: 'Mon Assurance',
    image: assuranceImage,
    client: 'Un parcours de souscription en ligne.',
    description: 'Découvrez et comparez des offres d’assurance depuis une interface dédiée.',
    layout: 'mon-assurance',
  },
]

const visibleProjects = computed(() => showAllProjects.value ? projects : projects.slice(0, 2))

function toggleProject(projectName: string) {
  expandedProject.value = expandedProject.value === projectName ? null : projectName
}
</script>

<template>
  <main v-if="industry" class="industry-detail">
    <header class="industry-hero">
      <RouterLink to="/industries" class="industry-back" aria-label="Retour à la page Industries">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
        </svg>
      </RouterLink>
      <h1>{{ industry.title }}</h1>
    </header>

    <section class="solutions-section">
      <div class="detail-container">
        <h2>Nos solutions</h2>
        <div class="solutions-grid">
          <article v-for="solution in industry.solutions" :key="solution.title" class="solution-card">
            <div class="solution-icon-box" aria-hidden="true">
              <img :src="industry.icon" alt="" class="solution-icon">
            </div>
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="realisations" class="projects-section">
      <div class="detail-container">
        <div class="projects-heading">
          <h2>Nos réalisations</h2>
          <button
            type="button"
            class="projects-toggle"
            :aria-expanded="showAllProjects"
            @click="showAllProjects = !showAllProjects"
          >
            {{ showAllProjects ? 'Voir moins' : 'Voir tout' }}
          </button>
        </div>

        <div class="projects-grid">
          <article v-for="project in visibleProjects" :key="project.name" class="project-card" :class="project.layout">
            <div class="project-image-wrap">
              <img :src="project.image" :alt="`Projet ${project.name}`" loading="lazy">
              <div v-if="project.layout === 'afg-bank'" class="project-image-overlay">
                <span>{{ project.name }}</span>
                <span>{{ project.client }}</span>
              </div>
              <button
                v-if="project.layout === 'afg-bank'"
                type="button"
                class="project-more"
                :aria-expanded="expandedProject === project.name"
                @click="toggleProject(project.name)"
              >
                {{ expandedProject === project.name ? 'Fermer' : 'Voir plus' }}
              </button>
            </div>
            <div v-if="expandedProject === project.name" class="project-description">
              {{ project.description }}
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
  <main v-else class="grid min-h-[50vh] place-items-center">
    <RouterLink to="/industries" class="text-[#5C308C] underline">Retour aux industries</RouterLink>
  </main>
</template>

<style scoped>
.industry-detail {
  background: #fff;
  color: #141414;
}

.industry-hero {
  display: grid;
  justify-items: center;
  gap: 32px;
  padding: 104px 20px 34px;
  background: #0c0020;
  color: #fff;
  text-align: center;
}

.industry-back {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 50%;
  background: #fff;
  color: #a855f7;
  transition: transform 180ms ease;
}

.industry-back:hover {
  transform: translateX(-2px);
}

.industry-back svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.industry-hero h1 {
  max-width: 760px;
  margin: 0;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.15;
}

.detail-container {
  width: min(100% - 40px, 1100px);
  margin-inline: auto;
}

.solutions-section {
  padding: 34px 0 52px;
}

.solutions-section h2,
.projects-heading h2 {
  margin: 0;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 600;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 20px;
}

.solution-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 150px;
  padding: 18px;
  background: #f7f7fa;
  transition: color 1.2s ease-in-out;
}

.solution-card::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  background: #5c2f8c;
  content: '';
  pointer-events: none;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 1.2s ease-in-out;
}

.solution-card:hover::before {
  transform: scaleY(1);
}

.solution-card h3,
.solution-card p,
.solution-icon-box {
  transition: color 1.2s ease-in-out, border-color 1.2s ease-in-out;
}

.solution-card:hover h3,
.solution-card:hover p {
  color: #fff;
}

.solution-card:hover .solution-icon-box {
  border-color: rgb(255 255 255 / 0.7);
}

.solution-icon-box {
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 1px solid #d5b6f5;
  border-radius: 2px;
}

.solution-icon {
  width: 15px;
  height: 15px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(38%) sepia(69%) saturate(1053%) hue-rotate(232deg) brightness(94%) contrast(90%);
  transition: filter 1.2s ease-in-out;
}

.solution-card:hover .solution-icon {
  filter: brightness(0) invert(1);
}

.solution-card h3 {
  margin: 10px 0 5px;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
}

.solution-card p {
  margin: 0;
  color: #686868;
  font-size: 11px;
  line-height: 1.45;
}

.projects-section {
  padding: 0 0 64px;
}

.projects-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.projects-toggle {
  padding: 4px 0;
  border: 0;
  background: transparent;
  color: #141414;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 20px;
}

.project-card {
  position: relative;
  min-width: 0;
}

.project-image-wrap {
  position: relative;
  overflow: hidden;
  background: #efeff5;
}

.project-card img {
  display: block;
  width: 100%;
  aspect-ratio: 1.25;
  object-fit: cover;
}

.oremi img {
  aspect-ratio: 1;
}

.project-image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background: linear-gradient(180deg, rgba(10, 4, 25, 0.62), transparent 38%, transparent 65%, rgba(10, 4, 25, 0.58));
  color: #fff;
  font-size: 13px;
}

.project-image-overlay span:last-child {
  font-size: 10px;
}

.project-more {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 6px 12px;
  border: 0;
  border-radius: 999px;
  background: #fff;
  color: #17121e;
  font-size: 10px;
  cursor: pointer;
}

.project-description {
  padding: 12px 0;
  color: #686868;
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 767px) {
  .industry-hero {
    gap: 20px;
    padding: 92px 16px 30px;
  }

  .detail-container {
    width: min(100% - 32px, 1100px);
  }

  .solutions-section {
    padding: 28px 0 40px;
  }

  .solutions-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .solution-card {
    min-height: 140px;
    padding: 13px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card,
  .oremi {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .solution-card,
  .solution-card::before,
  .solution-card h3,
  .solution-card p,
  .solution-icon-box,
  .solution-icon {
    transition: none;
  }
}
</style>
