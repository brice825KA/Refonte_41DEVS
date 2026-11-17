<script lang="js" setup>
import { useRoute } from 'vue-router';
import BottomFooter from './BottomFooter.vue';
import TopFooter from './TopFooter.vue';

const route = useRoute();
</script>

<template>
    <footer class="px-4 sm:px-8 md:px-14 lg:px-14 bg-[#0C0020]">
        <TopFooter v-if="route.name !== 'oremi-project' && route.name !== 'mon-assurance-project'" />
        <BottomFooter/>
    </footer>
</template>