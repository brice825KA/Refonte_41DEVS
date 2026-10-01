<script setup lang="js">
import NavBar from './container/helper/NavBar.vue';
import MyFooter from '@/container/helper/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar class="sticky bg-[#F8F8F8] top-0 left-0 z-1000"/>
  <RouterView />
  <MyFooter/>
</template>

<style scoped></style>
