<script setup lang="ts">
const items = [
  'Entreprises',
  'Institutions',
  'Gouvernement',
]
</script>

<template>
    <div class="grid items-center justify-center text-center font-family-[Neue Haas Grotesk Display Pro] font-semibold text-8xl gap-y-1 bg-[radial-gradient(circle_at_50%_8%,rgba(165,94,255,0.45),transparent_30%),linear-gradient(180deg,#2A0D45_0%,#180819_50%,#09090D_100%)]">
        <div class="bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-5">Nous accompagnons la</div>
        <div class="bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent py-5">transformation digitale des</div>
        <div class="">
            <UCarousel
            v-slot="{ item }"
            orientation="vertical"
            loop
            :autoplay="{ delay: 5000, pauseOnHover: true }"
            :items="items"
            :ui="{ container: 'h-50' }"
            class="flex justify-center items-center"
            >
            <div class="bg-[linear-gradient(90deg,#999999_0%,#ffffff_35%,#ffffff_100%)] bg-clip-text text-transparent"> {{ item }} </div>
            </UCarousel>
        </div>
    </div>
</template>
