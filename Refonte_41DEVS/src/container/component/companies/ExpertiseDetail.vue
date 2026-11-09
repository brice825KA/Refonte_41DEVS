<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import infrastructureService1 from '@/asset/icons/ic_infrastructre_acceuil1.svg'
import infrastructureService2 from '@/asset/icons/ic_infrastructre_acceuil2.svg'
import infrastructureService3 from '@/asset/icons/ic_infrastructre_acceuil3.svg'
import engineeringService1 from '@/asset/icons/ic_ingenieur_expertises1.svg'
import engineeringService2 from '@/asset/icons/ic_ingenieur_expertises2.svg'
import engineeringService3 from '@/asset/icons/ic_ingenieur_expertises3.svg'
import client1 from '@/asset/icons/ic_carreousel_client1.svg'
import client2 from '@/asset/icons/ic_carreousel_client2.svg'
import client5 from '@/asset/icons/ic_carreousel_client5.svg'
import client6 from '@/asset/icons/ic_carreousel_client6.svg'
import client7 from '@/asset/icons/ic_carreousel_client7.svg'
import client8 from '@/asset/icons/ic_carreousel_client8.svg'
import engineeringMethodImage from '@/asset/images/img_expertise2.webp'
import infrastructureMethodImage from '@/asset/images/img_expertise3.webp'

type ExpertiseService = {
  icon: string
  title: string
  description: string
}

type MethodStep = {
  title: string
  description: string
}

type ExpertisePage = {
  title: string
  introduction: string
  services: ExpertiseService[]
  methodImage: string
  methodSteps: MethodStep[]
}

const route = useRoute()
const clients = [client1, client2, client5, client6, client7, client8]

const expertisePages: Record<string, ExpertisePage> = {
  'ingenierie-developpement': {
    title: 'Ingénierie et Développement de logiciels',
    introduction: 'Nous concevons des solutions digitales et innovantes, centrées sur les utilisateurs et fondées sur des technologies modernes. De l’architecture à la mise en production, nous construisons des produits fiables, évolutifs et adaptés à vos objectifs.',
    services: [
      {
        icon: engineeringService1,
        title: 'Architecture logicielle',
        description: 'Des architectures robustes et évolutives, pensées pour répondre à vos besoins métier et accompagner votre croissance.',
      },
      {
        icon: engineeringService2,
        title: 'Intégrations de systèmes',
        description: 'Nous connectons vos outils et vos données pour simplifier les échanges et fluidifier vos processus.',
      },
      {
        icon: engineeringService3,
        title: 'Développement web et mobile',
        description: 'Des applications performantes et accessibles, conçues pour offrir une expérience cohérente sur tous les supports.',
      },
    ],
    methodImage: engineeringMethodImage,
    methodSteps: [
      {
        title: 'Project Discovery',
        description: 'Nous explorons vos objectifs, vos utilisateurs et vos contraintes pour définir une vision produit claire.',
      },
      {
        title: 'UI/UX Core',
        description: 'Nous concevons des parcours et des interfaces intuitifs, puis les affinons avec vos équipes.',
      },
      {
        title: 'Développement',
        description: 'Nos équipes réalisent votre solution avec une attention particulière à la qualité et à la fiabilité.',
      },
      {
        title: 'Déploiement',
        description: 'Nous préparons la mise en production et vous accompagnons dans la prise en main de votre produit.',
      },
    ],
  },
  'infrastructure-informatique': {
    title: 'Infrastructure informatique',
    introduction: 'Nous déployons des infrastructures informatiques fiables et sécurisées, adaptées à votre organisation. Nos équipes vous accompagnent dans leur conception, leur évolution et leur maintien en condition opérationnelle.',
    services: [
      {
        icon: infrastructureService1,
        title: 'Infrastructure physique',
        description: 'Des environnements matériels dimensionnés selon vos usages et conçus pour assurer la disponibilité de vos services.',
      },
      {
        icon: infrastructureService2,
        title: 'Infrastructure cloud',
        description: 'Des plateformes cloud flexibles et sécurisées pour héberger vos applications et accompagner votre évolution.',
      },
      {
        icon: infrastructureService3,
        title: 'Réseaux multiservices',
        description: 'Des réseaux performants qui assurent une connectivité fiable entre vos sites, vos équipes et vos outils.',
      },
    ],
    methodImage: infrastructureMethodImage,
    methodSteps: [
      {
        title: 'Analyse des besoins',
        description: 'Nous évaluons vos usages, vos équipements et vos contraintes pour établir un état des lieux précis.',
      },
      {
        title: 'Propositions',
        description: 'Nous définissons une architecture adaptée, avec des choix techniques alignés sur vos priorités.',
      },
      {
        title: 'Déploiement',
        description: 'Nous installons et configurons vos équipements et services en veillant à la continuité de vos activités.',
      },
      {
        title: 'Maintenance et Support',
        description: 'Nous suivons vos infrastructures et vous apportons un support pour en préserver la disponibilité.',
      },
    ],
  },
}

const expertise = computed(() => expertisePages[String(route.params.expertise)])
const clientTrack = [...clients, ...clients]
const reverseClientTrack = [...clients].reverse()
  .concat([...clients].reverse())
const rotatingMethodSteps = computed(() => {
  const steps = expertise.value?.methodSteps.map((step) => step.title) ?? []
  return [...steps, ...steps]
})
const activeMethodStepIndex = ref(0)
const animateMethodSteps = ref(true)
const methodStepTrackStyle = computed(() => ({
  transform: `translateY(-${activeMethodStepIndex.value * 2.2}rem)`,
}))
let methodStepInterval: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  methodStepInterval = setInterval(() => {
    activeMethodStepIndex.value += 1
  }, 2600)
})

onUnmounted(() => {
  if (methodStepInterval) clearInterval(methodStepInterval)
})

watch(() => route.params.expertise, () => {
  activeMethodStepIndex.value = 0
})

function resetMethodStepRotation(event: TransitionEvent) {
  const stepCount = expertise.value?.methodSteps.length ?? 0
  if (
    event.target !== event.currentTarget ||
    !stepCount ||
    activeMethodStepIndex.value < stepCount
  ) return

  animateMethodSteps.value = false
  activeMethodStepIndex.value = 0
  requestAnimationFrame(() => {
    animateMethodSteps.value = true
  })
}
</script>

<template>
  <main v-if="expertise" class="expertise-detail">
    <header class="expertise-hero">
      <RouterLink to="/companies" class="expertise-back" aria-label="Retour à la page Expertises">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
        </svg>
      </RouterLink>
      <h1>{{ expertise.title }}</h1>
    </header>

    <section class="services-section">
      <div class="detail-container">
        <p class="expertise-introduction">{{ expertise.introduction }}</p>
        <h2>Nos Services</h2>
        <div class="services-grid">
          <article v-for="service in expertise.services" :key="service.title" class="service-card">
            <div class="service-icon">
              <img :src="service.icon" alt="" aria-hidden="true">
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="methodology-section">
      <div class="methodology-container">
        <div class="methodology-heading">
          <h2>Notre méthodologie</h2>
          <p>Une approche structurée et collaborative pour faire de vos projets une réussite durable.</p>
        </div>
        <div class="methodology-content">
          <div
            class="methodology-image-card"
            tabindex="0"
            :aria-label="`Méthodologie ${expertise.title}`"
          >
            <div class="methodology-image-flipper">
              <div class="methodology-image-face methodology-image-front">
                <img
                  :src="expertise.methodImage"
                  :alt="expertise.title"
                  class="methodology-image"
                  loading="lazy"
                >
              </div>
              <div class="methodology-image-face methodology-image-back" aria-hidden="true">
                <div class="methodology-step-window">
                  <div
                    class="methodology-step-labels"
                    :class="{ 'is-moving': animateMethodSteps }"
                    :style="methodStepTrackStyle"
                    @transitionend="resetMethodStepRotation"
                  >
                    <span
                      v-for="(step, index) in rotatingMethodSteps"
                      :key="`${step}-${index}`"
                      class="methodology-step-label"
                      :class="{ 'is-active': index === activeMethodStepIndex + 2 }"
                    >
                      {{ step }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="methodology-steps">
            <li v-for="step in expertise.methodSteps" :key="step.title" class="methodology-step">
              <span class="step-marker" aria-hidden="true"></span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="clients-section">
      <div class="detail-container">
        <div class="clients-heading">
          <h2>Les clients avec qui nous collaborons</h2>
          <p>Au fil des projets, de nombreuses entreprises nous font confiance et avancent à nos côtés.</p>
        </div>
        <div class="client-carousel" aria-label="Logos de nos clients">
          <div class="client-track">
            <div v-for="(client, index) in clientTrack" :key="`${index}-${client}`" class="client-logo">
              <img
                :src="client"
                :alt="index < clients.length ? `Client partenaire ${index + 1}` : ''"
                :aria-hidden="index >= clients.length"
                loading="lazy"
              >
            </div>
          </div>
        </div>
        <div class="client-carousel client-carousel--reverse" aria-label="Logos clients défilant en sens inverse">
          <div class="client-track client-track--reverse" aria-hidden="true">
            <div v-for="(client, index) in reverseClientTrack" :key="`${index}-${client}`" class="client-logo">
              <img :src="client" alt="" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <main v-else class="grid min-h-[50vh] place-items-center">
    <RouterLink to="/companies" class="text-[#5C308C] underline">Retour aux expertises</RouterLink>
  </main>
</template>

<style scoped>
.expertise-detail {
  overflow: hidden;
  background: #fff;
  color: #141414;
}

.expertise-hero {
  display: grid;
  justify-items: center;
  gap: 20px;
  padding: 116px 24px 48px;
  background: #0c0020;
  color: #fff;
  text-align: center;
}

.expertise-back {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 0.45);
  border-radius: 50%;
  color: #fff;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
}

.expertise-back:hover {
  transform: translateX(-2px);
  background: #fff;
  color: #5c308c;
}

.expertise-back svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.expertise-back:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

.expertise-hero h1 {
  max-width: 760px;
  margin: 0;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.15;
}

.detail-container,
.methodology-container {
  width: min(100% - 48px, 1120px);
  margin-inline: auto;
}

.services-section {
  padding: 28px 0 42px;
}

.expertise-introduction {
  max-width: 770px;
  margin: 0 0 36px;
  color: #6b6b72;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 15px;
  line-height: 1.6;
}

.services-section h2,
.methodology-heading h2,
.clients-heading h2 {
  margin: 0;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 600;
  line-height: 1.2;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 20px;
}

.service-card {
  min-height: 178px;
  padding: 20px;
  background: #f7f7fa;
}

.service-icon {
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 1px solid #e7d6f7;
  background: #fff;
}

.service-icon img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.service-card h3 {
  margin: 12px 0 6px;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
}

.service-card p {
  margin: 0;
  color: #686870;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 12px;
  line-height: 1.5;
}

.methodology-section {
  padding: 48px 0 52px;
  background:
    radial-gradient(ellipse at 38% 100%, rgb(91 36 151 / 0.62), transparent 58%),
    linear-gradient(110deg, #100022 0%, #26004d 62%, #140027 100%);
  color: #fff;
}

.methodology-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 30px;
}

.methodology-heading p,
.clients-heading p {
  max-width: 340px;
  margin: 0;
  color: rgb(255 255 255 / 0.65);
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 12px;
  line-height: 1.55;
}

.methodology-content {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  align-items: stretch;
  gap: clamp(32px, 7vw, 90px);
}

.methodology-image-card {
  position: relative;
  width: 100%;
  max-height: 440px;
  aspect-ratio: 1 / 1;
  align-self: start;
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 8px;
  perspective: 1200px;
}

.methodology-image-card:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

.methodology-image-flipper {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  transform-style: preserve-3d;
  transition: transform 800ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.methodology-image-card:hover .methodology-image-flipper,
.methodology-image-card:focus .methodology-image-flipper {
  transform: rotateY(180deg);
}

.methodology-image-face {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  backface-visibility: hidden;
}

.methodology-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.methodology-image-back {
  display: flex;
  align-items: flex-end;
  padding: 1.25rem 1.375rem;
  background: linear-gradient(145deg, #7c3aed, #4c1d95);
  transform: rotateY(180deg);
}

.methodology-step-window {
  display: flex;
  height: 6.6rem;
  overflow: hidden;
}

.methodology-step-labels {
  display: flex;
  flex-direction: column;
}

.methodology-step-labels.is-moving {
  transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
}

.methodology-step-label {
  display: flex;
  flex: 0 0 2.2rem;
  align-items: center;
  color: rgb(255 255 255 / 0.48);
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  transition: color 500ms ease, font-size 500ms ease, font-weight 500ms ease;
}

.methodology-step-label.is-active {
  color: #fff;
  font-size: clamp(24px, 3vw, 41px);
  font-weight: 700;
  line-height: 0.9;
}

.methodology-steps {
  position: relative;
  display: grid;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.methodology-steps::before {
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 5px;
  width: 1px;
  background: rgb(255 255 255 / 0.38);
  content: '';
}

.methodology-step {
  position: relative;
  display: grid;
  grid-template-columns: 11px minmax(0, 1fr);
  gap: 14px;
}

.step-marker {
  z-index: 1;
  width: 11px;
  height: 11px;
  margin-top: 4px;
  border: 2px solid #9c4feb;
  border-radius: 50%;
  background: #fff;
}

.methodology-step h3 {
  margin: 0 0 6px;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
}

.methodology-step p {
  max-width: 360px;
  margin: 0;
  color: rgb(255 255 255 / 0.68);
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 11px;
  line-height: 1.5;
}

.clients-section {
  padding: 36px 0 54px;
  background: #fff;
}

.clients-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 22px;
}

.clients-heading h2 {
  max-width: 420px;
  font-size: clamp(22px, 2.5vw, 30px);
}

.clients-heading p {
  color: #777780;
}

.client-carousel {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
}

.client-track {
  display: flex;
  width: max-content;
  align-items: center;
  animation: client-marquee 34s linear infinite;
}

.client-carousel:hover .client-track {
  animation-play-state: paused;
}

.client-carousel--reverse {
  margin-top: 12px;
}

.client-track--reverse {
  animation-name: client-marquee-reverse;
}

.client-logo {
  display: grid;
  width: 150px;
  height: 58px;
  flex: 0 0 150px;
  place-items: center;
  margin-right: 14px;
  background: #f7f7f5;
}

.client-logo img {
  display: block;
  max-width: 88%;
  max-height: 46px;
  object-fit: contain;
}

@keyframes client-marquee {
  to {
    transform: translateX(-50%);
  }
}

@keyframes client-marquee-reverse {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

@media (max-width: 767px) {
  .expertise-hero {
    padding: 96px 20px 36px;
  }

  .detail-container,
  .methodology-container {
    width: min(100% - 32px, 1120px);
  }

  .expertise-introduction {
    margin-bottom: 28px;
  }

  .services-section {
    padding: 24px 0 32px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 16px;
  }

  .service-card {
    min-height: 0;
    padding: 16px;
  }

  .methodology-section {
    padding: 34px 0 38px;
  }

  .methodology-heading,
  .clients-heading {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 22px;
  }

  .methodology-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .methodology-image-card {
    width: min(100%, 420px);
    max-height: none;
  }

  .methodology-steps {
    gap: 16px;
  }

  .clients-section {
    padding: 30px 0 40px;
  }

  .client-logo {
    width: 130px;
    flex-basis: 130px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .client-track {
    animation: none;
  }

  .methodology-image-flipper,
  .methodology-step-labels.is-moving,
  .methodology-step-label {
    transition: none;
  }
}
</style>
