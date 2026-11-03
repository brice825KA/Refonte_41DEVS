<script setup lang="js">
import NavBar from './container/helper/NavBar.vue';
import MyFooter from '@/container/helper/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar class="fixed bg-transparent top-0 left-0 z-1000 w-full"/>
  <RouterView />
  <MyFooter/>
</template>
